import { FastifyRequest, FastifyReply } from 'fastify';
import { 
  createUsuarioSchema, 
  updateUsuarioSchema, 
  deleteUsuarioSchema, 
  getUsuarioSchema
} from '../schemas/usuario.schema';
import { hashSenha } from '../utils/hash';

export async function criarUsuario(
  req: FastifyRequest, 
  reply: FastifyReply
) {
  const prisma = req.server.prisma;
  const data = createUsuarioSchema.parse(req.body);
  const SenhaHash = await hashSenha(data.Senha);
  const { Senha, Tipo, ...restData } = data; // Destructuring to remove Senha and Tipo from data
  const usuario = await prisma.usuario.create({
    data: { 
      ...restData,
      SenhaHash,
      Tipo: Tipo.toUpperCase() as "Professor" | "Sumarista" // Restoring Tipo to ensure correct user Type
    }
  });
  return reply.status(201).send(usuario);
}

export async function listarUsuarios(
  req: FastifyRequest, 
  reply: FastifyReply
) {
  const prisma = req.server.prisma;
  const data = getUsuarioSchema.parse(req.query); // Uncommented to parse query
  const usuarios = await prisma.usuario.findMany({ 
    include: { Permissoes: true },
    where: { Tipo: data.Tipo }
  });
  return reply.send(usuarios);
}

export async function atualizarUsuario(
  req: FastifyRequest, 
  reply: FastifyReply
) {
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

export async function deletarUsuario(
  req: FastifyRequest, 
  reply: FastifyReply
) {
  const prisma = req.server.prisma;
  const data = deleteUsuarioSchema.parse(req.body);
  const id = Number((req.params as any).id);
  const usuario = await prisma.usuario.findUnique({ where: { UsuarioID: id } });
  if (!usuario) {
    return reply.status(404).send({ message: 'Usuário não encontrado' });
  }


  console.log(`Deleting user with ID: ${id}`);
  
  await prisma.usuario.delete({ where: { UsuarioID: id } });
  return reply.status(204).send();
}