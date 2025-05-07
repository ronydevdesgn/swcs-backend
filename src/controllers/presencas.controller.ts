import { FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../plugins/prisma.js';
import { createPresencaSchema } from '../schemas/presencas.schema.js';

export async function criarPresenca(req: FastifyRequest, reply: FastifyReply) {
  const data = createPresencaSchema.parse(req.body);
  const presenca = await prisma.presenca.create({ data });
  return reply.status(201).send(presenca);
}

export async function listarPresencas(_: FastifyRequest, reply: FastifyReply) {
  const presencas = await prisma.presenca.findMany();
  return reply.send(presencas);
}