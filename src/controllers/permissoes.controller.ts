import { FastifyRequest, FastifyReply } from "fastify";
import {
  CreatePermissaoInput,
  UsuarioPermissaoInput,
  IdParam,
} from "../schemas/permissoes.schema";

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
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao criar permissão",
    });
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
    if (error.code === "P2002") {
      return reply.status(409).send({
        mensagem: "Usuário já possui esta permissão",
      });
    }
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao atribuir permissão",
    });
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
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao listar permissões",
    });
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
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao buscar permissões do usuário",
    });
  }
}
