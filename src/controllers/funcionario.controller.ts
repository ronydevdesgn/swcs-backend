import { FastifyRequest, FastifyReply } from 'fastify'
import { criarFuncionarioSchema, atualizarFuncionarioSchema } from '../schemas/funcionario.schema'
import { hashSenha } from '../utils/hash'

export async function criarFuncionario(req: FastifyRequest, reply: FastifyReply) {
  const dados = criarFuncionarioSchema.parse(req.body)
  const senhaHash = await hashSenha(dados.Senha)

  const novo = await req.server.prisma.funcionario.create({
    data: {
      Nome: dados.Nome,
      Email: dados.Email,
      SenhaHash: senhaHash,
    },
  })

  return reply.code(201).send(novo)
}

export async function listarFuncionarios(req: FastifyRequest, reply: FastifyReply) {
  const lista = await req.server.prisma.funcionario.findMany()
  return reply.send(lista)
}

export async function atualizarFuncionario(req: FastifyRequest, reply: FastifyReply) {
  const id = Number(req.params['id'])
  const dados = atualizarFuncionarioSchema.parse(req.body)

  const atualizado = await req.server.prisma.funcionario.update({
    where: { FuncionarioID: id },
    data: dados,
  })

  return reply.send(atualizado)
}

export async function removerFuncionario(req: FastifyRequest, reply: FastifyReply) {
  const id = Number(req.params['id'])

  await req.server.prisma.funcionario.delete({
    where: { FuncionarioID: id },
  })

  return reply.code(204).send()
}