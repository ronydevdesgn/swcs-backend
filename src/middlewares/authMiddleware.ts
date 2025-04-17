import { FastifyRequest, FastifyReply } from 'fastify'
import { verificarToken } from '../utils/jwt'

export async function autenticar(req: FastifyRequest, reply: FastifyReply) {
  const authHeader = req.headers.authorization
  if (!authHeader) return reply.status(401).send({ error: 'Token não fornecido' })

  const [, token] = authHeader.split(' ')
  try {
    const payload = verificarToken(token)
    ;(req as any).usuario = payload
  } catch (e) {
    return reply.status(401).send({ error: 'Token inválido' })
  }
}