import { FastifyRequest, FastifyReply } from 'fastify';
import { createUsuarioSchema, updateUsuarioSchema } from '../schemas/usuario.schema.js';
import { hashSenha } from '../utils/hash.js';

export async function criarUsuario(req: FastifyRequest, reply: FastifyReply) {
  const prisma = req.server.prisma;
  const data = createUsuarioSchema.parse(req.body);
  const SenhaHash = await hashSenha(data.Senha);
  const usuario = await prisma.usuario.create({
    data: { ...data, SenhaHash, Senha: undefined }
  });
  return reply.status(201).send(usuario);
}

export async function listarUsuarios(req: FastifyRequest, reply: FastifyReply) {
  const prisma = req.server.prisma;
  const usuarios = await prisma.usuario.findMany({ include: { permissoes: true } });
  return reply.send(usuarios);
}

export async function atualizarUsuario(req: FastifyRequest, reply: FastifyReply) {
  const prisma = req.server.prisma;
  const id = Number((req.params as any).id);
  const data = updateUsuarioSchema.parse(req.body);
  const SenhaHash = data.Senha ? await hashSenha(data.Senha) : undefined;
  const usuario = await prisma.usuario.update({
    where: { UsuarioID: id },
    data: { ...data, SenhaHash }
  });
  return reply.send(usuario);
}

export async function deletarUsuario(req: FastifyRequest, reply: FastifyReply) {
  const prisma = req.server.prisma;
  const id = Number((req.params as any).id);
  await prisma.usuario.delete({ where: { UsuarioID: id } });
  return reply.status(204).send();
}