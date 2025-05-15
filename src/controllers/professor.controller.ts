import { FastifyReply, FastifyRequest } from 'fastify';
import { createProfessorSchema, updateProfessorSchema } from '../schemas/professor.schema';

export async function criarProfessor(req: FastifyRequest, reply: FastifyReply) {
  const prisma = req.server.prisma;
  const data = createProfessorSchema.parse(req.body);
  const novoProfessor = await prisma.professor.create({ data });
  return reply.status(201).send(novoProfessor);
}

export async function listarProfessores(req: FastifyRequest, reply: FastifyReply) {
  const prisma = req.server.prisma;
  const professores = await prisma.professor.findMany();
  return reply.send(professores);
}

export async function atualizarProfessor(req: FastifyRequest, reply: FastifyReply) {
  const prisma = req.server.prisma;
  const id = Number((req.params as any).id);
  const data = updateProfessorSchema.parse(req.body);
  const professor = await prisma.professor.update({ where: { ProfessorID: id }, data });
  return reply.send(professor);
}

export async function deletarProfessor(req: FastifyRequest, reply: FastifyReply) {
  const prisma = req.server.prisma;
  const id = Number((req.params as any).id);
  await prisma.professor.delete({ where: { ProfessorID: id } });
  return reply.status(204).send();
}
