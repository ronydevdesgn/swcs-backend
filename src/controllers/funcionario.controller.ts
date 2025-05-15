import { FastifyRequest, FastifyReply } from 'fastify';
import { criarFuncionarioSchema, atualizarFuncionarioSchema } from '../schemas/funcionario.schema';

export async function criarFuncionario(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;
  // Valida o body
  const data = criarFuncionarioSchema.parse(req.body);
  // Cria o funcionário
  const funcionario = await prisma.funcionario.create({ data });
  return reply.status(201).send(funcionario);
}

export async function listarFuncionarios(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;
  const funcionarios = await prisma.funcionario.findMany();
  return reply.send(funcionarios);
}

export async function atualizarFuncionario(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;
  const id = Number((req.params as any).id);
  const data = atualizarFuncionarioSchema.parse(req.body);
  const funcionario = await prisma.funcionario.update({
    where: { FuncionarioID: id },
    data,
  });
  return reply.send(funcionario);
}

export async function deletarFuncionario(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;
  const id = Number((req.params as any).id);
  await prisma.funcionario.delete({ where: { FuncionarioID: id } });
  return reply.status(204).send();
}
