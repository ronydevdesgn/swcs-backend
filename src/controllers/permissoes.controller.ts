import { FastifyRequest, FastifyReply } from "fastify";
import {
  CreatePermissaoInput,
  UsuarioPermissaoInput,
  IdParam,
} from "../schemas/permissoes.schema";
import { Prisma } from "@prisma/client";
import { sendError } from "../utils/http";

export async function criarPermissao(
  req: FastifyRequest<{ Body: CreatePermissaoInput }>,
  reply: FastifyReply
) {
  try {
    const { Descricao } = req.body;
    const prisma = req.server.prisma;

    const permissao = await prisma.permissao.create({
      data: { Descricao },
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
    const { UsuarioID, PermissaoID } = req.body;
    const prisma = req.server.prisma;

    await prisma.usuarioPermissao.create({
      data: {
        UsuarioID,
        PermissaoID,
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
        Usuarios: {
          include: {
            Usuario: {
              select: {
                Nome: true,
                Email: true,
                Tipo: true,
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
      where: { UsuarioID: id },
      include: {
        Permissao: true,
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
