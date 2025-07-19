import { FastifyInstance } from "fastify";
import { 
  loginHandler, 
  refreshTokenHandler,
  requestPasswordResetHandler,
  resetPasswordHandler,
  logoutHandler
} from "../controllers/auth.controller";
import { 
  loginSchema, 
  refreshTokenSchema,
  passwordResetRequestSchema,
  passwordResetSchema,
  loginResponseSchema,
  errorResponseSchema
} from "../schemas/auth.schema";
import { autenticar } from "../middlewares/authMiddleware";

export default async function authRoutes(fastify: FastifyInstance) {
  // Login
  fastify.post("/login", {
    schema: {
      body: loginSchema,
      response: {
        200: loginResponseSchema,
        401: errorResponseSchema,
        500: errorResponseSchema
      }
    }
  }, loginHandler);

  // Refresh Token
  fastify.post("/refresh", {
    schema: {
      body: refreshTokenSchema,
      response: {
        200: loginResponseSchema,
        401: errorResponseSchema,
        500: errorResponseSchema
      }
    }
  }, refreshTokenHandler);

  // Request Password Reset
  fastify.post("/forgot-password", {
    schema: {
      body: passwordResetRequestSchema,
      response: {
        200: errorResponseSchema,
        500: errorResponseSchema
      }
    }
  }, requestPasswordResetHandler);

  // Reset Password
  fastify.post("/reset-password", {
    schema: {
      body: passwordResetSchema,
      response: {
        200: errorResponseSchema,
        400: errorResponseSchema,
        500: errorResponseSchema
      }
    }
  }, resetPasswordHandler);

  // Logout (requires authentication)
  fastify.post("/logout", {
    onRequest: [autenticar],
    schema: {
      response: {
        200: errorResponseSchema,
        500: errorResponseSchema
      }
    }
  }, logoutHandler);
}
