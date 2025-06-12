import { FastifyInstance } from "fastify";
import {
  createFuncionarioSchema,
  updateFuncionarioSchema,
  idParamSchema,
} from "../schemas/funcionario.schema";
import {
  criarFuncionario,
  listarFuncionarios,
  buscarFuncionario,
  atualizarFuncionario,
} from "../controllers/funcionario.controller";
import { autenticar } from "../middlewares/authMiddleware";

export default async function funcionarioRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas
  app.addHook("onRequest", autenticar);

  // Criar funcionário
  app.post(
    "/",
    {
      schema: {
        body: createFuncionarioSchema,
        response: {
          201: {
            type: "object",
            properties: {
              mensagem: { type: "string" },
              data: { type: "object" },
            },
          },
        },
      },
      // Listar funcionários
    },
    criarFuncionario
  );

  // Listar funcionários
  app.get(
    "/",
    {
      schema: {
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                type: "array",
                items: { type: "object" },
              },
            },
          },
        },
      },
      // Buscar funcionário por ID
    },
    listarFuncionarios
  );

  // Buscar funcionário por ID
  app.get(
    "/:id",
    {
      schema: {
        params: idParamSchema,
        response: {
          200: {
            type: "object",
            properties: {
              data: { type: "object" },
            },
          },
        },
      },
      // Atualizar funcionário
    },
    buscarFuncionario
  );

  // Atualizar funcionário
  app.put(
    "/:id",
    {
      schema: {
        params: idParamSchema,
        body: updateFuncionarioSchema,
        response: {
          200: {
            type: "object",
            properties: {
              mensagem: { type: "string" },
              data: { type: "object" },
            },
          },
        },
      },
      // Atualizar funcionário
    },
    atualizarFuncionario
  );
}
