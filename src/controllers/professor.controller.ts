import { Departamento, Prisma, TipoUsuario } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import {
  CreateProfessorInput,
  IdParam,
  UpdateProfessorInput,
} from "../schemas/professor.schema";
import { hashSenha } from "../utils/hash";
import { sendError } from "../utils/http";

export async function criarProfessor(
  req: FastifyRequest<{ Body: CreateProfessorInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { nome, email, senha, departamento, cargaHoraria } = req.body;

    // Verificar email único
    const emailExiste = await prisma.usuario.findUnique({
      where: { email },
    });

    if (emailExiste) {
      return sendError(reply, 409, "Email já está em uso");
    }

    // Criar professor e usuário em uma transação
    const result = await prisma.$transaction(async (tx) => {
      // Criar professor
      const professor = await tx.professor.create({
        data: {
          nome,
          departamento: departamento as Departamento,
          cargaHoraria,
        },
      });

      // Hash da senha
      const senhaHash = await hashSenha(senha);

      // Criar usuário associado
      await tx.usuario.create({
        data: {
          nome,
          email,
          senhaHash: senhaHash,
          tipo: TipoUsuario.PROFESSOR,
          professor: {
            connect: {
              professorId: professor.professorId,
            },
          },
          permissoes: {
            create: [
              { permissaoId: 1 }, // Registrar Sumário
              { permissaoId: 2 }, // Gerir Presenças
            ],
          },
        },
      });

      return professor;
    });

    return reply.status(201).send({
      mensagem: "Professor criado com sucesso",
      data: result,
    });
  } catch (error) {
    req.log.error("Erro ao criar professor:", error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return sendError(reply, 409, "Email já está em uso");
    }
    return sendError(reply, 500, "Erro interno ao criar professor");
  }
}

export async function listarProfessores(
  req: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const professores = await req.server.prisma.professor.findMany({
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
        cursos: {
          select: {
            cursoId: true,
            curso: {
              select: {
                nome: true,
              },
            },
          },
        },
        sumarios: {
          select: {
            sumarioId: true,
            data: true,
            conteudo: true,
          },
          orderBy: {
            data: "desc",
          },
          take: 5, // Últimos 5 sumários
        },
      },
    });

    return reply.send({ data: professores });
  } catch (error) {
    req.log.error("Erro ao listar professores:", error);
    return sendError(reply, 500, "Erro interno ao listar professores");
  }
}

export async function buscarProfessor(
  req: FastifyRequest<{ Params: IdParam }>,
  reply: FastifyReply
) {
  try {
    const { id } = req.params;


    const professor = await req.server.prisma.professor.findUnique({
      where: { professorId: id },
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
        cursos: true,
        sumarios: {
          orderBy: {
            data: "desc",
          },
        },
        presencas: {
          orderBy: {
            data: "desc",
          },
          take: 30, // Últimos 30 dias
        },
        efetividades: {
          orderBy: {
            data: "desc",
          },
          take: 30, // Últimos 30 dias
        },
      },
    });

    if (!professor) {
      return sendError(reply, 404, "Professor não encontrado");
    }

    return reply.send({ data: professor });
  } catch (error) {
    req.log.error("Erro ao buscar professor:", error);
    return sendError(reply, 500, "Erro interno ao buscar professor");
  }
}

export async function atualizarProfessor(
  req: FastifyRequest<{ Params: IdParam; Body: UpdateProfessorInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { id } = req.params;
    const dados = req.body;

    // Verificar se o professor existe
    const professorExiste = await prisma.professor.findUnique({
      where: { professorId: id },
      include: {
        usuario: true,
      },
    });

    if (!professorExiste) {
      return sendError(reply, 404, "Professor não encontrado");
    }

    // Verificar email único se estiver sendo atualizado
    if (dados.email && dados.email !== professorExiste.usuario?.email) {
      const emailExiste = await prisma.usuario.findUnique({
        where: { email: dados.email },
      });

      if (emailExiste) {
        return sendError(reply, 409, "Email já está em uso");
      }
    }

    // Atualizar professor e usuário em uma transação
    const result = await prisma.$transaction(async (tx) => {
      const professor = await tx.professor.update({
        where: { professorId: id },
        data: {
          nome: dados.nome,
          departamento: dados.departamento
            ? (dados.departamento as Departamento)
            : undefined,
          cargaHoraria: dados.cargaHoraria,
        },
      });

      if (dados.email && professorExiste.usuario) {
        await tx.usuario.update({
          where: { usuarioId: professorExiste.usuario.usuarioId },
          data: {
            email: dados.email,
            nome: dados.nome,
          },
        });
      }

      return professor;
    });

    return reply.send({
      mensagem: "Professor atualizado com sucesso",
      data: result,
    });
  } catch (error) {
    req.log.error("Erro ao atualizar professor:", error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return sendError(reply, 409, "Email já está em uso");
    }
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return sendError(reply, 404, "Professor não encontrado");
    }
    return sendError(reply, 500, "Erro interno ao atualizar professor");
  }
}

export async function deletarProfessor(
  req: FastifyRequest<{ Params: IdParam }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { id } = req.params;
    console.log("[DEBUG] deletarProfessor called with ID:", id);

    // Verificar se o professor existe
    const professorExiste = await prisma.professor.findUnique({
      where: { professorId: id },
    });
    console.log("[DEBUG] findUnique result:", professorExiste);

    if (!professorExiste) {
      return sendError(reply, 404, "Professor não encontrado");
    }

    // Excluir usando transação para limpar o usuário associado
    await prisma.$transaction(async (tx) => {
      // Remover o professor
      await tx.professor.delete({
        where: { professorId: id },
      });

      // Se houver um usuário associado, removê-lo também
      if (professorExiste.usuarioId) {
        await tx.usuario.delete({
          where: { usuarioId: professorExiste.usuarioId },
        });
      }
    });

    return reply.send({
      mensagem: "Professor removido com sucesso",
    });
  } catch (error) {
    req.log.error("Erro ao deletar professor:", error);
    if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        return sendError(reply, 404, "Professor não encontrado");
      }
    return sendError(reply, 500, "Erro interno ao deletar professor");
  }
}
