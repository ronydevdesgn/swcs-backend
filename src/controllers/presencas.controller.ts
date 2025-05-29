import { FastifyRequest, FastifyReply } from 'fastify';
import { createPresencaSchema } from '../schemas/presencas.schema';
import { Estado } from '@prisma/client';

export async function criarPresenca(req: FastifyRequest, reply: FastifyReply) {
  const prisma = req.server.prisma;
  const data = createPresencaSchema.parse(req.body);
  const presenca = await prisma.presenca.create({
    data: {
      Data: data.Data,
      Estado: data.Estado.toUpperCase() as Estado, // Convertendo para o enum do Prisma
      ProfessorID: data.ProfessorID,
    },
  });
  return reply.status(201).send(presenca);
}

export async function listarPresencas(req: FastifyRequest, reply: FastifyReply) {
  const prisma = req.server.prisma;
  const presencas = await prisma.presenca.findMany();
  return reply.send(presencas);
}

