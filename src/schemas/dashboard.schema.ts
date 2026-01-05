import { z } from "zod";

export const dashboardStatsResponseSchema = z.object({
  data: z.object({
    professores: z.number().describe("Total de professores cadastrados"),
    cursos: z.number().describe("Total de cursos cadastrados"),
    sumarios: z.number().describe("Total de sumários registrados"),
    presencas: z.number().describe("Total de presenças registradas"),
    funcionarios: z.number().describe("Total de funcionários cadastrados"),
  }),
});

export const dashboardErrorResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de erro"),
});

export type DashboardStatsResponse = z.infer<typeof dashboardStatsResponseSchema>;
