import { FastifyInstance } from 'fastify';
import { createSumarioSchema } from '../schemas/sumarios.schema.js';
import { autenticar } from '../middlewares/authMiddleware.js';
import { criarSumario, listarSumarios } from '../controllers/sumarios.controller.js';

export default async function sumariosRoutes(app: FastifyInstance) {
  app.addHook('onRequest', autenticar);

  app.post('/', { schema: { body: createSumarioSchema } }, criarSumario);
  app.get('/', listarSumarios);
}
