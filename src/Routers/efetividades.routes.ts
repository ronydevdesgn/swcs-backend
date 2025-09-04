import { FastifyInstance } from "fastify";
import {
  efetividadeSchema,
  periodoSchema,
  idParamSchema,
} from "../schemas/efetividades.schema";
import {
  registrarEfetividade,
  buscarEfetividadesPorPeriodo,
  buscarEfetividadesProfessor,
} from "../controllers/efetividades.controller";
import { autenticar } from "../middlewares/authMiddleware";

export default async function efetividadesRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas
  app.addHook("onRequest", autenticar);

  app.post(
    "/",
    {
      schema: {
        body: efetividadeSchema,
        response: {
          201: {
            type: "object",
            properties: {
              mensagem: { type: "string" },
              data: {
                type: "object",
                properties: {
                  EfetividadeID: { type: "number" },
                  Data: { type: "string", format: "date-time" },
                  HorasTrabalhadas: { type: "number" },
                  ProfessorID: { type: "number" },
                  Professor: {
                    type: "object",
                    properties: {
                      Nome: { type: "string" },
                      Departamento: { type: "string" },
                      CargaHoraria: { type: "number" },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    registrarEfetividade
  );

  // Listar todas as efetividades
  app.get("/", async (req, reply) => {
    const prisma = req.server.prisma;
    const registros = await prisma.efetividade.findMany({
      orderBy: { Data: "desc" },
    });
    return reply.send({ data: registros });
  });

  // Buscar por ID
  app.get("/:id", async (req, reply) => {
    const prisma = req.server.prisma;
    const { id } = req.params as { id: number };
    const registro = await prisma.efetividade.findUnique({
      where: { EfetividadeID: Number(id) },
    });
    if (!registro)
      return reply.status(404).send({ mensagem: "Efetividade não encontrada" });
    return reply.send({ data: registro });
  });

  // Atualizar por ID
  app.put("/:id", async (req, reply) => {
    const prisma = req.server.prisma;
    const { id } = req.params as { id: number };
    const { HorasTrabalhadas, Data } = req.body as any;
    try {
      const atualizado = await prisma.efetividade.update({
        where: { EfetividadeID: Number(id) },
        data: {
          ...(HorasTrabalhadas !== undefined && { HorasTrabalhadas }),
          ...(Data && { Data: new Date(Data) }),
        },
      });
      return reply.send({
        mensagem: "Efetividade atualizada com sucesso",
        data: atualizado,
      });
    } catch (e) {
      return reply.status(404).send({ mensagem: "Efetividade não encontrada" });
    }
  });

  // Remover por ID
  app.delete("/:id", async (req, reply) => {
    const prisma = req.server.prisma;
    const { id } = req.params as { id: number };
    try {
      await prisma.efetividade.delete({ where: { EfetividadeID: Number(id) } });
      return reply.send({ mensagem: "Efetividade removida com sucesso" });
    } catch (e) {
      return reply.status(404).send({ mensagem: "Efetividade não encontrada" });
    }
  });

  app.get(
    "/periodo",
    {
      schema: {
        querystring: periodoSchema,
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    EfetividadeID: { type: "number" },
                    Data: { type: "string", format: "date-time" },
                    HorasTrabalhadas: { type: "number" },
                    ProfessorID: { type: "number" },
                  },
                },
              },
            },
          },
        },
      },
    },
    buscarEfetividadesPorPeriodo
  );

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
                items: {
                  type: "object",
                  properties: {
                    EfetividadeID: { type: "number" },
                    Data: { type: "string", format: "date-time" },
                    HorasTrabalhadas: { type: "number" },
                    ProfessorID: { type: "number" },
                  },
                },
              },
            },
          },
        },
      },
    },
    buscarEfetividadesProfessor
  );
}
