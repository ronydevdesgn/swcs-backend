import { FastifyInstance } from "fastify";
import {
  criarFuncionario,
  listarFuncionarios,
  atualizarFuncionario,
  deletarFuncionario,
} from "../controllers/funcionario.controller.js";
import { autenticar } from "../middlewares/authMiddleware.js";

export default async function funcionarioRoutes(fastify: FastifyInstance) {
  fastify.addHook("onRequest", autenticar);

  fastify.get("/", listarFuncionarios);
  fastify.post("/", criarFuncionario);
  fastify.put("/:id", atualizarFuncionario);
  fastify.delete("/:id", deletarFuncionario);
}
