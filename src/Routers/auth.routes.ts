import { FastifyInstance } from "fastify";
import {
  loginHandler,
  refreshTokenHandler,
  requestPasswordResetHandler,
  resetPasswordHandler,
  logoutHandler,
  meHandler,
  verificarTipoUsuarioHandler,
} from "../controllers/auth.controller";
import {
  loginSchema,
  refreshTokenSchema,
  passwordResetSchemaSwagger,
  passwordResetRequestSchema,
  loginResponseSchema,
  errorResponseSchema,
  successResponseSchema,
  usuarioResponseSchema,
} from "../schemas/auth.schema";
import { autenticar } from "../middlewares/authMiddleware";
import { z } from "zod";

export default async function authRoutes(fastify: FastifyInstance) {
  // Login
  fastify.post(
    "/login",
    {
      schema: {
        tags: ["auth"],
        summary: "Realizar login no sistema",
        description:
          "Autentica um usuário (Professor ou Funcionário) no sistema",
        body: loginSchema,
        response: {
          200: {
            ...loginResponseSchema,
          },
          401: {
            ...errorResponseSchema,
          },
          500: {
            ...errorResponseSchema,
          },
        },
      },
    },
    loginHandler
  );

  // Me - Get current user info
  fastify.get(
    "/me",
    {
      onRequest: [autenticar],
      schema: {
        tags: ["auth"],
        summary: "Obter dados do usuário atual",
        description: "Retorna os dados do usuário autenticado atualmente",
        security: [{ bearerAuth: [] }],
        response: {
          200: {
            type: "object",
            properties: {
              data: usuarioResponseSchema,
            },
          },
          401: {
            ...errorResponseSchema,
          },
          500: {
            ...errorResponseSchema,
          },
        },
      },
    },
    meHandler
  );

  // Refresh Token
  fastify.post(
    "/refresh",
    {
      schema: {
        tags: ["refresh"],
        summary: "Renovar token de acesso",
        description: "Renova o token de acesso usando o refresh token",
        body: refreshTokenSchema,
        response: {
          200: {
            ...loginResponseSchema,
          },
          401: {
            ...errorResponseSchema,
          },
          500: {
            ...errorResponseSchema,
          },
        },
      },
    },
    refreshTokenHandler
  );

  // Request Password Reset
  fastify.post(
    "/forgot-password",
    {
      schema: {
        tags: ["auth"],
        summary: "Solicitar recuperação de senha",
        description: "Solicita a recuperação de senha através do email",
        body: passwordResetRequestSchema,
        response: {
          200: {
            ...successResponseSchema,
          },
          500: {
            ...errorResponseSchema,
          },
        },
      },
    },
    requestPasswordResetHandler
  );

  // Reset Password
  fastify.post(
    "/reset-password",
    {
      schema: {
        tags: ["auth"],
        summary: "Redefinir senha",
        description:
          "Redefine a senha do usuário usando o token de recuperação",
        body: passwordResetSchemaSwagger, // Usar versão sem refine
        response: {
          200: {
            ...successResponseSchema,
          },
          400: {
            ...errorResponseSchema,
          },
          500: {
            ...errorResponseSchema,
          },
        },
      },
    },
    resetPasswordHandler
  );

  // Logout (requires authentication)
  fastify.post(
    "/logout",
    {
      onRequest: [autenticar],
      schema: {
        tags: ["auth"],
        summary: "Realizar logout",
        description: "Invalida os tokens de acesso do usuário autenticado",
        security: [{ bearerAuth: [] }],
        response: {
          200: {
            ...successResponseSchema,
          },
          401: {
            ...errorResponseSchema,
          },
          500: {
            ...errorResponseSchema,
          },
        },
      },
    },
    logoutHandler
  );

  // Verificar tipo de usuário (test)
  fastify.get(
    "/verificar-tipo",
    {
      schema: {
        querystring: z.object({
          email: z.string().email("Email inválido"),
        }),
        response: {
          200: z.object({
            tipo: z.enum(["PROFESSOR", "FUNCIONARIO"]),
            nome: z.string(),
            existe: z.boolean(),
          }),
          404: z.object({
            mensagem: z.string(),
          }),
        },
      },
    },
    verificarTipoUsuarioHandler
  );
}
