import { FastifyReply, FastifyRequest } from "fastify";
import { AppError } from "../types/errors";
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";
import { ZodError } from "zod";

// Interface padronizada para respostas de erro
interface ErrorResponse {
  statusCode: number;
  error: string;
  message: string;
  details?: any;
  timestamp: string;
  path: string;
}

export function errorHandler(
  error: Error,
  request: FastifyRequest,
  reply: FastifyReply
) {
  const timestamp = new Date().toISOString();
  const path = request.url;

  // Log do erro para monitoramento
  request.log.error({
    error: {
      name: error.name,
      message: error.message,
      stack: error.stack,
    },
    request: {
      method: request.method,
      url: request.url,
      params: request.params,
      query: request.query,
    },
  });

  // Erro customizado da aplicação
  if (error instanceof AppError) {
    const response: ErrorResponse = {
      statusCode: error.statusCode,
      error: error.code || "Application Error",
      message: error.message,
      timestamp,
      path,
    };
    return reply.status(error.statusCode).send(response);
  }

  // Erros de validação Zod
  if (error instanceof ZodError) {
    const response: ErrorResponse = {
      statusCode: 400,
      error: "Validation Error",
      message: "Dados de entrada inválidos",
      details: error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      })),
      timestamp,
      path,
    };
    return reply.status(400).send(response);
  }

  // Erros do Prisma - Constraint violations
  if (error instanceof PrismaClientKnownRequestError) {
    let message = "Erro de banco de dados";
    let statusCode = 400;

    switch (error.code) {
      case "P2002":
        // Unique constraint violation
        const field = error.meta?.target as string[] | undefined;
        message = field
          ? `Já existe um registro com esse(s) valor(es): ${field.join(", ")}`
          : "Já existe um registro com esses dados";
        statusCode = 409; // Conflict
        break;

      case "P2025":
        // Record not found
        message = "Registro não encontrado";
        statusCode = 404;
        break;

      case "P2003":
        // Foreign key constraint violation
        message = "Operação não permitida - registro está sendo referenciado";
        statusCode = 400;
        break;

      case "P2014":
        // Required relation missing
        message = "Dados relacionados obrigatórios estão faltando";
        statusCode = 400;
        break;

      default:
        message = "Erro de integridade dos dados";
        statusCode = 400;
    }

    const response: ErrorResponse = {
      statusCode,
      error: "Database Error",
      message,
      details:
        process.env.NODE_ENV === "development"
          ? {
              code: error.code,
              meta: error.meta,
            }
          : undefined,
      timestamp,
      path,
    };
    return reply.status(statusCode).send(response);
  }

  // Erros de validação do Prisma
  if (error instanceof PrismaClientValidationError) {
    const response: ErrorResponse = {
      statusCode: 400,
      error: "Validation Error",
      message: "Dados inválidos para operação no banco de dados",
      details:
        process.env.NODE_ENV === "development" ? error.message : undefined,
      timestamp,
      path,
    };
    return reply.status(400).send(response);
  }

  // Erro de JWT
  if (error.name === "JsonWebTokenError") {
    const response: ErrorResponse = {
      statusCode: 401,
      error: "Unauthorized",
      message: "Token JWT inválido",
      timestamp,
      path,
    };
    return reply.status(401).send(response);
  }

  if (error.name === "TokenExpiredError") {
    const response: ErrorResponse = {
      statusCode: 401,
      error: "Unauthorized",
      message: "Token JWT expirado",
      timestamp,
      path,
    };
    return reply.status(401).send(response);
  }

  // Erros de timeout
  if (error.name === "TimeoutError" || error.message.includes("timeout")) {
    const response: ErrorResponse = {
      statusCode: 408,
      error: "Request Timeout",
      message: "A operação demorou muito para ser concluída",
      timestamp,
      path,
    };
    return reply.status(408).send(response);
  }

  // Erro de sintaxe JSON
  if (error.name === "SyntaxError" && error.message.includes("JSON")) {
    const response: ErrorResponse = {
      statusCode: 400,
      error: "Bad Request",
      message: "JSON inválido na requisição",
      timestamp,
      path,
    };
    return reply.status(400).send(response);
  }

  // Erro padrão - Internal Server Error
  const response: ErrorResponse = {
    statusCode: 500,
    error: "Internal Server Error",
    message:
      process.env.NODE_ENV === "development"
        ? error.message
        : "Erro interno do servidor",
    details:
      process.env.NODE_ENV === "development"
        ? {
            name: error.name,
            stack: error.stack,
          }
        : undefined,
    timestamp,
    path,
  };

  return reply.status(500).send(response);
}

// Middleware para capturar erros assíncronos não tratados
export function asyncErrorHandler(
  handler: (req: FastifyRequest, reply: FastifyReply) => Promise<any>
) {
  return async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      await handler(req, reply);
    } catch (error) {
      errorHandler(error as Error, req, reply);
    }
  };
}
