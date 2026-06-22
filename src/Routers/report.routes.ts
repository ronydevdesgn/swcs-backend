import { Departamento } from "@prisma/client";
import { FastifyInstance } from "fastify";
import * as z from 'zod';
import { reportPresencasPorMes } from "../controllers/report-presencas-por-mes.controller";

export default async function reportsRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas

  // Registrar presença individual

  app.get(
    "/relatorios",
    {
      schema: {
        tags: ["reports"],
        summary: "Gerar relatório de presenças por mês",
        description:
          "Gera um relatório de presenças de professores agrupado por mês, com possibilidade de filtrar por período e departamento.",
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
            .describe("Filtrar por departamento")
        }),
        response: {
          200: z.any().describe("Relatório gerado com sucesso"),
        },
        security: [{ bearerAuth: [] }],
      },
    },
    reportPresencasPorMes
  );
}
