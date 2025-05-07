import { FastifyInstance } from 'fastify';
import { createCursoSchema } from '../schemas/cursos.schema.js';
import { autenticar } from '../middlewares/authMiddleware.js';
import { criarCurso, listarCursos } from '../controllers/cursos.controller.js';

export default async function cursosRoutes(app: FastifyInstance) {
  app.addHook('onRequest', autenticar);

  app.post('/', { schema: { body: createCursoSchema } }, criarCurso);
  app.get('/', listarCursos);
}
