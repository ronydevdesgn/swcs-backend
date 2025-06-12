import { FastifyRequest, FastifyReply } from "fastify";
import {
  CreateFuncionarioInput,
  UpdateFuncionarioInput,
  IdParam,
} from "../schemas/funcionario.schema";
import { hashSenha } from "../utils/hash";
import { TipoUsuario } from "@prisma/client";

// Regex para validação de email
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function criarFuncionario(
  req: FastifyRequest<{ Body: CreateFuncionarioInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { Nome, Email, Senha, Cargo } = req.body;

    // Validar formato do email
    if (!EMAIL_REGEX.test(Email)) {
      return reply.status(400).send({
        mensagem: "Formato de email inválido",
      });
    }

    // Usar transação para garantir consistência
    const funcionario = await prisma.$transaction(async (tx) => {
      // Verificar email único
      const emailExiste = await tx.usuario.findUnique({
        where: { Email },
      });

      if (emailExiste) {
        throw { code: "DUPLICATE_EMAIL", message: "Email já está em uso" };
      }

      // Criar o funcionário
      const novoFuncionario = await tx.funcionario.create({
        data: {
          Nome,
          Cargo,
        },
      });

      // Hash da senha e criar usuário
      const senhaHash = await hashSenha(Senha);
      await tx.usuario.create({
        data: {
          Nome,
          Email,
          SenhaHash: senhaHash,
          Tipo: TipoUsuario.FUNCIONARIO,
          Funcionario: {
            connect: {
              FuncionarioID: novoFuncionario.FuncionarioID,
            },
          },
          Permissoes: {
            create: [
              { PermissaoID: 1 }, // Permissões padrão do funcionário
              { PermissaoID: 3 }, // Adicione as permissões conforme necessário
            ],
          },
        },
      });

      return novoFuncionario;
    });

    return reply.status(201).send({
      mensagem: "Funcionário criado com sucesso",
      data: funcionario,
    });
  } catch (error) {
    req.log.error(error);

    if (error.code === "DUPLICATE_EMAIL") {
      return reply.status(409).send({
        mensagem: error.message,
      });
    }

    return reply.status(500).send({
      mensagem: "Erro interno ao criar funcionário",
      detalhes:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}

export async function listarFuncionarios(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { search, cargo } = req.query as { search?: string; cargo?: string };

    // Construir query dinâmica
    const where = {
      ...(search && {
        OR: [
          { Nome: { contains: search, mode: "insensitive" } },
          { Usuario: { Email: { contains: search, mode: "insensitive" } } },
        ],
      }),
      ...(cargo && {
        Cargo: { equals: cargo, mode: "insensitive" },
      }),
    };

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
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao listar funcionários",
      detalhes:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
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
      return reply.status(404).send({
        mensagem: "Funcionário não encontrado",
      });
    }

    return reply.send({ data: funcionario });
  } catch (error) {
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao buscar funcionário",
      detalhes:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
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

    // Validar email se fornecido
    if (dados.Email && !EMAIL_REGEX.test(dados.Email)) {
      return reply.status(400).send({
        mensagem: "Formato de email inválido",
      });
    }

    // Usar transação para garantir consistência
    const funcionario = await prisma.$transaction(async (tx) => {
      // Verificar se o funcionário existe
      const funcionarioExiste = await tx.funcionario.findUnique({
        where: { FuncionarioID: id },
        include: { Usuario: true },
      });

      if (!funcionarioExiste) {
        throw { code: "NOT_FOUND", message: "Funcionário não encontrado" };
      }

      // Verificar email único se estiver sendo alterado
      if (dados.Email && dados.Email !== funcionarioExiste.Usuario?.Email) {
        const emailExiste = await tx.usuario.findUnique({
          where: { Email: dados.Email },
        });

        if (emailExiste) {
          throw { code: "DUPLICATE_EMAIL", message: "Email já está em uso" };
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
    req.log.error(error);

    if (error.code === "NOT_FOUND") {
      return reply.status(404).send({
        mensagem: error.message,
      });
    }

    if (error.code === "DUPLICATE_EMAIL") {
      return reply.status(409).send({
        mensagem: error.message,
      });
    }

    return reply.status(500).send({
      mensagem: "Erro interno ao atualizar funcionário",
      detalhes:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}
