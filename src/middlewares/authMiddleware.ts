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
    const payload = verificarToken(token);
    if (typeof payload !== "object" || !payload || !("id" in payload)) {
      return reply.status(401).send({ error: "Token inválido" });
    }
    req.user = payload as AuthenticatedUser;

    // Add role checking
    const userPermissions = await req.server.prisma.usuarioPermissao.findMany({
      where: { UsuarioID: req.user.id },
      include: { Permissao: true },
    });
    req.user.permissions = userPermissions.map((p) => p.Permissao.Descricao);
  } catch (e) {
    return reply.status(401).send({ error: "Token inválido" });
  }
}
