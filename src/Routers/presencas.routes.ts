import { FastifyInstance } from 'fastify';
import { createPresencaSchema } from '../schemas/presencas.schema.js';
import { autenticar } from '../middlewares/authMiddleware.js';
import { criarPresenca, listarPresencas } from '../controllers/presencas.controller.js';

export default async function presencasRoutes(app: FastifyInstance) {
  app.addHook('onRequest', autenticar);

  app.post('/', { schema: { body: createPresencaSchema } }, criarPresenca);
  app.get('/', listarPresencas);
}
// Compare(ração) este trecho de src/controllers/presencas.controller.ts:
// #src\Routers\turmas.routes.ts(app: FastifyInstance) {
//   app.addHook('onRequest', autenticar);

//   app.post('/', { schema: { body: createTurmaSchema } }, criarTurma);
//   app.get('/', listarTurmas);
//   app.get('/:id', getTurmaById);
//   app.put('/:id', { schema: { body: createTurmaSchema } }, atualizarTurma);
//   app.delete('/:id', deletarTurma);
// }
