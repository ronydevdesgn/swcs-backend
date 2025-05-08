import { FastifyRequest, FastifyReply } from 'fastify';
import { createCursoSchema } from '../schemas/cursos.schema.js';

  // Função para criar um novo curso
export async function criarCurso(req: FastifyRequest, reply: FastifyReply) {
  // Importando o Prisma Client para interagir com o banco de dados
  const prisma = req.server.prisma;
  const data = createCursoSchema.parse(req.body);
  const curso = await prisma.curso.create({ data });
  return reply.status(201).send(curso);
}

export async function listarCursos(req: FastifyRequest, reply: FastifyReply) {
  const prisma = req.server.prisma;
  const cursos = await prisma.curso.findMany();
  return reply.send(cursos);
}