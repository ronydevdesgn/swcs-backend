import { randomBytes } from "crypto";
import { FastifyReply, FastifyRequest } from "fastify";
import {
    LoginInput,
    PasswordResetInput,
    PasswordResetRequestInput,
    RefreshTokenInput,
} from "../schemas/auth.schema";
import { compararSenha, hashSenha } from "../utils/hash";
import { gerarRefreshToken, gerarToken } from "../utils/jwt";

import {
    AuthenticatedUser,
    FastifyRequestWithUser,
    sendError,
} from "../utils/http";

export async function loginHandler(
  req: FastifyRequest<{ Body: LoginInput }>,
  reply: FastifyReply
) {
  try {
    const { email, senha, tipo } = req.body;
    const prisma = req.server.prisma;

    let usuario;

    if (tipo) {
      // Se o tipo foi fornecido, buscar diretamente
      usuario = await prisma.usuario.findFirst({
        where: {
          AND: [{ email: email }, { tipo: tipo }],
        },
        include: {
          professor: true,
          permissoes: {
            include: {
              permissao: true,
            },
          },
        },
      });
    } else {
      // Se o tipo não foi fornecido, detectar automaticamente
      usuario = await prisma.usuario.findUnique({
        where: {
          email: email,
        },
        include: {
          professor: true,
          permissoes: {
            include: {
              permissao: true,
            },
          },
        },
      });
    }

    if (!usuario) {
      return sendError(reply, 401, "Credenciais inválidas");
    }

    // Verificar senha
    const senhaValida = await compararSenha(senha, usuario.senhaHash);
    if (!senhaValida) {
      return sendError(reply, 401, "Credenciais inválidas");
    }

    // Criar payload do usuário
    const payload: AuthenticatedUser = {
      id: usuario.usuarioId,
      email: usuario.email,
      tipo: usuario.tipo,
      nome: usuario.nome,
      permissoes: usuario.permissoes.map((p) => p.permissao.descricao),
    };

    // Gerar tokens
    const accessToken = await gerarToken(payload);
    const refreshToken = await gerarRefreshToken(usuario.usuarioId);

    // Salvar refresh token no banco
    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        usuarioId: usuario.usuarioId,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 dias
      },
    });

    const permissoes = usuario.permissoes.map((p) => p.permissao.descricao);

    req.log.info(`Login realizado com sucesso para usuário ${usuario.email} (Tipo: ${usuario.tipo})`);

    return reply.send({
      usuario: {
        id: usuario.usuarioId,
        nome: usuario.nome,
        email: usuario.email,
        tipo: usuario.tipo,
        professor: usuario.professor ? {
          professorId: usuario.professor.professorId,
          nome: usuario.professor.nome
        } : null,
        permissoes,
      },
      accessToken,
      refreshToken,
    });
  } catch (error) {
    req.log.error("Erro no login:", error);
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
        expiresAt: {
          gt: new Date(),
        },
      },
      include: {
        usuario: {
          include: {
            permissoes: {
              include: {
                permissao: true,
              },
            },
          },
        },
      },
    });

    if (!storedToken) {
      return sendError(reply, 401, "Refresh token inválido ou expirado");
    }

    const usuario = storedToken.usuario;
    const payload: AuthenticatedUser = {
      id: usuario.usuarioId,
      nome: usuario.nome,
      email: usuario.email,
      tipo: usuario.tipo,
      permissoes: usuario.permissoes.map((p) => p.permissao.descricao),
    };

    // Gerar novos tokens
    const newAccessToken = await gerarToken(payload);
    const newRefreshToken = await gerarRefreshToken(usuario.usuarioId);

    // Rotação do refresh token (maior segurança)
    await prisma.$transaction([
      prisma.refreshToken.delete({
        where: { tokenId: storedToken.tokenId },
      }),
      prisma.refreshToken.create({
        data: {
          token: newRefreshToken,
          usuarioId: usuario.usuarioId,
          expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
      }),
    ]);

    const permissoes = usuario.permissoes.map((p) => p.permissao.descricao);

    return reply.send({
      usuario: {
        id: usuario.usuarioId,
        nome: usuario.nome,
        email: usuario.email,
        tipo: usuario.tipo,
        permissoes,
      },
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  } catch (error) {
    req.log.error("Erro no refresh token:", error);
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
      where: { email: email },
    });

    // Sempre retornar sucesso por segurança (não revelar se email existe)
    const mensagem =
      "Se o email existir, você receberá as instruções de recuperação";

    if (!usuario) {
      return reply.send({ mensagem });
    }

    // Invalidar tokens de reset anteriores
    await prisma.passwordReset.updateMany({
      where: {
        usuarioId: usuario.usuarioId,
        used: false,
        expiresAt: { gt: new Date() },
      },
      data: { used: true },
    });

    // Gerar novo token de reset
    const resetToken = randomBytes(32).toString("hex");
    const tokenHash = await hashSenha(resetToken);

    // Salvar token no banco
    await prisma.passwordReset.create({
      data: {
        usuarioId: usuario.usuarioId,
        token: tokenHash,
        expiresAt: new Date(Date.now() + 3600000), // 1 hora
      },
    });

    // TODO: Implementar envio de email
    // await enviarEmailRecuperacao(usuario.email, resetToken);

    req.log.info(
      `Token de reset gerado para usuário ${usuario.email}: ${resetToken}`
    );

    return reply.send({ mensagem });
  } catch (error) {
    req.log.error("Erro na solicitação de reset:", error);
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
        token: token,
        used: false,
        expiresAt: { gt: new Date() },
      },
      include: { usuario: true },
    });

    if (!resetRequest) {
      return sendError(reply, 400, "Token inválido ou expirado");
    }

    // Hash da nova senha
    const senhaHash = await hashSenha(novaSenha);

    // Transação para atualizar senha e marcar token como usado
    await prisma.$transaction([
      prisma.usuario.update({
        where: { usuarioId: resetRequest.usuarioId },
        data: { senhaHash: senhaHash },
      }),
      prisma.passwordReset.update({
        where: { passwordResetId: resetRequest.passwordResetId },
        data: { used: true },
      }),
      // Invalidar todos os refresh tokens do usuário por segurança
      prisma.refreshToken.deleteMany({
        where: { usuarioId: resetRequest.usuarioId },
      }),
    ]);

    req.log.info(`Senha resetada para usuário ID: ${resetRequest.usuarioId}`);

    return reply.send({
      mensagem: "Senha atualizada com sucesso",
    });
  } catch (error) {
    req.log.error("Erro no reset de senha:", error);
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
        usuarioId: req.user.id,
      },
    });

    req.log.info(`Logout realizado para usuário ID: ${req.user.id}`);

    return reply.send({
      mensagem: "Logout realizado com sucesso",
    });
  } catch (error) {
    req.log.error("Erro no logout:", error);
    return sendError(reply, 500, "Erro interno no servidor");
  }
}

export async function meHandler(
  req: FastifyRequestWithUser,
  reply: FastifyReply
) {
  try {
    // Verificar se o usuário está autenticado
    if (!req.user) {
      return sendError(reply, 401, "Usuário não autenticado");
    }

    const prisma = req.server.prisma;

    // Buscar dados atualizados do usuário no banco
    const usuario = await prisma.usuario.findUnique({
      where: { usuarioId: req.user.id },
      include: {
        professor: true,
        permissoes: {
          include: {
            permissao: true,
          },
        },
      },
    });

    if (!usuario) {
      return sendError(reply, 404, "Usuário não encontrado");
    }

    const permissoes = usuario.permissoes.map((p) => p.permissao.descricao);

    return reply.send({
      data: {
        id: usuario.usuarioId,
        nome: usuario.nome,
        email: usuario.email,
        tipo: usuario.tipo,
        professor: usuario.professor ? {
          nome: usuario.professor?.nome,
          professorId: usuario.professor?.professorId,
        } : null,
        permissoes,
      },
    });
  } catch (error) {
    req.log.error("Erro ao buscar dados do usuário:", error);
    return sendError(reply, 500, "Erro interno no servidor");
  }
}

// VERIFICAR TIPO USUÁRIO 
export async function verificarTipoUsuarioHandler(
  req: FastifyRequest<{ Querystring: { email: string } }>,
  reply: FastifyReply
) {
  try {
    const { email } = req.query;
    const prisma = req.server.prisma;

    const usuario = await prisma.usuario.findUnique({
      where: { email: email },
      select: {
        tipo: true,
        nome: true,
      },
    });

    if (!usuario) {
      return sendError(reply, 404, "Usuário não encontrado");
    }

    return reply.send({
      tipo: usuario.tipo,
      nome: usuario.nome,
      existe: true,
    });
  } catch (error) {
    req.log.error("Erro ao verificar tipo de usuário:", error);
    return sendError(reply, 500, "Erro interno no servidor");
  }
}