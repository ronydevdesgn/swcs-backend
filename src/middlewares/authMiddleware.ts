import { FastifyRequest, FastifyReply } from 'fastify'
import { verificarToken } from '../utils/jwt'

export async function autenticar(req: FastifyRequest, reply: FastifyReply) {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader) {
      return reply.status(401).send({ error: 'Token não fornecido' })
    }

    const [, token] = authHeader.split(' ')
    const payload = verificarToken(token)
    req.user = payload // TypeScript type augmentation needed

    // Add role checking
    const userPermissions = await req.server.prisma.usuarioPermissao.findMany({
      where: { UsuarioID: payload.id },
      include: { Permissao: true }
    })
    req.user.permissions = userPermissions.map(p => p.Permissao.Descricao)

  } catch (e) {
    return reply.status(401).send({ error: 'Token inválido' })
  }
}