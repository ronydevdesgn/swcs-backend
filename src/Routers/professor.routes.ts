import { FastifyInstance } from 'fastify';
import {
  createProfessorSchema,
  updateProfessorSchema,
  idParamSchema
} from '../schemas/professor.schema';
import {
  criarProfessor,
  listarProfessores,
  buscarProfessor,
  atualizarProfessor
} from '../controllers/professor.controller';
import { autenticar } from '../middlewares/authMiddleware';

export default async function professorRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas
  app.addHook('onRequest', autenticar);

  app.post('/', {
    schema: {
      body: createProfessorSchema,
    }
  }, criarProfessor);

  app.get('/', {}, listarProfessores);

  app.get('/:id', {
    schema: {
      params: idParamSchema,
    }
  }, buscarProfessor);

  app.put('/:id', {
    schema: {
      params: idParamSchema,
      body: updateProfessorSchema,
    }
  }, atualizarProfessor);
}
