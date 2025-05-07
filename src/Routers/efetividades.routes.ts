import { FastifyInstance } from 'fastify';
import { createEfetividadeSchema } from '../schemas/efetividades.schema.js';
import { autenticar } from '../middlewares/authMiddleware.js';
import { criarEfetividade, listarEfetividades } from '../controllers/efetividades.controller.js';

export default async function efetividadesRoutes(app: FastifyInstance) {
  app.addHook('onRequest', autenticar);

  app.post('/', { schema: { body: createEfetividadeSchema } }, criarEfetividade);
  app.get('/', listarEfetividades);
}
