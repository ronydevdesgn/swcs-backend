import { FastifyInstance } from "fastify";
import {
  presencaSchema,
  updatePresencaSchema,
  idParamSchema,
  idParamSchemaSwagger,
  createPresencaResponseSchema,
  presencaListResponseSchema,
  singlePresencaResponseSchema,
  updatePresencaResponseSchema,
  deletePresencaResponseSchema,
  errorResponseSchema,
  successResponseSchema,
  batchPresencaSchema,
  batchPresencaResponseSchema,
  reportSchema,
} from "../schemas/presencas.schema";
import {
  registrarPresenca,
  listarPresencas,
  buscarPresencasProfessor,
  atualizarPresenca,
  buscarPresencaPorId,
  deletarPresenca,
  registrarPresencasEmLote,
} from "../controllers/presencas.controller";
import { autenticar } from "../middlewares/authMiddleware";
import * as z from 'zod'
import { Departamento, Estado } from "@prisma/client";
import { listPresencasPorMes, reportPresencasPorMes } from "../controllers/report-presencas-por-mes.controller";

export default async function presencasRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas
  app.addHook("onRequest", autenticar);

  // Registrar presença individual

  app.get(
    "/report/relatorios",
    {
      schema: {
        tags: ["Presenças"],
        summary: "Gerar relatório uma nova presença",
        description:
          "Registra uma presença para um professor em uma data e estado específicos.",
         querystring: z.object({
          startDate: z
            .string()
            .datetime()
            .optional()
            .describe("Data de início para o filtro (ISO 8601)"),
          endDate: z
            .string()
            .datetime()
            .optional()
            .describe("Data de fim para o filtro (ISO 8601)"),
          departamento: z
            .nativeEnum(Departamento)
            .optional()
            .describe("Filtrar por estado da presença (PRESENTE ou FALTA)")
        }),
        response: {
          201: z.any().describe("Dados da presença registrada"),
        },
        security: [{ bearerAuth: [] }],
      },
    },
    reportPresencasPorMes
  );

    app.get(
    "/list/relatorios",
    {
      schema: {
        tags: ["Presenças"],
        summary: "Gerar relatório uma nova presença",
        description:
          "Registra uma presença para um professor em uma data e estado específicos.",
         querystring: z.object({
          startDate: z
            .string()
            .datetime()
            .optional()
            .describe("Data de início para o filtro (ISO 8601)"),
          endDate: z
            .string()
            .datetime()
            .optional()
            .describe("Data de fim para o filtro (ISO 8601)"),
          departamento: z
            .nativeEnum(Departamento)
            .optional()
            .describe("Filtrar por estado da presença (PRESENTE ou FALTA)")
        }),
        response: {
          201: z.any().describe("Relatorio exibido com sucesso"),
        },
        security: [{ bearerAuth: [] }],
      },
    },
    listPresencasPorMes
  );

  app.post(
    "/",
    {
      schema: {
        tags: ["Presenças"],
        summary: "Registrar uma nova presença",
        description:
          "Registra uma presença para um professor em uma data e estado específicos.",
        body: presencaSchema,
        response: {
          201: createPresencaResponseSchema,
          400: errorResponseSchema,
          404: errorResponseSchema,
          409: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    registrarPresenca
  );

  // Registrar presenças em lote
  app.post(
    "/batch",
    {
      schema: {
        tags: ["Presenças"],
        summary: "Registrar múltiplas presenças em lote",
        description:
          "Registra múltiplas presenças de uma vez para diferentes professores ou datas.",
        body: batchPresencaSchema,
        response: {
          201: batchPresencaResponseSchema,
          400: errorResponseSchema,
          404: errorResponseSchema,
          409: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    registrarPresencasEmLote
  );

  // Listar presenças
  app.get(
    "/",
    {
      schema: {
        tags: ["Presenças"],
        summary: "Listar presenças com filtros",
        description:
          "Retorna uma lista de presenças, com opções para filtrar por período, estado e professor.",
        querystring: z.object({
          inicio: z
            .string()
            .datetime()
            .optional()
            .describe("Data de início para o filtro (ISO 8601)"),
          fim: z
            .string()
            .datetime()
            .optional()
            .describe("Data de fim para o filtro (ISO 8601)"),
          estado: z
            .nativeEnum(Estado)
            .optional()
            .describe("Filtrar por estado da presença (PRESENTE ou FALTA)"),
          professorId: z
            .string()
            .regex(/^\d+$/, "ID do professor inválido")
            .optional()
            .describe("ID do professor para filtro"),
        }),
        response: {
          200: presencaListResponseSchema,
          400: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    listarPresencas
  );

  // Buscar presença por ID
  app.get(
    "/:id",
    {
      schema: {
        tags: ["Presenças"],
        summary: "Buscar presença por ID",
        description:
          "Retorna um registro de presença específico com base no ID fornecido.",
        params: idParamSchema,
        response: {
          200: singlePresencaResponseSchema,
          404: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    buscarPresencaPorId
  );

  // Buscar presenças de um professor
  app.get(
    "/professor/:id",
    {
      schema: {
        tags: ["Presenças"],
        summary: "Buscar presenças por professor",
        description:
          "Retorna todas as presenças de um professor, com opções de filtro por período e estado.",
        params: idParamSchema,
        querystring: z.object({
          inicio: z
            .string()
            .datetime()
            .optional()
            .describe("Data de início para o filtro (ISO 8601)"),
          fim: z
            .string()
            .datetime()
            .optional()
            .describe("Data de fim para o filtro (ISO 8601)"),
          estado: z
            .nativeEnum(Estado)
            .optional()
            .describe("Filtrar por estado da presença (PRESENTE ou FALTA)"),
        }),
        response: {
          200: presencaListResponseSchema,
          404: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    buscarPresencasProfessor
  );

  // Atualizar presença
  app.put(
    "/:id",
    {
      schema: {
        tags: ["Presenças"],
        summary: "Atualizar uma presença existente",
        description:
          "Atualiza as informações de um registro de presença existente.",
        params: idParamSchema,
        body: updatePresencaSchema,
        response: {
          200: updatePresencaResponseSchema,
          400: errorResponseSchema,
          404: errorResponseSchema,
          409: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    atualizarPresenca
  );

  // Remover presença
  app.delete(
    "/:id",
    {
      schema: {
        tags: ["Presenças"],
        summary: "Remover uma presença",
        description: "Remove um registro de presença com base no ID fornecido.",
        params: idParamSchema,
        response: {
          200: deletePresencaResponseSchema,
          404: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    deletarPresenca
  );
}
