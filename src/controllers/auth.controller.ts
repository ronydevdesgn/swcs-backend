import { FastifyReply, FastifyRequest } from 'fastify'
import { loginSchema } from '../schemas/auth.schema.js'
import { compararSenha } from '../utils/hash.js'
import { gerarToken } from '../utils/jwt.js'

export async function loginHandler(request: FastifyRequest, reply: FastifyReply) {
  const { email, senha } = loginSchema.parse(request.body)

  const usuario = await request.server.prisma.usuario.findUnique({ where: { Email: email } })

  if (!usuario || !(await compararSenha(senha, usuario.SenhaHash))) {
    return reply.status(401).send({ mensagem: 'Credenciais inválidas' })
  }

  const token = gerarToken({ sub: usuario.UsuarioID, tipo: usuario.Tipo })

  return reply.send({ token })
}