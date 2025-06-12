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
      response: {
        201: {
          type: 'object',
          properties: {
            mensagem: { type: 'string' },
            data: { type: 'object' }
          }
        }
      }
    }
  }, criarProfessor);

  app.get('/', {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            data: {
              type: 'array',
              items: { type: 'object' }
            }
          }
        }
      }
    }
  }, listarProfessores);

  app.get('/:id', {
    schema: {
      params: idParamSchema,
      response: {
        200: {
          type: 'object',
          properties: {
            data: { type: 'object' }
          }
        }
      }
    }
  }, buscarProfessor);

  app.put('/:id', {
    schema: {
      params: idParamSchema,
      body: updateProfessorSchema,
      response: {
        200: {
          type: 'object',
          properties: {
            mensagem: { type: 'string' },
            data: { type: 'object' }
          }
        }
      }
    }
  }, atualizarProfessor);
}
