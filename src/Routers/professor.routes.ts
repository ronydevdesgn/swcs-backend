import { FastifyInstance } from "fastify";
import {
  createProfessorSchema,
  updateProfessorSchema,
  idParamSchema,
  idParamSchemaSwagger,
  createProfessorResponseSchema,
  professorListResponseSchema,
  singleProfessorResponseSchema,
  updateProfessorResponseSchema,
  errorResponseSchema,
} from "../schemas/professor.schema";
import {
  criarProfessor,
  listarProfessores,
  buscarProfessor,
  atualizarProfessor,
} from "../controllers/professor.controller";
import { autenticar } from "../middlewares/authMiddleware";
import { z } from "zod";
import { Departamento } from "@prisma/client";

export default async function professorRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas
  app.addHook("onRequest", autenticar);

  // Criar professor
  app.post(
    "/",
    {
      schema: {
        tags: ["Professores"],
        summary: "Criar um novo professor",
        description:
          "Cria um novo professor com informações de usuário associadas.",
        body: createProfessorSchema,
        response: {
          201: createProfessorResponseSchema,
          400: errorResponseSchema,
          409: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    criarProfessor
  );

  // Listar professores
  app.get(
    "/",
    {
      schema: {
        tags: ["Professores"],
        summary: "Listar todos os professores",
        description:
          "Retorna uma lista de todos os professores cadastrados, com detalhes de seus cursos e sumários.",
        querystring: z.object({
          search: z
            .string()
            .optional()
            .describe("Termo de busca para nome ou email"),
          departamento: z
            .nativeEnum(Departamento)
            .optional()
            .describe("Filtrar por departamento"),
        }),
        response: {
          200: professorListResponseSchema,
          400: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    listarProfessores
  );

  // Buscar professor por ID
  app.get(
    "/:id",
    {
      schema: {
        tags: ["Professores"],
        summary: "Buscar professor por ID",
        description:
          "Retorna um professor específico com base no ID fornecido.",
        params: idParamSchemaSwagger,
        response: {
          200: singleProfessorResponseSchema,
          404: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    buscarProfessor
  );

  // Atualizar professor
  app.put(
    "/:id",
    {
      schema: {
        tags: ["Professores"],
        summary: "Atualizar um professor existente",
        description:
          "Atualiza as informações de um professor e seu usuário associado.",
        params: idParamSchemaSwagger,
        body: updateProfessorSchema,
        response: {
          200: updateProfessorResponseSchema,
          400: errorResponseSchema,
          404: errorResponseSchema,
          409: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    atualizarProfessor
  );
}
