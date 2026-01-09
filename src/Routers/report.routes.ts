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

export default async function reportsRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas

  // Registrar presença individual

  app.get(
    "/relatorios",
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
}
