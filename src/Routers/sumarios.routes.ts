import { FastifyInstance } from 'fastify';
import { 
  createSumarioSchema, 
  updateSumarioSchema, 
  idParamSchema 
} from '../schemas/sumarios.schema';
import { autenticar } from '../middlewares/authMiddleware';
import { 
  criarSumario, 
  listarSumarios, 
  buscarSumario,
  atualizarSumario,
  deletarSumario 
} from '../controllers/sumarios.controller';

export default async function sumariosRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas
  app.addHook('onRequest', autenticar);

  // Rotas
  app.post('/', {
    schema: {
      body: createSumarioSchema,
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
  }, criarSumario);

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
  }, listarSumarios);

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
  }, buscarSumario);

  app.put('/:id', {
    schema: {
      params: idParamSchema,
      body: updateSumarioSchema,
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
  }, atualizarSumario);

  app.delete('/:id', {
    schema: {
      params: idParamSchema,
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
  }, deletarSumario);
}
