import { FastifyInstance } from "fastify";
import {
  loginHandler,
  refreshTokenHandler,
  requestPasswordResetHandler,
  resetPasswordHandler,
  logoutHandler,
} from "../controllers/auth.controller";
import {
  loginSchema,
  refreshTokenSchema,
  passwordResetSchemaSwagger,
  passwordResetRequestSchema,
  loginResponseSchema,
  errorResponseSchema,
  successResponseSchema,
} from "../schemas/auth.schema";
import { autenticar } from "../middlewares/authMiddleware";

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

  // Refresh Token
  fastify.post(
    "/refresh",
    {
      schema: {
        tags: ["auth"],
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
}
