import { FastifyInstance } from "fastify";
import {
  permissaoSchema,
  usuarioPermissaoSchema,
  idParamSchema,
  idParamSchemaSwagger,
  permissaoListResponseSchema,
  singlePermissaoResponseSchema,
  usuarioPermissaoListResponseSchema,
  createPermissaoResponseSchema,
  atribuirPermissaoResponseSchema,
  errorResponseSchema,
} from "../schemas/permissoes.schema";
import {
  criarPermissao,
  atribuirPermissaoUsuario,
  listarPermissoes,
  buscarPermissoesPorUsuario,
} from "../controllers/permissoes.controller";
import { autenticar } from "../middlewares/authMiddleware";

export default async function permissoesRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas
  app.addHook("onRequest", autenticar);

  // Criar permissão
  app.post(
    "/",
    {
      schema: {
        tags: ["Permissões"],
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
        tags: ["Permissões"],
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
        tags: ["Permissões"],
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
        tags: ["Permissões"],
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
