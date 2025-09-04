import { FastifyInstance } from "fastify";
import {
  createCursoSchema,
  updateCursoSchema,
  idParamSchema,
} from "../schemas/cursos.schema";
import {
  criarCurso,
  listarCursos,
  buscarCurso,
  atualizarCurso,
} from "../controllers/cursos.controller";
import { autenticar } from "../middlewares/authMiddleware";

export default async function cursoRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas
  app.addHook("onRequest", autenticar);

  app.post(
    "/",
    {
      schema: {
        body: createCursoSchema,
        response: {
          201: {
            type: "object",
            properties: {
              mensagem: { type: "string" },
              data: { type: "object" },
            },
          },
        },
      },
    },
    criarCurso
  );

  app.get(
    "/",
    {
      schema: {
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                type: "array",
                items: { type: "object" },
              },
            },
          },
        },
      },
    },
    listarCursos
  );

  app.get(
    "/:id",
    {
      schema: {
        params: idParamSchema,
        response: {
          200: {
            type: "object",
            properties: {
              data: { type: "object" },
            },
          },
        },
      },
    },
    buscarCurso
  );

  app.put(
    "/:id",
    {
      schema: {
        params: idParamSchema,
        body: updateCursoSchema,
        response: {
          200: {
            type: "object",
            properties: {
              mensagem: { type: "string" },
              data: { type: "object" },
            },
          },
        },
      },
    },
    atualizarCurso
  );

  // Remover curso por ID
  app.delete("/:id", async (req, reply) => {
    const prisma = req.server.prisma;
    const { id } = req.params as { id: number };
    try {
      await prisma.professorCurso.deleteMany({
        where: { CursoID: Number(id) },
      });
      await prisma.curso.delete({ where: { CursoID: Number(id) } });
      return reply.send({ mensagem: "Curso removido com sucesso" });
    } catch (e) {
      return reply.status(404).send({ mensagem: "Curso não encontrado" });
    }
  });
}
