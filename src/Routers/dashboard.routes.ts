import { FastifyInstance } from "fastify";
import { autenticar } from "../middlewares/authMiddleware";
import { getDashboardStats } from "../controllers/dashboard.controller";
import {
  dashboardStatsResponseSchema,
  dashboardErrorResponseSchema,
} from "../schemas/dashboard.schema";

export default async function dashboardRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas do dashboard
  app.addHook("onRequest", autenticar);

  app.get(
    "/stats",
    {
      schema: {
        tags: ["Dashboard"],
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
