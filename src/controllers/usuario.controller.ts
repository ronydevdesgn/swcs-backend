import { Prisma } from "@prisma/client";
import { FastifyReply } from "fastify";
import type {
    CreateUsuarioInput,
    IdParam,
    UpdateSenhaInput,
    UpdateUsuarioInput,
} from "../schemas/usuario.schema";
import { compararSenha, hashSenha } from "../utils/hash";
import { FastifyRequestWithUser, sendError } from "../utils/http";

export async function criarUsuario(
  req: FastifyRequestWithUser,
  reply: FastifyReply
) {
  try {
    const prisma = req.server.prisma;
    const { nome, email, senha, tipo } = req.body as CreateUsuarioInput;
    const senhaHash = await hashSenha(senha);

    const usuario = await prisma.usuario.create({
      data: {
        nome: nome,
        email: email,
        senhaHash: senhaHash,
        tipo: tipo,
      },
      include: { permissoes: true },
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

export async function listarUsuarios(
  req: FastifyRequestWithUser,
  reply: FastifyReply
) {
  try {
    const usuarios = await req.server.prisma.usuario.findMany({
      select: {
        usuarioId: true,
        nome: true,
        email: true,
        tipo: true,
        permissoes: {
          include: {
            permissao: true,
          },
        },
        professor: {
          select: {
            departamento: true,
          },
        },
        funcionario: {
          select: {
            cargo: true,
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
      where: { usuarioId: id },
      select: {
        usuarioId: true,
        nome: true,
        email: true,
        tipo: true,
        permissoes: {
          include: {
            permissao: true,
          },
        },
        professor: true,
        funcionario: true,
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
    if (dados.email) {
      const emailExiste = await req.server.prisma.usuario.findFirst({
        where: {
          email: dados.email,
          NOT: {
            usuarioId: id,
          },
        },
      });

      if (emailExiste) {
        return sendError(reply, 409, "Email já está em uso");
      }
    }

    const usuario = await req.server.prisma.usuario.update({
      where: { usuarioId: id },
      data: dados,
      select: {
        usuarioId: true,
        nome: true,
        email: true,
        tipo: true,
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
      where: { usuarioId: id },
    });

    if (!usuario) {
      return sendError(reply, 404, "Usuário não encontrado");
    }

    const senhaCorreta = await compararSenha(senhaAtual, usuario.senhaHash);
    if (!senhaCorreta) {
      return sendError(reply, 401, "Senha atual incorreta");
    }

    const novaSenhaHash = await hashSenha(novaSenha);
    await req.server.prisma.usuario.update({
      where: { usuarioId: id },
      data: { senhaHash: novaSenhaHash },
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
      where: { usuarioId: id },
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
