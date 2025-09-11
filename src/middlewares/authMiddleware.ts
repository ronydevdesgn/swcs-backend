import { FastifyRequest, FastifyReply } from "fastify";
import { verificarToken } from "../utils/jwt";
import type { JwtPayload } from "jsonwebtoken";
import { TipoUsuario } from "@prisma/client";

// Interface melhorada para usuário autenticado
export interface AuthenticatedUser extends JwtPayload {
  id: number;
  tipo: TipoUsuario;
  email: string;
  nome: string;
  permissions?: string[];
}

// Extend FastifyRequest to include user
export interface FastifyRequestWithUser extends FastifyRequest {
  user?: AuthenticatedUser;
}

// Helper para padronizar respostas de erro
const sendAuthError = (
  reply: FastifyReply,
  message: string = "Token inválido"
) => {
  return reply.status(401).send({
    mensagem: message,
    statusCode: 401,
    error: "Unauthorized",
  });
};

export async function autenticar(
  req: FastifyRequestWithUser,
  reply: FastifyReply
) {
  try {
    // Verificar se o header Authorization existe
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return sendAuthError(reply, "Token não fornecido");
    }

    // Verificar formato do header (Bearer token)
    const authParts = authHeader.split(" ");
    if (authParts.length !== 2 || authParts[0] !== "Bearer") {
      return sendAuthError(
        reply,
        "Formato de token inválido. Use: Bearer <token>"
      );
    }

    const token = authParts[1];
    if (!token) {
      return sendAuthError(reply, "Token não fornecido");
    }

    // Verificar e decodificar o token
    let payload: JwtPayload;
    try {
      payload = verificarToken(token) as JwtPayload;
    } catch (error) {
      req.log.warn("Token verification failed:", error);
      return sendAuthError(reply, "Token inválido ou expirado");
    }

    // Validar estrutura do payload
    if (!payload || typeof payload !== "object") {
      return sendAuthError(reply, "Token com estrutura inválida");
    }

    // Extrair dados do usuário do payload
    const userData = payload as JwtPayload & {
      id?: number;
      userId?: number;
      tipo?: TipoUsuario;
      email?: string;
      nome?: string;
    };

    // Normalizar dados do usuário
    const normalizedUser: AuthenticatedUser = {
      ...payload,
      id: userData.id ?? userData.userId ?? 0,
      tipo: userData.tipo ?? TipoUsuario.FUNCIONARIO,
      email: userData.email ?? "",
      nome: userData.nome ?? "",
      permissions: [],
    };

    // Validar campos obrigatórios
    if (!normalizedUser.id || !normalizedUser.email) {
      req.log.error("Invalid token payload:", {
        hasId: !!normalizedUser.id,
        hasEmail: !!normalizedUser.email,
      });
      return sendAuthError(reply, "Token com dados incompletos");
    }

    // Verificar se o usuário ainda existe no banco de dados
    try {
      const userExists = await req.server.prisma.usuario.findUnique({
        where: { UsuarioID: normalizedUser.id },
        select: { UsuarioID: true, Tipo: true, Email: true },
      });

      if (!userExists) {
        req.log.warn(
          `Token válido mas usuário ${normalizedUser.id} não existe mais`
        );
        return sendAuthError(reply, "Usuário não encontrado");
      }

      // Verificar se os dados do token ainda são válidos
      if (
        userExists.Email !== normalizedUser.email ||
        userExists.Tipo !== normalizedUser.tipo
      ) {
        req.log.warn(`Token desatualizado para usuário ${normalizedUser.id}`);
        return sendAuthError(reply, "Token desatualizado");
      }
    } catch (dbError) {
      req.log.error("Erro ao verificar usuário no banco:", dbError);
      // Não bloquear por erro de banco, mas logar
    }

    // Carregar permissões do usuário
    try {
      const userPermissions = await req.server.prisma.usuarioPermissao.findMany(
        {
          where: { UsuarioID: normalizedUser.id },
          include: {
            Permissao: {
              select: { Descricao: true },
            },
          },
        }
      );

      normalizedUser.permissions = userPermissions
        .map((p) => p.Permissao?.Descricao)
        .filter((desc): desc is string => typeof desc === "string");

      req.log.debug(
        `Usuário ${normalizedUser.id} carregado com ${normalizedUser.permissions.length} permissões`
      );
    } catch (permError) {
      req.log.warn("Erro ao carregar permissões:", permError);
      normalizedUser.permissions = [];
    }

    // Anexar usuário à requisição
    req.user = normalizedUser;
  } catch (error) {
    req.log.error("Erro inesperado na autenticação:", error);
    return sendAuthError(reply, "Erro na autenticação");
  }
}

// Middleware para verificar permissões específicas
export function requererPermissao(...permissoesRequeridas: string[]) {
  return async function (req: FastifyRequestWithUser, reply: FastifyReply) {
    if (!req.user) {
      return sendAuthError(reply, "Usuário não autenticado");
    }

    const userPermissions = req.user.permissions || [];
    const hasPermission = permissoesRequeridas.some((permissao) =>
      userPermissions.includes(permissao)
    );

    if (!hasPermission) {
      return reply.status(403).send({
        mensagem: "Permissão insuficiente",
        statusCode: 403,
        error: "Forbidden",
        permissoesRequeridas: permissoesRequeridas,
        permissoesUsuario: userPermissions,
      });
    }
  };
}

// Middleware para verificar tipo de usuário
export function requererTipoUsuario(...tiposPermitidos: TipoUsuario[]) {
  return async function (req: FastifyRequestWithUser, reply: FastifyReply) {
    if (!req.user) {
      return sendAuthError(reply, "Usuário não autenticado");
    }

    if (!tiposPermitidos.includes(req.user.tipo)) {
      return reply.status(403).send({
        mensagem: "Tipo de usuário não autorizado",
        statusCode: 403,
        error: "Forbidden",
        tiposPermitidos,
        tipoUsuario: req.user.tipo,
      });
    }
  };
}
