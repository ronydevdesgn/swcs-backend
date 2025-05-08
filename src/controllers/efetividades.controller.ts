import { FastifyRequest, FastifyReply } from 'fastify';
import { createEfetividadeSchema } from '../schemas/efetividades.schema.js';

export async function criarEfetividade(req: FastifyRequest, reply: FastifyReply) {
  const prisma = req.server.prisma;
  const data = createEfetividadeSchema.parse(req.body);
  const efetividade = await prisma.efetividade.create({ data });
  return reply.status(201).send(efetividade);
}

export async function listarEfetividades(req: FastifyRequest, reply: FastifyReply) {
  const prisma = req.server.prisma;
  const efetividades = await prisma.efetividade.findMany();
  return reply.send(efetividades);
}