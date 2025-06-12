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
  loginResponseSchema
} from "../schemas/auth.schema";
import { autenticar } from "../middlewares/authMiddleware";

export default async function authRoutes(fastify: FastifyInstance) {
  // Login
  fastify.post("/login", {
    schema: {
      body: loginSchema,
      response: loginResponseSchema
    }
  }, loginHandler);

  // Refresh Token
  fastify.post("/refresh", {
    schema: {
      body: refreshTokenSchema,
      response: {
        200: {
          type: 'object',
          properties: {
            accessToken: { type: 'string' },
            refreshToken: { type: 'string' }
          }
        }
      }
    }
  }, refreshTokenHandler);

  // Request Password Reset
  fastify.post("/forgot-password", {
    schema: {
      body: passwordResetRequestSchema,
      response: {
        200: {
          type: 'object',
          properties: {
            mensagem: { type: 'string' }
          }
        }
      }
    }
  }, requestPasswordResetHandler);

  // Reset Password
  fastify.post("/reset-password", {
    schema: {
      body: passwordResetSchema,
      response: {
        200: {
          type: 'object',
          properties: {
            mensagem: { type: 'string' }
          }
        }
      }
    }
  }, resetPasswordHandler);

  // Logout (requires authentication)
  fastify.post("/logout", {
    onRequest: [autenticar],
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            mensagem: { type: 'string' }
          }
        }
      }
    }
  }, logoutHandler);
}
