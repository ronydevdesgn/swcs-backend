import { FastifyRequest, FastifyReply } from "fastify";
import { verificarToken } from "../utils/jwt";
import type { JwtPayload } from "jsonwebtoken";

interface AuthenticatedUser extends JwtPayload {
  id: number;
  tipo: string;
  email: string;
  permissions?: string[];
}

// Extend FastifyRequest to include user
interface FastifyRequestWithUser extends FastifyRequest {
  user?: AuthenticatedUser;
}

export async function autenticar(
  req: FastifyRequestWithUser,
  reply: FastifyReply
) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return reply.status(401).send({ error: "Token não fornecido" });
    }

    const [, token] = authHeader.split(" ");
    const payload = verificarToken(token) as JwtPayload & {
      id?: number;
      userId?: number;
      tipo?: string;
      email?: string;
    };
    if (typeof payload !== "object" || !payload) {
      return reply.status(401).send({ error: "Token inválido" });
    }
    const normalizedUser: AuthenticatedUser = {
      ...(payload as JwtPayload),
      id: (payload.id ?? payload.userId) as number,
      tipo: (payload as any).tipo,
      email: (payload as any).email,
    };
    if (!normalizedUser.id) {
      return reply.status(401).send({ error: "Token inválido" });
    }
    req.user = normalizedUser;

    // Carregar permissões (não bloquear autenticação em caso de inconsistências)
    try {
      const userPermissions = await req.server.prisma.usuarioPermissao.findMany(
        {
          where: { UsuarioID: req.user.id },
          select: { Permissao: { select: { Descricao: true } } },
        }
      );
      req.user.permissions = userPermissions
        .map((p) => p.Permissao?.Descricao)
        .filter((d): d is string => typeof d === "string");
    } catch (_) {
      req.user.permissions = [];
    }
  } catch (e) {
    return reply.status(401).send({ error: "Token inválido" });
  }
}
