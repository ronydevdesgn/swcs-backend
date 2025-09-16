import { FastifyRequest, FastifyReply } from "fastify";
import {
  usuarioSchema,
  updateUsuarioSchema,
  updateSenhaSchema,
  idParamSchema,
} from "../schemas/usuario.schema";
import type {
  CreateUsuarioInput,
  UpdateUsuarioInput,
  UpdateSenhaInput,
  IdParam,
} from "../schemas/usuario.schema";
import { hashSenha, compararSenha } from "../utils/hash";
import { FastifyRequestWithUser, sendError } from "../utils/http";
import { Prisma } from "@prisma/client";
import { Params } from "zod/v4/core";

export async function criarUsuario(
  req: FastifyRequestWithUser,
  reply: FastifyReply
) {
  try {
    const prisma = req.server.prisma;
    const { Nome, Email, Senha, Tipo } = req.body as CreateUsuarioInput;
    const SenhaHash = await hashSenha(Senha);

    const usuario = await prisma.usuario.create({
      data: {
        Nome,
        Email,
        SenhaHash: SenhaHash,
        Tipo: Tipo,
      },
      include: { Permissoes: true },
    });
    return reply.status(201).send({
      mensagem: "Usuário criado com sucesso",
      data: usuario,
    });
  } catch (error) {
    req.log.error("Erro ao criar usuário:", error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return sendError(reply, 409, "Email já está em uso");
    }
    return sendError(reply, 500, "Erro interno ao criar usuário");
  }
}

export async function listarUsuarios(req: FastifyRequestWithUser, reply: FastifyReply) {
  try {
    const usuarios = await req.server.prisma.usuario.findMany({
      select: {
        UsuarioID: true,
        Nome: true,
        Email: true,
        Tipo: true,
        Permissoes: {
          include: {
            Permissao: true,
          },
        },
        Professor: {
          select: {
            Departamento: true,
          },
        },
        Funcionario: {
          select: {
            Cargo: true,
          },
        },
      },
    });

    return reply.send({ data: usuarios });
  } catch (error) {
    req.log.error("Erro ao listar usuários:", error);
    return sendError(reply, 500, "Erro interno ao listar usuários");
  }
}

export async function buscarUsuario(
  req: FastifyRequestWithUser,
  reply: FastifyReply
) {
  try {
    const { id } = req.params as IdParam;
    const usuario = await req.server.prisma.usuario.findUnique({
      where: { UsuarioID: id },
      select: {
        UsuarioID: true,
        Nome: true,
        Email: true,
        Tipo: true,
        Permissoes: {
          include: {
            Permissao: true,
          },
        },
        Professor: true,
        Funcionario: true,
      },
    });

    if (!usuario) {
      return sendError(reply, 404, "Usuário não encontrado");
    }

    return reply.send({ data: usuario });
  } catch (error) {
    req.log.error("Erro ao buscar usuário:", error);
    return sendError(reply, 500, "Erro interno ao buscar usuário");
  }
}

export async function atualizarUsuario(
  req: FastifyRequestWithUser,
  reply: FastifyReply
) {
  try {
    const { id } = req.params as IdParam;
    const dados = req.body as UpdateUsuarioInput;

    // Verificar se o email já está em uso por outro usuário
    if (dados.Email) {
      const emailExiste = await req.server.prisma.usuario.findFirst({
        where: {
          Email: dados.Email,
          NOT: {
            UsuarioID: id,
          },
        },
      });

      if (emailExiste) {
        return sendError(reply, 409, "Email já está em uso");
      }
    }

    const usuario = await req.server.prisma.usuario.update({
      where: { UsuarioID: id },
      data: dados,
      select: {
        UsuarioID: true,
        Nome: true,
        Email: true,
        Tipo: true,
      },
    });

    return reply.send({
      mensagem: "Usuário atualizado com sucesso",
      data: usuario,
    });
  } catch (error: unknown) {
    req.log.error("Erro ao atualizar usuário:", error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return sendError(reply, 404, "Usuário não encontrado");
    }
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return sendError(reply, 409, "Email já está em uso");
    }
    return sendError(reply, 500, "Erro interno ao atualizar usuário");
  }
}

export async function atualizarSenha(
  req: FastifyRequestWithUser,
  reply: FastifyReply
) {
  try {
    const { id } = req.params as IdParam;
    const { senhaAtual, novaSenha } = req.body as UpdateSenhaInput;

    const usuario = await req.server.prisma.usuario.findUnique({
      where: { UsuarioID: id },
    });

    if (!usuario) {
      return sendError(reply, 404, "Usuário não encontrado");
    }

    const senhaCorreta = await compararSenha(senhaAtual, usuario.SenhaHash);
    if (!senhaCorreta) {
      return sendError(reply, 401, "Senha atual incorreta");
    }

    const novaSenhaHash = await hashSenha(novaSenha);
    await req.server.prisma.usuario.update({
      where: { UsuarioID: id },
      data: { SenhaHash: novaSenhaHash },
    });

    return reply.send({
      mensagem: "Senha atualizada com sucesso",
    });
  } catch (error) {
    req.log.error("Erro ao atualizar senha:", error);
    return sendError(reply, 500, "Erro interno ao atualizar senha");
  }
}

export async function deletarUsuario(
  req: FastifyRequestWithUser,
  reply: FastifyReply
) {
  try {
    const prisma = req.server.prisma;
    const { id } = req.params as IdParam;

    const usuario = await prisma.usuario.delete({
      where: { UsuarioID: id },
    });

    if (!usuario) {
      return sendError(reply, 404, "Usuário não encontrado");
    }

    return reply.send({
      mensagem: "Usuário deletado com sucesso",
      data: usuario,
    });
  } catch (error) {
    req.log.error("Erro ao deletar usuário:", error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return sendError(reply, 404, "Usuário não encontrado");
    }
    return sendError(reply, 500, "Erro interno ao deletar usuário");
  }
}
