import { FastifyInstance } from 'fastify';
import { createUsuarioSchema, updateUsuarioSchema } from '../schemas/usuario.schema.js';
import { autenticar } from '../middlewares/authMiddleware.js';
import { criarUsuario, listarUsuarios, atualizarUsuario, deletarUsuario } from '../controllers/usuario.controller.js';

export default async function usuarioRoutes(app: FastifyInstance) {
  app.addHook('onRequest', autenticar);

  app.post('/', { schema: { body: createUsuarioSchema } }, criarUsuario);
  app.get('/', listarUsuarios);
  app.put('/:id', { schema: { body: updateUsuarioSchema } }, atualizarUsuario);
  app.delete('/:id', deletarUsuario);
}
