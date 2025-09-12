import { FastifyInstance } from "fastify";
import {
  createCursoSchema,
  updateCursoSchema,
  idParamSchema,
  listarCursosQuerySchema,
  departamentoQuerySchema,
  createCursoResponseSchema,
  listCursosResponseSchema,
  singleCursoResponseSchema,
  updateCursoResponseSchema,
  deleteCursoResponseSchema,
  errorResponseSchema,
} from "../schemas/cursos.schema";
import {
  criarCurso,
  listarCursos,
  listarCursosPorDepartamento,
  buscarCurso,
  atualizarCurso,
  deletarCurso,
} from "../controllers/cursos.controller";
import { autenticar } from "../middlewares/authMiddleware";

export default async function cursoRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas
  app.addHook("onRequest", autenticar);

  // Criar novo curso
  app.post(
    "/",
    {
      schema: {
        tags: ["cursos"],
        summary: "Criar novo curso",
        description: "Cria um novo curso e associa a um professor",
        security: [{ bearerAuth: [] }],
        body: createCursoSchema,
        response: {
          201: createCursoResponseSchema,
          404: errorResponseSchema,
          409: errorResponseSchema,
          500: errorResponseSchema,
        },
      },
    },
    criarCurso
  );

  // Listar todos os cursos com filtros opcionais
  app.get(
    "/",
    {
      schema: {
        tags: ["cursos"],
        summary: "Listar cursos",
        description:
          "Lista todos os cursos com filtros opcionais de busca e departamento",
        security: [{ bearerAuth: [] }],
        querystring: listarCursosQuerySchema,
        response: {
          200: listCursosResponseSchema,
          400: errorResponseSchema,
          500: errorResponseSchema,
        },
      },
    },
    listarCursos
  );

  // Listar cursos por departamento
  app.get(
    "/departamento",
    {
      schema: {
        tags: ["cursos"],
        summary: "Listar cursos por departamento",
        description: "Lista cursos filtrados por departamento específico",
        security: [{ bearerAuth: [] }],
        querystring: departamentoQuerySchema,
        response: {
          200: listCursosResponseSchema,
          400: errorResponseSchema,
          500: errorResponseSchema,
        },
      },
    },
    listarCursosPorDepartamento
  );

  // Buscar curso por ID
  app.get(
    "/:id",
    {
      schema: {
        tags: ["cursos"],
        summary: "Buscar curso por ID",
        description: "Retorna os detalhes completos de um curso específico",
        security: [{ bearerAuth: [] }],
        params: idParamSchema,
        response: {
          200: singleCursoResponseSchema,
          404: errorResponseSchema,
          500: errorResponseSchema,
        },
      },
    },
    buscarCurso
  );

  // Atualizar curso
  app.put(
    "/:id",
    {
      schema: {
        tags: ["cursos"],
        summary: "Atualizar curso",
        description: "Atualiza os dados de um curso existente",
        security: [{ bearerAuth: [] }],
        params: idParamSchema,
        body: updateCursoSchema,
        response: {
          200: updateCursoResponseSchema,
          404: errorResponseSchema,
          409: errorResponseSchema,
          500: errorResponseSchema,
        },
      },
    },
    atualizarCurso
  );

  // Remover curso
  app.delete(
    "/:id",
    {
      schema: {
        tags: ["cursos"],
        summary: "Remover curso",
        description: "Remove um curso e suas associações com professores",
        security: [{ bearerAuth: [] }],
        params: idParamSchema,
        response: {
          200: deleteCursoResponseSchema,
          404: errorResponseSchema,
          500: errorResponseSchema,
        },
      },
    },
    deletarCurso
  );
}