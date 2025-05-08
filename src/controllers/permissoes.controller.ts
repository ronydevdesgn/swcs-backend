import { FastifyRequest, FastifyReply } from 'fastify';
import { createPermissaoSchema } from '../schemas/permissoes.schema.js';

export async function criarPermissao(req: FastifyRequest, reply: FastifyReply) {
  const prisma = req.server.prisma;
  // Verifica se o usuário tem permissão para criar permissões
  const data = createPermissaoSchema.parse(req.body);
  const permissao = await prisma.permissao.create({ data });
  return reply.status(201).send(permissao);
}

export async function listarPermissoes(req: FastifyRequest, reply: FastifyReply) {
  const prisma = req.server.prisma;
  const permissoes = await prisma.permissao.findMany();
  return reply.send(permissoes);
}