import { FastifyReply, FastifyRequest } from 'fastify';
import { loginSchema } from '../schemas/auth.schema.js';
import { compararSenha } from '../utils/hash.js';
import { gerarToken } from '../utils/jwt.js';


export async function loginHandler(req: FastifyRequest, reply: FastifyReply) {
  const prisma = req.server.prisma;
  const { email, senha } = loginSchema.parse(req.body);

  const usuario = await prisma.usuario.findUnique({ where: { Email: email } });
  if (!usuario || !(await compararSenha(senha, usuario.SenhaHash))) {
    return reply.status(401).send({ message: 'Credenciais inválidas' });
  }

  const token = gerarToken({ id: usuario.UsuarioID, tipo: usuario.Tipo });
  return reply.send({ token });
}
