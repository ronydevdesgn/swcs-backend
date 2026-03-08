import { Prisma } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import {
    CreatePermissaoInput,
    IdParam,
    UsuarioPermissaoInput,
} from "../schemas/permissoes.schema";
import { sendError } from "../utils/http";

export async function criarPermissao(
  req: FastifyRequest<{ Body: CreatePermissaoInput }>,
  reply: FastifyReply
) {
  try {
    const { descricao } = req.body;
    const prisma = req.server.prisma;

    const permissao = await prisma.permissao.create({
      data: { descricao },
    });

    return reply.status(201).send({
      mensagem: "Permissão criada com sucesso",
      data: permissao,
    });
  } catch (error) {
    req.log.error("Erro ao criar permissão:", error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return sendError(reply, 409, "Permissão com esta descrição já existe");
    }
    return sendError(reply, 500, "Erro interno ao criar permissão");
  }
}

export async function atribuirPermissaoUsuario(
  req: FastifyRequest<{ Body: UsuarioPermissaoInput }>,
  reply: FastifyReply
) {
  try {
    const { usuarioId, permissaoId } = req.body;
    const prisma = req.server.prisma;

    await prisma.usuarioPermissao.create({
      data: {
        usuarioId,
        permissaoId,
      },
    });

    return reply.send({
      mensagem: "Permissão atribuída com sucesso",
    });
  } catch (error) {
    req.log.error("Erro ao atribuir permissão ao usuário:", error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return sendError(reply, 409, "Usuário já possui esta permissão");
    }
    return sendError(reply, 500, "Erro interno ao atribuir permissão");
  }
}

export async function listarPermissoes(
  req: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const permissoes = await req.server.prisma.permissao.findMany({
      include: {
        usuarios: {
          include: {
            usuario: {
              select: {
                nome: true,
                email: true,
                tipo: true,
              },
            },
          },
        },
      },
    });

    return reply.send({ data: permissoes });
  } catch (error) {
    req.log.error("Erro ao listar permissões:", error);
    return sendError(reply, 500, "Erro interno ao listar permissões");
  }
}

export async function buscarPermissoesPorUsuario(
  req: FastifyRequest<{ Params: IdParam }>,
  reply: FastifyReply
) {
  try {
    const { id } = req.params;
    const permissoes = await req.server.prisma.usuarioPermissao.findMany({
      where: { usuarioId: id },
      include: {
        permissao: true,
      },
    });

    return reply.send({ data: permissoes });
  } catch (error) {
    req.log.error("Erro ao buscar permissões por usuário:", error);
    return sendError(
      reply,
      500,
      "Erro interno ao buscar permissões do usuário"
    );
  }
}

export async function buscarPermissao(
  req: FastifyRequest<{ Params: IdParam }>,
  reply: FastifyReply
) {
  try {
    const { id } = req.params;
    const prisma = req.server.prisma;

    const permissao = await prisma.permissao.findUnique({
      where: { permissaoId: id },
      include: {
        usuarios: {
          include: {
            usuario: {
              select: {
                nome: true,
                email: true,
                tipo: true,
              },
            },
          },
        },
      },
    });

    if (!permissao) {
      return sendError(reply, 404, "Permissão não encontrada");
    }

    return reply.send({ data: permissao });
  } catch (error) {
    req.log.error("Erro ao buscar permissão:", error);
    return sendError(reply, 500, "Erro interno ao buscar permissão");
  }
}

export async function atualizarPermissao(
  req: FastifyRequest<{ Params: IdParam; Body: CreatePermissaoInput }>,
  reply: FastifyReply
) {
  try {
    const { id } = req.params;
    const { descricao } = req.body;
    const prisma = req.server.prisma;

    const permissao = await prisma.permissao.update({
      where: { permissaoId: id },
      data: { descricao },
    });

    return reply.send({
      mensagem: "Permissão atualizada com sucesso",
      data: permissao,
    });
  } catch (error) {
    req.log.error("Erro ao atualizar permissão:", error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return sendError(reply, 404, "Permissão não encontrada");
    }
    return sendError(reply, 500, "Erro interno ao atualizar permissão");
  }
}

export async function deletarPermissao(
  req: FastifyRequest<{ Params: IdParam }>,
  reply: FastifyReply
) {
  try {
    const { id } = req.params;
    const prisma = req.server.prisma;

    await prisma.permissao.delete({
      where: { permissaoId: id },
    });

    return reply.send({
      mensagem: "Permissão removida com sucesso",
    });
  } catch (error) {
    req.log.error("Erro ao deletar permissão:", error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return sendError(reply, 404, "Permissão não encontrada");
    }
    return sendError(reply, 500, "Erro interno ao remover permissão");
  }
}
