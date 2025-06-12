import { FastifyInstance } from 'fastify';
import {
  presencaSchema,
  updatePresencaSchema,
  idParamSchema,
  presencaResponseSchema
} from '../schemas/presencas.schema';
import {
  registrarPresenca,
  listarPresencas,
  buscarPresencasProfessor,
  atualizarPresenca
} from '../controllers/presencas.controller';
import { autenticar } from '../middlewares/authMiddleware';

export default async function presencasRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas
  app.addHook('onRequest', autenticar);

  app.post('/', {
    schema: {
      body: presencaSchema,
      response: {
        201: {
          type: 'object',
          properties: {
            mensagem: { type: 'string' },
            data: presencaResponseSchema
          }
        }
      }
    }
  }, registrarPresenca);

  app.get('/', {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            data: {
              type: 'array',
              items: presencaResponseSchema
            }
          }
        }
      }
    }
  }, listarPresencas);

  app.get('/professor/:id', {
    schema: {
      params: idParamSchema,
      response: {
        200: {
          type: 'object',
          properties: {
            data: {
              type: 'array',
              items: presencaResponseSchema
            }
          }
        }
      }
    }
  }, buscarPresencasProfessor);

  app.put('/:id', {
    schema: {
      params: idParamSchema,
      body: updatePresencaSchema,
      response: {
        200: {
          type: 'object',
          properties: {
            mensagem: { type: 'string' },
            data: presencaResponseSchema
          }
        }
      }
    }
  }, atualizarPresenca);
}
