import { FastifyRequest, FastifyReply } from 'fastify';
import { createSumarioSchema } from '../schemas/sumarios.schema';

export async function criarSumario(req: FastifyRequest, reply: FastifyReply) {
  const prisma = req.server.prisma;
  const data = createSumarioSchema.parse(req.body);
  const sumario = await prisma.sumario.create({ data });
  return reply.status(201).send(sumario);
}

export async function listarSumarios(req: FastifyRequest, reply: FastifyReply) {
  const prisma = req.server.prisma;
  const sumarios = await prisma.sumario.findMany();
  return reply.send(sumarios);
}