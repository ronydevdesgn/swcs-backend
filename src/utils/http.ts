import { FastifyReply, FastifyRequest } from "fastify";
import { TipoUsuario } from "@prisma/client";
import { CreateUsuarioInput, IdParam, UpdateSenhaInput, UpdateUsuarioInput } from "../schemas/usuario.schema";

export interface AuthenticatedUser {
  id: number;
  nome: string;
  email: string;
  tipo: TipoUsuario;
}

export interface FastifyRequestWithUser extends FastifyRequest {
  user?: AuthenticatedUser;
}

export const sendError = (
  reply: FastifyReply,
  statusCode: number,
  message: string
) => {
  return reply.status(statusCode).send({ mensagem: message });
};
