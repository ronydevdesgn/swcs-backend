import { FastifyInstance } from "fastify";
import {
  updateUsuarioSchema,
  updateSenhaSchema,
  idParamSchema,
  idParamSchemaSwagger,
  usuarioSchema,
  createUsuarioResponseSchema,
  usuarioListResponseSchema,
  singleUsuarioResponseSchema,
  updateUsuarioResponseSchema,
  updateSenhaSchemaSwagger,
  updateSenhaResponseSchema,
  errorResponseSchema,
  deleteUsuarioResponseSchema,
} from "../schemas/usuario.schema";
import {
  listarUsuarios,
  buscarUsuario,
  atualizarUsuario,
  atualizarSenha,
  criarUsuario,
  deletarUsuario,
} from "../controllers/usuario.controller";
import { autenticar } from "../middlewares/authMiddleware";

export default async function usuarioRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas
  app.addHook("onRequest", autenticar);

  // Criar usuário
  app.post(
    "/",
    {
      schema: {
        tags: ["Usuários"],
        summary: "Criar um novo usuário",
        description:
          "Cria um novo usuário (Professor ou Funcionário) com dados de acesso.",
        body: usuarioSchema,
        response: {
          201: createUsuarioResponseSchema,
          400: errorResponseSchema,
          409: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    criarUsuario
  );

  // Listar usuários
  app.get(
    "/",
    {
      schema: {
        tags: ["Usuários"],
        summary: "Listar todos os usuários",
        description:
          "Retorna uma lista de todos os usuários cadastrados, incluindo suas permissões.",
        response: {
          200: usuarioListResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    listarUsuarios
  );

  // Buscar usuário por ID
  app.get(
    "/:id",
    {
      schema: {
        tags: ["Usuários"],
        summary: "Buscar usuário por ID",
        description: "Retorna um usuário específico com base no ID fornecido.",
        params: idParamSchemaSwagger,
        response: {
          200: singleUsuarioResponseSchema,
          404: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    buscarUsuario
  );

  // Atualizar usuário
  app.put(
    "/:id",
    {
      schema: {
        tags: ["Usuários"],
        summary: "Atualizar um usuário existente",
        description:
          "Atualiza as informações de um usuário (nome e email) com base no ID.",
        params: idParamSchemaSwagger,
        body: updateUsuarioSchema,
        response: {
          200: updateUsuarioResponseSchema,
          400: errorResponseSchema,
          404: errorResponseSchema,
          409: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    atualizarUsuario
  );

  // Atualizar senha do usuário
  app.put(
    "/:id/senha",
    {
      schema: {
        tags: ["Usuários"],
        summary: "Atualizar a senha de um usuário",
        description:
          "Permite que um usuário altere sua senha, exigindo a senha atual para validação.",
        params: idParamSchemaSwagger,
        body: updateSenhaSchemaSwagger,
        response: {
          200: updateSenhaResponseSchema,
          401: errorResponseSchema,
          404: errorResponseSchema,
          400: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    atualizarSenha
  );

  // Deletar usuário
  app.delete(
    "/:id",
    {
      schema: {
        tags: ["Usuários"],
        summary: "Deletar um usuário",
        description: "Remove um usuário do sistema com base no ID fornecido.",
        params: idParamSchemaSwagger,
        response: {
          200: deleteUsuarioResponseSchema,
          404: errorResponseSchema,
          500: errorResponseSchema,
        },
        security: [{ bearerAuth: [] }],
      },
    },
    deletarUsuario
  );
}
