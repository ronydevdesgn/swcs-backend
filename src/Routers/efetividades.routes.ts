import { FastifyInstance } from "fastify";
import {
  efetividadeSchema,
  updateEfetividadeSchema,
  periodoSchema,
  idParamSchema,
  professorEfetividadeQuerySchema,
  createEfetividadeResponseSchema,
  listEfetividadesResponseSchema,
  singleEfetividadeResponseSchema,
  updateEfetividadeResponseSchema,
  deleteEfetividadeResponseSchema,
  efetividadesPorPeriodoResponseSchema,
  efetividadesProfessorResponseSchema,
  errorResponseSchema,
} from "../schemas/efetividades.schema";
import {
  registrarEfetividade,
  listarEfetividades,
  buscarEfetividade,
  atualizarEfetividade,
  deletarEfetividade,
  buscarEfetividadesPorPeriodo,
  buscarEfetividadesProfessor,
} from "../controllers/efetividades.controller";
import { autenticar } from "../middlewares/authMiddleware";

export default async function efetividadesRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas
  app.addHook("onRequest", autenticar);

  // Registrar nova efetividade
  app.post(
    "/",
    {
      schema: {
        tags: ["efetividades"],
        summary: "Registrar nova efetividade",
        description:
          "Registra a efetividade de um professor para uma data específica",
        security: [{ bearerAuth: [] }],
        body: efetividadeSchema,
        response: {
          201: createEfetividadeResponseSchema,
          400: errorResponseSchema,
          404: errorResponseSchema,
          409: errorResponseSchema,
          500: errorResponseSchema,
        },
      },
    },
    registrarEfetividade
  );

  // Listar todas as efetividades
  app.get(
    "/",
    {
      schema: {
        tags: ["efetividades"],
        summary: "Listar efetividades",
        description: "Lista todas as efetividades registradas no sistema",
        security: [{ bearerAuth: [] }],
        response: {
          200: listEfetividadesResponseSchema,
          500: errorResponseSchema,
        },
      },
    },
    listarEfetividades
  );

  // Buscar efetividades por período
  app.get(
    "/periodo",
    {
      schema: {
        tags: ["efetividades"],
        summary: "Buscar efetividades por período",
        description:
          "Retorna as efetividades registradas dentro de um período específico com estatísticas",
        security: [{ bearerAuth: [] }],
        querystring: periodoSchema,
        response: {
          200: efetividadesPorPeriodoResponseSchema,
          400: errorResponseSchema,
          500: errorResponseSchema,
        },
      },
    },
    buscarEfetividadesPorPeriodo
  );

  // Buscar efetividade por ID
  app.get(
    "/:id",
    {
      schema: {
        tags: ["efetividades"],
        summary: "Buscar efetividade por ID",
        description: "Retorna os detalhes de uma efetividade específica",
        security: [{ bearerAuth: [] }],
        params: idParamSchema,
        response: {
          200: singleEfetividadeResponseSchema,
          404: errorResponseSchema,
          500: errorResponseSchema,
        },
      },
    },
    buscarEfetividade
  );

  // Atualizar efetividade
  app.put(
    "/:id",
    {
      schema: {
        tags: ["efetividades"],
        summary: "Atualizar efetividade",
        description: "Atualiza os dados de uma efetividade existente",
        security: [{ bearerAuth: [] }],
        params: idParamSchema,
        body: updateEfetividadeSchema,
        response: {
          200: updateEfetividadeResponseSchema,
          400: errorResponseSchema,
          404: errorResponseSchema,
          409: errorResponseSchema,
          500: errorResponseSchema,
        },
      },
    },
    atualizarEfetividade
  );

  // Remover efetividade
  app.delete(
    "/:id",
    {
      schema: {
        tags: ["efetividades"],
        summary: "Remover efetividade",
        description: "Remove uma efetividade do sistema",
        security: [{ bearerAuth: [] }],
        params: idParamSchema,
        response: {
          200: deleteEfetividadeResponseSchema,
          404: errorResponseSchema,
          500: errorResponseSchema,
        },
      },
    },
    deletarEfetividade
  );

  // Buscar efetividades de um professor
  app.get(
    "/professor/:id",
    {
      schema: {
        tags: ["efetividades"],
        summary: "Buscar efetividades de um professor",
        description:
          "Retorna todas as efetividades de um professor específico com estatísticas",
        security: [{ bearerAuth: [] }],
        params: idParamSchema,
        querystring: professorEfetividadeQuerySchema,
        response: {
          200: efetividadesProfessorResponseSchema,
          404: errorResponseSchema,
          500: errorResponseSchema,
        },
      },
    },
    buscarEfetividadesProfessor
  );
}
