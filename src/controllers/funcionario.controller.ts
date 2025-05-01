import { FastifyRequest, FastifyReply } from "fastify";
import {
  criarFuncionarioSchema,
  atualizarFuncionarioSchema,
} from "../schemas/funcionario.schema.js";
import { hashSenha } from "../utils/hash.js";

export async function criarFuncionario(
  req: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const dados = criarFuncionarioSchema.parse(req.body);
    const senhaHash = await hashSenha(dados.Senha);

    const novo = await req.server.prisma.funcionario.create({
      data: {
        Nome: dados.Nome,
        Email: dados.Email,
        Senha: senhaHash,
      },
    });

    return reply.code(201).send(novo);
  } catch (error) {
    console.error("Error in criarFuncionario:", error);
    return reply.status(500).send({ mensagem: "Erro ao criar funcionário" });
  }
}

export async function listarFuncionarios(
  req: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const lista = await req.server.prisma.funcionario.findMany();
    return reply.send(lista);
  } catch (error) {
    console.error("Error in listarFuncionarios:", error);
    return reply.status(500).send({ mensagem: "Erro ao listar funcionários" });
  }
}

export async function atualizarFuncionario(
  req: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const id = Number((req.params as { id: string }).id);
    if (isNaN(id)) {
      return reply.status(400).send({ mensagem: "ID inválido" });
    }

    const dados = atualizarFuncionarioSchema.parse(req.body);

    const atualizado = await req.server.prisma.funcionario.update({
      where: { FuncionarioID: id },
      data: dados,
    });

    return reply.send(atualizado);
  } catch (error) {
    console.error("Error in atualizarFuncionario:", error);
    if ((error as { code?: string }).code === "P2025") {
      return reply.status(404).send({ mensagem: "Funcionário não encontrado" });
    }
    return reply
      .status(500)
      .send({ mensagem: "Erro ao atualizar funcionário" });
  }
}

export async function removerFuncionario(
  req: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const id = Number((req.params as { id: string }).id);
    if (isNaN(id)) {
      return reply.status(400).send({ mensagem: "ID inválido" });
    }

    await req.server.prisma.funcionario.delete({
      where: { FuncionarioID: id },
    });

    return reply.code(204).send();
  } catch (error) {
    console.error("Error in removerFuncionario:", error);
    if ((error as { code?: string }).code === "P2025") {
      return reply.status(404).send({ mensagem: "Funcionário não encontrado" });
    }
    return reply.status(500).send({ mensagem: "Erro ao remover funcionário" });
  }
}
