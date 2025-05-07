import { FastifyInstance } from 'fastify';
import { autenticar } from '../middlewares/authMiddleware.js';
import {
  criarProfessor,
  listarProfessores,
  atualizarProfessor,
  deletarProfessor
} from '../controllers/professor.controller.js';
import { createProfessorSchema, updateProfessorSchema } from '../schemas/professor.schema.js';

export default async function professorRoutes(app: FastifyInstance) {
  app.addHook('onRequest', autenticar);

  app.post('/', { schema: { body: createProfessorSchema } }, criarProfessor);
  app.get('/', listarProfessores);
  app.put('/:id', { schema: { body: updateProfessorSchema } }, atualizarProfessor);
  app.delete('/:id', deletarProfessor);
}
