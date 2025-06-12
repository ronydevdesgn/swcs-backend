import { FastifyInstance } from 'fastify';
import {
  createCursoSchema,
  updateCursoSchema,
  idParamSchema
} from '../schemas/cursos.schema';
import {
  criarCurso,
  listarCursos,
  buscarCurso,
  atualizarCurso
} from '../controllers/cursos.controller';
import { autenticar } from '../middlewares/authMiddleware';

export default async function cursoRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas
  app.addHook('onRequest', autenticar);

  app.post('/', {
    schema: {
      body: createCursoSchema,
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
  }, criarCurso);

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
  }, listarCursos);

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
  }, buscarCurso);

  app.put('/:id', {
    schema: {
      params: idParamSchema,
      body: updateCursoSchema,
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
  }, atualizarCurso);
}
