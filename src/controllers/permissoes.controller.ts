import { FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../plugins/prisma.js';
import { createPermissaoSchema } from '../schemas/permissoes.schema.js';

export async function criarPermissao(req: FastifyRequest, reply: FastifyReply) {
  const data = createPermissaoSchema.parse(req.body);
  const permissao = await prisma.permissao.create({ data });
  return reply.status(201).send(permissao);
}

export async function listarPermissoes(_: FastifyRequest, reply: FastifyReply) {
  const permissoes = await prisma.permissao.findMany();
  return reply.send(permissoes);
}