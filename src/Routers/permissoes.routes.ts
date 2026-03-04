import { FastifyInstance } from "fastify";
import {
    atribuirPermissaoUsuario,
    buscarPermissoesPorUsuario,
    criarPermissao,
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
}
