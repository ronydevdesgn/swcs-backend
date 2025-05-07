import { FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../plugins/prisma.js';
import { createEfetividadeSchema } from '../schemas/efetividades.schema.js';

export async function criarEfetividade(req: FastifyRequest, reply: FastifyReply) {
  const data = createEfetividadeSchema.parse(req.body);
  const efetividade = await prisma.efetividade.create({ data });
  return reply.status(201).send(efetividade);
}

export async function listarEfetividades(_: FastifyRequest, reply: FastifyReply) {
  const efetividades = await prisma.efetividade.findMany();
  return reply.send(efetividades);
}