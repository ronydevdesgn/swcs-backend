import { FastifyReply, FastifyRequest } from "fastify"
import { AppError } from "../types/errors"


export function errorHandler(error: Error, request: FastifyRequest, reply: FastifyReply) {
  if (error instanceof AppError) {
    return reply.status(error.statusCode).send({
      status: 'error',
      message: error.message,
      code: error.code
    })
  }

  // Prisma error handling
  if (error.name === 'PrismaClientKnownRequestError') {
    return reply.status(400).send({
      status: 'error',
      message: 'Database constraint violation'
    })
  }

  // Erro padrão para outros erros
  request.log.error(error)
  return reply.status(500).send({
    status: 'error',
    message: 'Internal server error'
  })
}