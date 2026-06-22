import { FastifyInstance } from "fastify";
import { getDashboardStats } from "../controllers/dashboard.controller";
import { autenticar } from "../middlewares/authMiddleware";
import {
    dashboardErrorResponseSchema,
    dashboardStatsResponseSchema,
} from "../schemas/dashboard.schema";

export default async function dashboardRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas do dashboard
  app.addHook("onRequest", autenticar);

  app.get(
    "/stats",
    {
      schema: {
        tags: ["dashboard"],
        summary: "Obter estatísticas gerais",
        description: "Retorna contagens agregadas de entidades do sistema para o dashboard.",
        response: {
          200: dashboardStatsResponseSchema,
          500: dashboardErrorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    getDashboardStats
  );
}
