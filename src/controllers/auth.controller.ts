import { FastifyReply, FastifyRequest } from "fastify";
import {
  LoginInput,
  PasswordResetRequestInput,
  PasswordResetInput,
  RefreshTokenInput,
} from "../schemas/auth.schema";
import { compararSenha, hashSenha } from "../utils/hash";
import { gerarToken, verificarToken, gerarRefreshToken } from "../utils/jwt";
import { randomBytes } from "crypto";
import { TipoUsuario } from "@prisma/client";

interface TokenPayload {
  id: number;
  tipo: string;
  email: string;
}

interface FastifyRequestWithUser extends FastifyRequest {
  user?: AuthenticatedUser;
}

interface AuthenticatedUser {
  id: number;
  email: string;
  tipo: TipoUsuario;
  nome: string;
}

export async function loginHandler(
  req: FastifyRequest<{ Body: LoginInput }>,
  reply: FastifyReply
) {
  try {
    const { email, senha, tipo } = req.body;
    const prisma = req.server.prisma;

    const usuario = await prisma.usuario.findFirst({
      where: {
        AND: [{ Email: email }, { Tipo: tipo }],
      },
      include: {
        Permissoes: {
          include: {
            Permissao: true,
          },
        },
      },
    });

    if (!usuario) {
      return reply.status(401).send({
        mensagem: "Credenciais inválidas",
      });
    }

    const senhaValida = await compararSenha(senha, usuario.SenhaHash);
    if (!senhaValida) {
      return reply.status(401).send({
        mensagem: "Credenciais inválidas",
      });
    }

    const payload: AuthenticatedUser = {
      id: usuario.UsuarioID,
      email: usuario.Email,
      tipo: usuario.Tipo,
      nome: usuario.Nome,
    };

    const accessToken = await gerarToken(payload);
    const refreshToken = await gerarRefreshToken(usuario.UsuarioID);

    // Salvar refresh token no banco
    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        UsuarioID: usuario.UsuarioID,
        ExpiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 dias
      },
    });

    const permissoes = usuario.Permissoes.map((p) => p.Permissao.Descricao);

    return reply.send({
      usuario: {
        id: usuario.UsuarioID,
        nome: usuario.Nome,
        email: usuario.Email,
        tipo: usuario.Tipo,
        permissoes,
      },
      accessToken,
      refreshToken,
    });
  } catch (error) {
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno no servidor",
    });
  }
}

export async function refreshTokenHandler(
  req: FastifyRequest<{ Body: RefreshTokenInput }>,
  reply: FastifyReply
) {
  try {
    const { refreshToken } = req.body;
    const prisma = req.server.prisma;

    const storedToken = await prisma.refreshToken.findFirst({
      where: {
        token: refreshToken,
        ExpiresAt: {
          gt: new Date(),
        },
      },
      include: {
        Usuario: {
          include: {
            Permissoes: {
              include: {
                Permissao: true,
              },
            },
          },
        },
      },
    });

    if (!storedToken) {
      return reply.status(401).send({
        mensagem: "Refresh token inválido ou expirado",
      });
    }

    const usuario = storedToken.Usuario;
    const payload: AuthenticatedUser = {
      id: usuario.UsuarioID,
      email: usuario.Email,
      tipo: usuario.Tipo,
      nome: usuario.Nome,
    };

    const newAccessToken = await gerarToken(payload);
    const newRefreshToken = await gerarRefreshToken(usuario.UsuarioID);

    // Atualizar refresh token
    await prisma.$transaction([
      prisma.refreshToken.delete({
        where: { TokenID: storedToken.TokenID },
      }),
      prisma.refreshToken.create({
        data: {
          token: newRefreshToken,
          UsuarioID: usuario.UsuarioID,
          ExpiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
      }),
    ]);

    const permissoes = usuario.Permissoes.map((p) => p.Permissao.Descricao);

    return reply.send({
      usuario: {
        id: usuario.UsuarioID,
        nome: usuario.Nome,
        email: usuario.Email,
        tipo: usuario.Tipo,
        permissoes,
      },
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  } catch (error) {
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno no servidor",
    });
  }
}

export async function requestPasswordResetHandler(
  req: FastifyRequest<{ Body: PasswordResetRequestInput }>,
  reply: FastifyReply
) {
  try {
    const { email } = req.body;
    const prisma = req.server.prisma;

    // Verificar se o usuário existe
    const usuario = await prisma.usuario.findUnique({
      where: { Email: email },
    });

    if (!usuario) {
      // Retornar 200 mesmo se o email não existir por segurança
      return reply.send({
        mensagem:
          "Se o email existir, você receberá as instruções de recuperação",
      });
    }

    // Gerar token de reset
    const resetToken = randomBytes(32).toString("hex");
    const tokenHash = await hashSenha(resetToken);

    // Salvar token no banco
    await prisma.passwordReset.create({
      data: {
        UsuarioID: usuario.UsuarioID,
        Token: tokenHash,
        ExpiresAt: new Date(Date.now() + 3600000), // 1 hora
      },
    });

    // TODO: Enviar email com o token
    // Aqui você implementaria o envio do email

    return reply.send({
      mensagem:
        "Se o email existir, você receberá as instruções de recuperação",
    });
  } catch (error) {
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno no servidor",
    });
  }
}

export async function resetPasswordHandler(
  req: FastifyRequest<{ Body: PasswordResetInput }>,
  reply: FastifyReply
) {
  try {
    const { token, novaSenha } = req.body;
    const prisma = req.server.prisma;

    // Buscar token de reset
    const resetRequest = await prisma.passwordReset.findFirst({
      where: {
        Token: token,
        Used: false,
        ExpiresAt: { gt: new Date() },
      },
      include: { Usuario: true },
    });

    if (!resetRequest) {
      return reply.status(400).send({
        mensagem: "Token inválido ou expirado",
      });
    }

    // Atualizar senha
    const senhaHash = await hashSenha(novaSenha);
    await prisma.usuario.update({
      where: { UsuarioID: resetRequest.UsuarioID },
      data: { SenhaHash: senhaHash },
    });

    // Marcar token como usado
    await prisma.passwordReset.update({
      where: { PasswordResetID: resetRequest.PasswordResetID },
      data: { Used: true },
    });

    return reply.send({
      mensagem: "Senha atualizada com sucesso",
    });
  } catch (error) {
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno no servidor",
    });
  }
}

export async function logoutHandler(
  req: FastifyRequestWithUser,
  reply: FastifyReply
) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return reply.status(401).send({
        mensagem: "Token não fornecido",
      });
    }

    const [, token] = authHeader.split(" ");
    if (!token) {
      return reply.status(401).send({
        mensagem: "Token inválido",
      });
    }

    // Invalidar refresh token
    await req.server.prisma.refreshToken.deleteMany({
      where: {
        UsuarioID: (req.user as AuthenticatedUser).id,
      },
    });

    return reply.send({
      mensagem: "Logout realizado com sucesso",
    });
  } catch (error) {
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno no servidor",
    });
  }
}
