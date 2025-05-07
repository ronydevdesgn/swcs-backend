import { FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../plugins/prisma.js';
import { createSumarioSchema } from '../schemas/sumarios.schema.js';

export async function criarSumario(req: FastifyRequest, reply: FastifyReply) {
  const data = createSumarioSchema.parse(req.body);
  const sumario = await prisma.sumario.create({ data });
  return reply.status(201).send(sumario);
}

export async function listarSumarios(_: FastifyRequest, reply: FastifyReply) {
  const sumarios = await prisma.sumario.findMany();
  return reply.send(sumarios);
}