import { FastifyInstance } from "fastify";
import { z } from "zod";
import {
    atualizarSumario,
    buscarSumario,
    criarSumario,
    deletarSumario,
    listarSumarios,
} from "../controllers/sumarios.controller";
import { autenticar } from "../middlewares/authMiddleware";
import {
    CreateSumarioInput,
    createSumarioResponseSchema,
    createSumarioSchema,
    errorResponseSchema,
    idParamSchema,
    singleSumarioResponseSchema,
    successResponseSchema,
    sumarioListResponseSchema,
    updateSumarioResponseSchema,
    updateSumarioSchema
} from "../schemas/sumarios.schema";

import { PERMISSIONS } from "../consts/permissions";
import { authorize } from "../middlewares/authorize";

export default async function sumariosRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas
  app.addHook("onRequest", autenticar);

  // Criar Sumário
  app.post<{ Body: CreateSumarioInput }>(
    "/",
    {
      preHandler: authorize([PERMISSIONS.REGISTRAR_SUMARIO]),
      schema: {
        tags: ["sumarios"],
        summary: "Criar um novo sumário",
        description:
          "Cria um novo sumário para um curso e professor específicos.",
        body: createSumarioSchema,
        response: {
          201: createSumarioResponseSchema,
          400: errorResponseSchema,
          403: errorResponseSchema,
          404: errorResponseSchema,
          409: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    criarSumario
  );

  // Listar Sumários
  app.get(
    "/",
    {
      schema: {
        tags: ["sumarios"],
        summary: "Listar todos os sumários",
        description:
          "Retorna uma lista paginada de todos os sumários com opções de filtro.",
        querystring: z.object({
          page: z.string().optional().describe("Número da página").default("1"),
          limit: z
            .string()
            .optional()
            .describe("Limite de itens por página")
            .default("10"),
          search: z
            .string()
            .optional()
            .describe("Termo de busca para o conteúdo do sumário"),
          cursoId: z
            .string()
            .regex(/^\d+$/, "ID do curso inválido")
            .optional()
            .describe("Filtrar por ID do curso"),
          professorId: z
            .string()
            .regex(/^\d+$/, "ID do professor inválido")
            .optional()
            .describe("Filtrar por ID do professor"),
          dataInicio: z
            .string()
            .datetime()
            .optional()
            .describe("Data de início para o filtro (ISO 8601)"),
          dataFim: z
            .string()
            .datetime()
            .optional()
            .describe("Data de fim para o filtro (ISO 8601)"),
        }),
        response: {
          200: sumarioListResponseSchema,
          400: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    listarSumarios
  );

  // Buscar Sumário por ID
  app.get(
    "/:id",
    {
      schema: {
        tags: ["sumarios"],
        summary: "Buscar sumário por ID",
        description: "Retorna um sumário específico com base no ID fornecido.",
        params: idParamSchema,
        response: {
          200: singleSumarioResponseSchema,
          404: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    buscarSumario
  );

  // Atualizar Sumário
  app.put(
    "/:id",
    {
      schema: {
        tags: ["sumarios"],
        summary: "Atualizar um sumário existente",
        description: "Atualiza as informações de um sumário existente.",
        params: idParamSchema,
        body: updateSumarioSchema,
        response: {
          200: updateSumarioResponseSchema,
          400: errorResponseSchema,
          403: errorResponseSchema,
          404: errorResponseSchema,
          409: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    atualizarSumario
  );

  // Deletar Sumário
  app.delete(
    "/:id",
    {
      schema: {
        tags: ["sumarios"],
        summary: "Deletar um sumário",
        description: "Remove um sumário do sistema com base no ID fornecido.",
        params: idParamSchema,
        response: {
          200: successResponseSchema,
          404: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    deletarSumario
  );
}
