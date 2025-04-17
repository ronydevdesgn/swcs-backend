import { FastifyInstance } from 'fastify'
import { loginHandler } from '../controllers/auth.controller'

export default async function authRoutes(fastify: FastifyInstance) {
  fastify.post('/login', loginHandler)
}