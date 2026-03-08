import { TipoUsuario } from "@prisma/client";
import { FastifyReply } from "fastify";
import type { JwtPayload } from "jsonwebtoken";
import { AuthenticatedUser, FastifyRequestWithUser } from "../utils/http";
import { verificarToken } from "../utils/jwt";

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
    // O payload gerado no login já deve conter permissoes
    const userData = payload as unknown as AuthenticatedUser;

    // Normalizar dados do usuário
    const normalizedUser: AuthenticatedUser = {
      id: userData.id,
      tipo: userData.tipo,
      email: userData.email,
      nome: userData.nome,
      permissoes: userData.permissoes || [], // Usa do payload se existir
    };

    // Validar campos obrigatórios
    if (!normalizedUser.id || !normalizedUser.email) {
      req.log.error("Invalid token payload:", {
        hasId: !!normalizedUser.id,
        hasEmail: !!normalizedUser.email,
      });
      return sendAuthError(reply, "Token com dados incompletos");
    }

    // Opcional: Validar existência no banco APENAS se crítico ou cacheado?
    // Para performance, confiamos no token assinado (stateless).
    // Se precisarmos de revogação imediata, verificaríamos o RefreshToken ou uma blacklist.
    
    // Fallback: Se não vier permissoes no token (users antigos), buscar no banco
    if (!userData.permissoes) {
      try {
        const userPermissions = await req.server.prisma.usuarioPermissao.findMany(
          {
            where: { usuarioId: normalizedUser.id },
            include: {
              permissao: {
                select: { descricao: true },
              },
            },
          }
        );

        normalizedUser.permissoes = userPermissions
          .map((p) => p.permissao?.descricao)
          .filter((desc): desc is string => typeof desc === "string");
          
      } catch (permError) {
        req.log.warn("Erro ao carregar permissões do banco (fallback):", permError);
        normalizedUser.permissoes = [];
      }
    }

    // Anexar usuário à requisição
    req.user = normalizedUser;
  } catch (error) {
    req.log.error("Erro inesperado na autenticação:", error);
    return sendAuthError(reply, "Erro na autenticação");
  }
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
