import { FastifyReply, FastifyRequest } from "fastify";
import {
  LoginInput,
  PasswordResetRequestInput,
  PasswordResetInput,
  RefreshTokenInput,
} from "../schemas/auth.schema";
import { compararSenha, hashSenha } from "../utils/hash";
import { gerarToken, gerarRefreshToken } from "../utils/jwt";
import { randomBytes } from "crypto";
import { TipoUsuario } from "@prisma/client";

// Interfaces melhoradas
export interface AuthenticatedUser {
  id: number;
  email: string;
  tipo: TipoUsuario;
  nome: string;
}

export interface FastifyRequestWithUser extends FastifyRequest {
  user?: AuthenticatedUser;
}

// Helper para respostas de erro padronizadas
const sendError = (reply: FastifyReply, statusCode: number, message: string) => {
  return reply.status(statusCode).send({ mensagem: message });
};

export async function loginHandler(
  req: FastifyRequest<{ Body: LoginInput }>,
  reply: FastifyReply
) {
  try {
    const { email, senha, tipo } = req.body;
    const prisma = req.server.prisma;

    // Buscar usuário com permissões
    const usuario = await prisma.usuario.findFirst({
      where: {
        AND: [
          { Email: email }, 
          { Tipo: tipo }
        ],
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
      return sendError(reply, 401, "Credenciais inválidas");
    }

    // Verificar senha
    const senhaValida = await compararSenha(senha, usuario.SenhaHash);
    if (!senhaValida) {
      return sendError(reply, 401, "Credenciais inválidas");
    }

    // Criar payload do usuário
    const payload: AuthenticatedUser = {
      id: usuario.UsuarioID,
      email: usuario.Email,
      tipo: usuario.Tipo,
      nome: usuario.Nome,
    };

    // Gerar tokens
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
    req.log.error('Erro no login:', error);
    return sendError(reply, 500, "Erro interno no servidor");
  }
}

export async function refreshTokenHandler(
  req: FastifyRequest<{ Body: RefreshTokenInput }>,
  reply: FastifyReply
) {
  try {
    const { refreshToken } = req.body;
    const prisma = req.server.prisma;

    // Buscar token válido
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
      return sendError(reply, 401, "Refresh token inválido ou expirado");
    }

    const usuario = storedToken.Usuario;
    const payload: AuthenticatedUser = {
      id: usuario.UsuarioID,
      email: usuario.Email,
      tipo: usuario.Tipo,
      nome: usuario.Nome,
    };

    // Gerar novos tokens
    const newAccessToken = await gerarToken(payload);
    const newRefreshToken = await gerarRefreshToken(usuario.UsuarioID);

    // Rotação do refresh token (maior segurança)
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
    req.log.error('Erro no refresh token:', error);
    return sendError(reply, 500, "Erro interno no servidor");
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

    // Sempre retornar sucesso por segurança (não revelar se email existe)
    const mensagem = "Se o email existir, você receberá as instruções de recuperação";

    if (!usuario) {
      return reply.send({ mensagem });
    }

    // Invalidar tokens de reset anteriores
    await prisma.passwordReset.updateMany({
      where: {
        UsuarioID: usuario.UsuarioID,
        Used: false,
        ExpiresAt: { gt: new Date() }
      },
      data: { Used: true }
    });

    // Gerar novo token de reset
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

    // TODO: Implementar envio de email
    // await enviarEmailRecuperacao(usuario.Email, resetToken);
    
    req.log.info(`Token de reset gerado para usuário ${usuario.Email}: ${resetToken}`);

    return reply.send({ mensagem });
  } catch (error) {
    req.log.error('Erro na solicitação de reset:', error);
    return sendError(reply, 500, "Erro interno no servidor");
  }
}

export async function resetPasswordHandler(
  req: FastifyRequest<{ Body: PasswordResetInput }>,
  reply: FastifyReply
) {
  try {
    const { token, novaSenha, confirmarSenha } = req.body;
    const prisma = req.server.prisma;

    // Validar se as senhas conferem (redundante mas importante)
    if (novaSenha !== confirmarSenha) {
      return sendError(reply, 400, "As senhas não conferem");
    }

    // Buscar token de reset válido
    const resetRequest = await prisma.passwordReset.findFirst({
      where: {
        Token: token,
        Used: false,
        ExpiresAt: { gt: new Date() },
      },
      include: { Usuario: true },
    });

    if (!resetRequest) {
      return sendError(reply, 400, "Token inválido ou expirado");
    }

    // Hash da nova senha
    const senhaHash = await hashSenha(novaSenha);

    // Transação para atualizar senha e marcar token como usado
    await prisma.$transaction([
      prisma.usuario.update({
        where: { UsuarioID: resetRequest.UsuarioID },
        data: { SenhaHash: senhaHash },
      }),
      prisma.passwordReset.update({
        where: { PasswordResetID: resetRequest.PasswordResetID },
        data: { Used: true },
      }),
      // Invalidar todos os refresh tokens do usuário por segurança
      prisma.refreshToken.deleteMany({
        where: { UsuarioID: resetRequest.UsuarioID },
      }),
    ]);

    req.log.info(`Senha resetada para usuário ID: ${resetRequest.UsuarioID}`);

    return reply.send({
      mensagem: "Senha atualizada com sucesso",
    });
  } catch (error) {
    req.log.error('Erro no reset de senha:', error);
    return sendError(reply, 500, "Erro interno no servidor");
  }
}

export async function logoutHandler(
  req: FastifyRequestWithUser,
  reply: FastifyReply
) {
  try {
    // Verificar se o usuário está autenticado
    if (!req.user) {
      return sendError(reply, 401, "Usuário não autenticado");
    }

    const prisma = req.server.prisma;

    // Invalidar todos os refresh tokens do usuário
    await prisma.refreshToken.deleteMany({
      where: {
        UsuarioID: req.user.id,
      },
    });

    req.log.info(`Logout realizado para usuário ID: ${req.user.id}`);

    return reply.send({
      mensagem: "Logout realizado com sucesso",
    });
  } catch (error) {
    req.log.error('Erro no logout:', error);
    return sendError(reply, 500, "Erro interno no servidor");
  }
}
