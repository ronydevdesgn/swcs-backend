import { FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../plugins/prisma.js';
import { createCursoSchema } from '../schemas/cursos.schema.js';

export async function criarCurso(req: FastifyRequest, reply: FastifyReply) {
  const data = createCursoSchema.parse(req.body);
  const curso = await prisma.curso.create({ data });
  return reply.status(201).send(curso);
}

export async function listarCursos(_: FastifyRequest, reply: FastifyReply) {
  const cursos = await prisma.curso.findMany();
  return reply.send(cursos);
}