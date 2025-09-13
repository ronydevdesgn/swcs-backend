import { FastifyRequest, FastifyReply } from "fastify";
import {
  CreateFuncionarioInput,
  UpdateFuncionarioInput,
  IdParam,
} from "../schemas/funcionario.schema";
import { hashSenha } from "../utils/hash";
import { TipoUsuario, Prisma, Cargo } from "@prisma/client";
import { AppError, isAppError } from "../types/errors";
import { sendError } from "../utils/http";

export async function criarFuncionario(
  req: FastifyRequest<{ Body: CreateFuncionarioInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { Nome, Email, Senha, Cargo } = req.body;

    // Hash da senha
    const senhaHash = await hashSenha(Senha);

    // Usar transação para garantir consistência
    const funcionario = await prisma.$transaction(async (tx) => {
      // Verificar email único
      const emailExiste = await tx.usuario.findUnique({
        where: { Email },
      });

      if (emailExiste) {
        return sendError(reply, 409, "Email já está em uso");
      }

      // Criar o usuário primeiro
      const novoUsuario = await tx.usuario.create({
        data: {
          Nome,
          Email,
          SenhaHash: senhaHash,
          Tipo: TipoUsuario.FUNCIONARIO,
          Permissoes: {
            create: [
              { PermissaoID: 1 }, // Permissões padrão do funcionário
              { PermissaoID: 3 }, // Adicione as permissões conforme necessário
            ],
          },
        },
      });

      // Criar o funcionário vinculado ao usuário
      return await tx.funcionario.create({
        data: {
          Nome,
          Email,
          Cargo: Cargo,
          UsuarioID: novoUsuario.UsuarioID,
        },
        include: {
          Usuario: {
            select: {
              Email: true,
              Tipo: true,
              Permissoes: {
                select: {
                  Permissao: {
                    select: {
                      PermissaoID: true,
                      Descricao: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
    });

    return reply.status(201).send({
      mensagem: "Funcionário criado com sucesso",
      data: funcionario,
    });
  } catch (error) {
    req.log.error("Erro ao criar funcionário:", error);

    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return sendError(reply, 409, "Email já está em uso");
    }

    return sendError(reply, 500, "Erro interno ao criar funcionário");
  }
}

export async function listarFuncionarios(
  req: FastifyRequest<{ Querystring: { search?: string; cargo?: string } }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { search, cargo } = req.query;

    // Construir query dinâmica
    let where: Prisma.FuncionarioWhereInput = {};
    if (search) {
      where.OR = [
        { Nome: { contains: search } },
        { Usuario: { Email: { contains: search } } },
      ];
    }
    if (cargo) {
      where.Cargo = cargo as Cargo;
    }

    const funcionarios = await prisma.funcionario.findMany({
      where,
      include: {
        Usuario: {
          select: {
            Email: true,
            Permissoes: {
              include: {
                Permissao: true,
              },
            },
          },
        },
      },
      orderBy: {
        Nome: "asc",
      },
    });

    // Agrupar por cargo para estatísticas
    const estatisticas = funcionarios.reduce((acc, curr) => {
      const cargo = curr.Cargo;
      if (!acc[cargo]) {
        acc[cargo] = 0;
      }
      acc[cargo]++;
      return acc;
    }, {} as Record<string, number>);

    return reply.send({
      data: funcionarios,
      meta: {
        total: funcionarios.length,
        porCargo: estatisticas,
      },
    });
  } catch (error) {
    req.log.error("Erro ao listar funcionários:", error);
    return sendError(reply, 500, "Erro interno ao listar funcionários");
  }
}

export async function buscarFuncionario(
  req: FastifyRequest<{ Params: IdParam }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { id } = req.params;

    const funcionario = await prisma.funcionario.findUnique({
      where: { FuncionarioID: id },
      include: {
        Usuario: {
          select: {
            Email: true,
            Permissoes: {
              include: {
                Permissao: true,
              },
            },
          },
        },
      },
    });

    if (!funcionario) {
      return sendError(reply, 404, "Funcionário não encontrado");
    }

    return reply.send({ data: funcionario });
  } catch (error) {
    req.log.error("Erro ao buscar funcionário:", error);
    return sendError(reply, 500, "Erro interno ao buscar funcionário");
  }
}

export async function atualizarFuncionario(
  req: FastifyRequest<{ Params: IdParam; Body: UpdateFuncionarioInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { id } = req.params;
    const dados = req.body;

    // Usar transação para garantir consistência
    const funcionario = await prisma.$transaction(async (tx) => {
      // Verificar se o funcionário existe
      const funcionarioExiste = await tx.funcionario.findUnique({
        where: { FuncionarioID: id },
        include: { Usuario: true },
      });

      if (!funcionarioExiste) {
        return sendError(reply, 404, "Funcionário não encontrado");
      }

      // Verificar email único se estiver sendo alterado
      if (dados.Email && dados.Email !== funcionarioExiste.Usuario?.Email) {
        const emailExiste = await tx.usuario.findUnique({
          where: { Email: dados.Email },
        });

        if (emailExiste) {
          return sendError(reply, 409, "Email já está em uso");
        }
      }

      // Atualizar funcionário
      const funcionarioAtualizado = await tx.funcionario.update({
        where: { FuncionarioID: id },
        data: {
          Nome: dados.Nome,
          Cargo: dados.Cargo,
        },
      });

      // Atualizar usuário se necessário
      if (dados.Email && funcionarioExiste.Usuario) {
        await tx.usuario.update({
          where: { UsuarioID: funcionarioExiste.Usuario.UsuarioID },
          data: {
            Email: dados.Email,
            Nome: dados.Nome,
          },
        });
      }

      return funcionarioAtualizado;
    });

    return reply.send({
      mensagem: "Funcionário atualizado com sucesso",
      data: funcionario,
    });
  } catch (error) {
    req.log.error("Erro ao atualizar funcionário:", error);

    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return sendError(reply, 409, "Email já está em uso");
    }

    return sendError(reply, 500, "Erro interno ao atualizar funcionário");
  }
}
