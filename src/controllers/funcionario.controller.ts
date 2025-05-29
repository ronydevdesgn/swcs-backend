import { FastifyRequest, FastifyReply } from 'fastify';
import { criarFuncionarioSchema, atualizarFuncionarioSchema } from '../schemas/funcionario.schema';

export async function criarFuncionario(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;
  /**
 * Valida e analisa o corpo da solicitação usando o criarFuncionarioSchema
 * Converte os dados analisados ​​para o tipo 'qualquer' para tratamento flexível de dados
 */
 const data = criarFuncionarioSchema.parse(req.body) as any;
 /**
 * Cria o funcionário no banco de dados
 */
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
