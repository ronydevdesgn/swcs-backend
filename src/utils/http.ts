import { FastifyReply } from "fastify";

export function sendError(
  reply: FastifyReply,
  statusCode: number,
  message: string
) {
  return reply.status(statusCode).send({ mensagem: message });
}

export default sendError;
