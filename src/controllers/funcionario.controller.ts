import { Cargo, Prisma, TipoUsuario } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import {
    CreateFuncionarioInput,
    IdParam,
    UpdateFuncionarioInput,
} from "../schemas/funcionario.schema";
import { hashSenha } from "../utils/hash";
import { sendError } from "../utils/http";

export async function criarFuncionario(
  req: FastifyRequest<{ Body: CreateFuncionarioInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { nome, email, senha, cargo } = req.body;

    // Hash da senha
    const senhaHash = await hashSenha(senha);

    // Usar transação para garantir consistência
    const funcionario = await prisma.$transaction(async (tx) => {
      // Verificar email único
      const emailExiste = await tx.usuario.findUnique({
        where: { email },
      });

      if (emailExiste) {
        throw new Error("Email já está em uso");
      }

      // Criar o usuário primeiro
      const novoUsuario = await tx.usuario.create({
        data: {
          nome,
          email,
          senhaHash: senhaHash,
          tipo: TipoUsuario.FUNCIONARIO,
          permissoes: {
            create: [
              { permissaoId: 1 }, // Permissões padrão do funcionário
              { permissaoId: 3 }, // Adicione as permissões conforme necessário
            ],
          },
        },
      });

      // Criar o funcionário vinculado ao usuário
      return await tx.funcionario.create({
        data: {
          nome,
          email,
          cargo: cargo,
          usuarioId: novoUsuario.usuarioId,
        },
        include: {
          usuario: {
            select: {
              email: true,
              tipo: true,
              permissoes: {
                select: {
                  permissao: {
                    select: {
                      permissaoId: true,
                      descricao: true,
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

    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
    if (errorMessage === "Email já está em uso") {
      return sendError(reply, 409, errorMessage);
    }

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
        { nome: { contains: search } },
        { usuario: { email: { contains: search } } },
      ];
    }
    if (cargo) {
      where.cargo = cargo as Cargo;
    }

    const funcionarios = await prisma.funcionario.findMany({
      where,
      include: {
        usuario: {
          select: {
            email: true,
            permissoes: {
              include: {
                permissao: true,
              },
            },
          },
        },
      },
      orderBy: {
        nome: "asc",
      },
    });

    // Agrupar por cargo para estatísticas
    const estatisticas = funcionarios.reduce((acc, curr) => {
      const cargo = curr.cargo;
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
      where: { funcionarioId: id },
      include: {
        usuario: {
          select: {
            email: true,
            permissoes: {
              include: {
                permissao: true,
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
        where: { funcionarioId: id },
        include: { usuario: true },
      });

      if (!funcionarioExiste) {
        throw new Error("Funcionário não encontrado");
      }

      // Verificar email único se estiver sendo alterado
      if (dados.email && dados.email !== funcionarioExiste.usuario?.email) {
        const emailExiste = await tx.usuario.findUnique({
          where: { email: dados.email },
        });

        if (emailExiste) {
          throw new Error("Email já está em uso");
        }
      }

      // Atualizar funcionário
      const funcionarioAtualizado = await tx.funcionario.update({
        where: { funcionarioId: id },
        data: {
          nome: dados.nome,
          cargo: dados.cargo,
        },
      });

      // Atualizar usuário se necessário
      if (dados.email && funcionarioExiste.usuario) {
        await tx.usuario.update({
          where: { usuarioId: funcionarioExiste.usuario.usuarioId },
          data: {
            email: dados.email,
            nome: dados.nome,
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

    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
    if (errorMessage === "Funcionário não encontrado") {
      return sendError(reply, 404, errorMessage);
    }
    if (errorMessage === "Email já está em uso") {
      return sendError(reply, 409, errorMessage);
    }

    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return sendError(reply, 409, "Email já está em uso");
    }

    return sendError(reply, 500, "Erro interno ao atualizar funcionário");
  }
}

export async function deletarFuncionario(
  req: FastifyRequest<{ Params: IdParam }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { id } = req.params;

    await prisma.$transaction(async (tx) => {
      // Verificar se o funcionário existe
      const funcionario = await tx.funcionario.findUnique({
        where: { funcionarioId: id },
      });

      if (!funcionario) {
        throw new Error("Funcionário não encontrado");
      }

      // Remover o funcionário (o usuário associado pode ser mantido ou removido dependendo da regra, 
      // aqui vamos remover ambos para manter a limpeza se for desejo do sistema, 
      // mas usualmente deletamos o perfil mantendo o log se necessário. 
      // Neste caso o teste espera que o funcionário suma).
      
      await tx.funcionario.delete({
        where: { funcionarioId: id },
      });

      // Se houver um usuário órfão, opcionalmente deletar:
      if (funcionario.usuarioId) {
        await tx.usuario.delete({
          where: { usuarioId: funcionario.usuarioId },
        });
      }
    });

    return reply.status(200).send({
      mensagem: "Funcionário removido com sucesso",
    });
  } catch (error) {
    req.log.error("Erro ao deletar funcionário:", error);

    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
    if (errorMessage === "Funcionário não encontrado") {
      return sendError(reply, 404, errorMessage);
    }

    return sendError(reply, 500, "Erro interno ao remover funcionário");
  }
}
