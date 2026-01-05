import { FastifyReply } from "fastify";
import { FastifyRequestWithUser } from "../utils/http";
import { Permission } from "../consts/permissions";

export function authorize(requiredPermissions: Permission[]) {
  return async function (req: FastifyRequestWithUser, reply: FastifyReply) {
    if (!req.user) {
      return reply.status(401).send({
        mensagem: "Usuário não autenticado",
        statusCode: 401,
        error: "Unauthorized",
      });
    }

    const userPermissions = req.user.permissoes || [];
    
    // Verifica se o usuário tem pelo menos uma das permissões requeridas
    const hasPermission = requiredPermissions.some((p) =>
      userPermissions.includes(p)
    );

    if (!hasPermission) {
      return reply.status(403).send({
        mensagem: "Permissão insuficiente",
        statusCode: 403,
        error: "Forbidden",
        required: requiredPermissions,
      });
    }
  };
}
