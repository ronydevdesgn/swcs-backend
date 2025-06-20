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

export async function criarUsuario(
  req: FastifyRequest<{ Body: CreateUsuarioInput }>,
  reply: FastifyReply
) {
  try {
    const prisma = req.server.prisma;
    const data = usuarioSchema.parse(req.body);
    const SenhaHash = await hashSenha(data.Senha);
    const { Senha, Tipo, ...restData } = data;

    const usuario = await prisma.usuario.create({
      data: {
        ...restData,
        SenhaHash: SenhaHash,
        Tipo: data.Tipo,
      },
      include: { Permissoes: true },
    });
    return reply.status(201).send(usuario);
  } catch (error) {
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao criar usuário",
    });
  }
}

export async function listarUsuarios(req: FastifyRequest, reply: FastifyReply) {
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
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao listar usuários",
    });
  }
}

export async function buscarUsuario(
  req: FastifyRequest<{ Params: IdParam }>,
  reply: FastifyReply
) {
  try {
    const { id } = idParamSchema.parse(req.params);
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
      return reply.status(404).send({
        mensagem: "Usuário não encontrado",
      });
    }

    return reply.send({ data: usuario });
  } catch (error) {
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao buscar usuário",
    });
  }
}

export async function atualizarUsuario(
  req: FastifyRequest<{ Params: IdParam; Body: UpdateUsuarioInput }>,
  reply: FastifyReply
) {
  try {
    const { id } = idParamSchema.parse(req.params);
    const dados = updateUsuarioSchema.parse(req.body);

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
        return reply.status(409).send({
          mensagem: "Email já está em uso",
        });
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
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "P2025"
    ) {
      return reply.status(404).send({
        mensagem: "Usuário não encontrado",
      });
    }
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao atualizar usuário",
    });
  }
}

export async function atualizarSenha(
  req: FastifyRequest<{ Params: IdParam; Body: UpdateSenhaInput }>,
  reply: FastifyReply
) {
  try {
    const { id } = idParamSchema.parse(req.params);
    const { senhaAtual, novaSenha } = updateSenhaSchema.parse(req.body);

    const usuario = await req.server.prisma.usuario.findUnique({
      where: { UsuarioID: id },
    });

    if (!usuario) {
      return reply.status(404).send({
        mensagem: "Usuário não encontrado",
      });
    }

    const senhaCorreta = await compararSenha(senhaAtual, usuario.SenhaHash);
    if (!senhaCorreta) {
      return reply.status(401).send({
        mensagem: "Senha atual incorreta",
      });
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
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao atualizar senha",
    });
  }
}
