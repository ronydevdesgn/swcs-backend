import { FastifyInstance } from "fastify";
import { z } from "zod";
import {
  atribuirPermissaoUsuario,
  atualizarPermissao,
  buscarPermissao,
  buscarPermissoesPorUsuario,
  criarPermissao,
  deletarPermissao,
  listarPermissoes,
} from "../controllers/permissoes.controller";
import { autenticar } from "../middlewares/authMiddleware";
import {
  atribuirPermissaoResponseSchema,
  createPermissaoResponseSchema,
  errorResponseSchema,
  idParamSchema,
  permissaoListResponseSchema,
  permissaoSchema,
  singlePermissaoResponseSchema,
  usuarioPermissaoListResponseSchema,
  usuarioPermissaoSchema
} from "../schemas/permissoes.schema";

export default async function permissoesRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas
  app.addHook("onRequest", autenticar);

  // Criar permissão
  app.post(
    "/",
    {
      schema: {
        tags: ["permissoes"],
        summary: "Criar uma nova permissão",
        description: "Cria uma nova permissão com uma descrição única.",
        body: permissaoSchema,
        response: {
          201: createPermissaoResponseSchema,
          409: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    criarPermissao
  );

  // Atribuir permissão a um usuário
  app.post(
    "/atribuir",
    {
      schema: {
        tags: ["permissoes"],
        summary: "Atribuir permissão a um usuário",
        description: "Atribui uma permissão existente a um usuário específico.",
        body: usuarioPermissaoSchema,
        response: {
          200: atribuirPermissaoResponseSchema,
          409: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    atribuirPermissaoUsuario
  );

  // Listar todas as permissões
  app.get(
    "/",
    {
      schema: {
        tags: ["permissoes"],
        summary: "Listar todas as permissões",
        description:
          "Retorna uma lista de todas as permissões cadastradas no sistema.",
        response: {
          200: permissaoListResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    listarPermissoes
  );

  // Buscar permissão por ID
  app.get(
    "/:id",
    {
      schema: {
        tags: ["permissoes"],
        summary: "Buscar permissão por ID",
        description: "Retorna uma permissão específica com base no ID fornecido.",
        params: idParamSchema,
        response: {
          200: singlePermissaoResponseSchema,
          404: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    buscarPermissao
  );

  // Buscar permissões por usuário
  app.get(
    "/usuario/:id",
    {
      schema: {
        tags: ["permissoes"],
        summary: "Buscar permissões por usuário",
        description:
          "Retorna todas as permissões associadas a um ID de usuário específico.",
        params: idParamSchema,
        response: {
          200: usuarioPermissaoListResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    buscarPermissoesPorUsuario
  );

  // Atualizar permissão
  app.put(
    "/:id",
    {
      schema: {
        tags: ["permissoes"],
        summary: "Atualizar uma permissão",
        description: "Atualiza a descrição de uma permissão existente.",
        params: idParamSchema,
        body: permissaoSchema,
        response: {
          200: z.object({
            mensagem: z.string(),
            data: z.any()
          }),
          404: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    atualizarPermissao
  );

  // Deletar permissão
  app.delete(
    "/:id",
    {
      schema: {
        tags: ["permissoes"],
        summary: "Remover uma permissão",
        description: "Remove uma permissão permanentemente do sistema.",
        params: idParamSchema,
        response: {
          200: z.object({ mensagem: z.string() }),
          404: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    deletarPermissao
  );
}
