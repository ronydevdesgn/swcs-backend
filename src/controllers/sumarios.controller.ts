import { FastifyRequest, FastifyReply } from 'fastify';
import { createSumarioSchema } from '../schemas/sumarios.schema';

export async function criarSumario(req: FastifyRequest, reply: FastifyReply) {
  const prisma = req.server.prisma;
  /** 
    * Valida e analisa o corpo da solicitação usando o createSumarioSchema 
    * Converte os dados analisados ​​para o tipo 'qualquer' para tratamento flexível de dados 
   */
  const data = createSumarioSchema.parse(req.body) as any;
/**
 * Cria o sumário no banco de dados
 * Utiliza o método 'create' do Prisma para inserir o novo sumário
 * O método 'create' recebe um objeto com a propriedade 'data' contendo os dados do sumário
 * Retorna o sumário criado com status 201 (Created)
 */
  const sumario = await prisma.sumario.create({ data });
  return reply.status(201).send(sumario);
}

export async function listarSumarios(req: FastifyRequest, reply: FastifyReply) {
  const prisma = req.server.prisma;
  const sumarios = await prisma.sumario.findMany();
  return reply.send(sumarios);
}