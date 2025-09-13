import { FastifyInstance } from "fastify";
import {
  createFuncionarioSchema,
  updateFuncionarioSchema,
  idParamSchema,
  idParamSchemaSwagger,
  createFuncionarioResponseSchema,
  funcionarioListResponseSchema,
  singleFuncionarioResponseSchema,
  updateFuncionarioResponseSchema,
  errorResponseSchema,
  successResponseSchema,
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
        tags: ["Funcionários"],
        summary: "Criar um novo funcionário",
        description:
          "Cria um novo funcionário com informações de usuário associadas.",
        body: createFuncionarioSchema,
        response: {
          201: createFuncionarioResponseSchema,
          400: errorResponseSchema,
          409: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    criarFuncionario
  );

  // Listar funcionários
  app.get(
    "/",
    {
      schema: {
        tags: ["Funcionários"],
        summary: "Listar todos os funcionários",
        description:
          "Retorna uma lista de todos os funcionários com opções de filtro.",
        querystring: z.object({
          search: z
            .string()
            .optional()
            .describe("Termo de busca para nome ou email"),
          cargo: z
            .nativeEnum(Cargo)
            .optional()
            .describe("Filtrar por cargo do funcionário"),
        }),
        response: {
          200: funcionarioListResponseSchema,
          400: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    listarFuncionarios
  );

  // Buscar funcionário por ID
  app.get(
    "/:id",
    {
      schema: {
        tags: ["Funcionários"],
        summary: "Buscar funcionário por ID",
        description:
          "Retorna um funcionário específico com base no ID fornecido.",
        params: idParamSchemaSwagger,
        response: {
          200: singleFuncionarioResponseSchema,
          404: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    buscarFuncionario
  );

  // Atualizar funcionário
  app.put(
    "/:id",
    {
      schema: {
        tags: ["Funcionários"],
        summary: "Atualizar um funcionário existente",
        description:
          "Atualiza as informações de um funcionário e seu usuário associado.",
        params: idParamSchemaSwagger,
        body: updateFuncionarioSchema,
        response: {
          200: updateFuncionarioResponseSchema,
          400: errorResponseSchema,
          404: errorResponseSchema,
          409: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    atualizarFuncionario
  );
}
