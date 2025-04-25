import { FastifyInstance } from "fastify";
import {
  criarFuncionario,
  listarFuncionarios,
  atualizarFuncionario,
  removerFuncionario,
} from "../controllers/funcionario.controller";
import { autenticar } from "../middlewares/authMiddleware";

export default async function funcionarioRoutes(fastify: FastifyInstance) {
  fastify.addHook("onRequest", autenticar);

  fastify.get("/", listarFuncionarios);
  fastify.post("/", criarFuncionario);
  fastify.put("/:id", atualizarFuncionario);
  fastify.delete("/:id", removerFuncionario);
}
