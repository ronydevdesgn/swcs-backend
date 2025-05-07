import { FastifyInstance } from 'fastify';
import { createPermissaoSchema } from '../schemas/permissoes.schema.js';
import { autenticar } from '../middlewares/authMiddleware.js';
import { criarPermissao, listarPermissoes } from '../controllers/permissoes.controller.js';

export default async function permissoesRoutes(app: FastifyInstance) {
  app.addHook('onRequest', autenticar);

  app.post('/', { schema: { body: createPermissaoSchema } }, criarPermissao);
  app.get('/', listarPermissoes);
}
