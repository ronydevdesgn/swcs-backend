import { FastifyInstance } from "fastify";
import {
  presencaSchema,
  updatePresencaSchema,
  idParamSchema,
  presencaResponseSchema,
} from "../schemas/presencas.schema";
import {
  registrarPresenca,
  listarPresencas,
  buscarPresencasProfessor,
  atualizarPresenca,
} from "../controllers/presencas.controller";
import { autenticar } from "../middlewares/authMiddleware";

export default async function presencasRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas
  app.addHook("onRequest", autenticar);

  app.post(
    "/",
    {
      schema: {
        tags: ["presencas"],
        summary: "Registrar presença",
        description: "Registra uma presença para um professor em uma data",
        body: presencaSchema,
        response: {
          201: {
            type: "object",
            properties: {
              mensagem: { type: "string" },
              data: { type: "object" },
            },
          },
          400: { type: "object", properties: { mensagem: { type: "string" } } },
          409: { type: "object", properties: { mensagem: { type: "string" } } },
          500: { type: "object", properties: { mensagem: { type: "string" } } },
        },
      },
    },
    registrarPresenca
  );

  app.get(
    "/",
    {
      schema: {
        tags: ["presencas"],
        summary: "Listar presenças",
        description:
          "Lista presenças com filtros por período, estado e professor",
        response: {
          200: {
            type: "object",
            properties: {
              data: { type: "array", items: presencaResponseSchema },
              meta: { type: "object" },
            },
          },
          500: { type: "object", properties: { mensagem: { type: "string" } } },
        },
      },
    },
    listarPresencas
  );

  // Buscar por ID
  app.get("/:id", async (req, reply) => {
    const prisma = req.server.prisma;
    const { id } = req.params as { id: number };
    const registro = await prisma.presenca.findUnique({
      where: { PresencaID: Number(id) },
    });
    if (!registro)
      return reply.status(404).send({ mensagem: "Presença não encontrada" });
    return reply.send({ data: registro });
  });

  app.get(
    "/professor/:id",
    {
      schema: {
        params: idParamSchema,
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                type: "array",
                items: presencaResponseSchema,
              },
            },
          },
        },
      },
    },
    buscarPresencasProfessor
  );

  app.put(
    "/:id",
    {
      schema: {
        params: idParamSchema,
        body: updatePresencaSchema,
      },
    },
    atualizarPresenca
  );

  // Remover por ID
  app.delete("/:id", async (req, reply) => {
    const prisma = req.server.prisma;
    const { id } = req.params as { id: number };
    try {
      await prisma.presenca.delete({ where: { PresencaID: Number(id) } });
      return reply.send({ mensagem: "Presença removida com sucesso" });
    } catch (e) {
      return reply.status(404).send({ mensagem: "Presença não encontrada" });
    }
  });
}
