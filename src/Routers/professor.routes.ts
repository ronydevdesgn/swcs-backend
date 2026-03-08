import { Departamento } from "@prisma/client";
import { FastifyInstance } from "fastify";
import { z } from "zod";
import {
    atualizarProfessor,
    buscarProfessor,
    criarProfessor,
    deletarProfessor,
    listarProfessores,
} from "../controllers/professor.controller";
import { autenticar } from "../middlewares/authMiddleware";
import {
    createProfessorResponseSchema,
    createProfessorSchema,
    errorResponseSchema,
    idParamSchema,
    professorListResponseSchema,
    singleProfessorResponseSchema,
    updateProfessorResponseSchema,
    updateProfessorSchema
} from "../schemas/professor.schema";

export default async function professorRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas
  app.addHook("onRequest", autenticar);

  // Criar professor
  app.post(
    "/",
    {
      schema: {
        tags: ["professores"],
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
        tags: ["professores"],
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
        tags: ["professores"],
        summary: "Buscar professor por ID",
        description:
          "Retorna um professor específico com base no ID fornecido.",
        params: idParamSchema,
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
        tags: ["professores"],
        summary: "Atualizar um professor existente",
        description:
          "Atualiza as informações de um professor e seu usuário associado.",
        params: idParamSchema,
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

  // Deletar professor
  app.delete(
    "/:id",
    {
      schema: {
        tags: ["professores"],
        summary: "Remover um professor",
        description: "Remove um professor e seu usuário associado.",
        params: idParamSchema,
        response: {
          200: z.object({ mensagem: z.string() }),
          404: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    deletarProfessor
  );
}
