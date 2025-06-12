import { FastifyInstance } from 'fastify';
import {
  permissaoSchema,
  usuarioPermissaoSchema,
  idParamSchema,
  permissaoResponseSchema
} from '../schemas/permissoes.schema';
import {
  criarPermissao,
  atribuirPermissaoUsuario,
  listarPermissoes,
  buscarPermissoesPorUsuario
} from '../controllers/permissoes.controller';
import { autenticar } from '../middlewares/authMiddleware';

export default async function permissoesRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas
  app.addHook('onRequest', autenticar);

  app.post('/', {
    schema: {
      body: permissaoSchema,
      response: {
        201: {
          type: 'object',
          properties: {
            mensagem: { type: 'string' },
            data: permissaoResponseSchema
          }
        }
      }
    }
  }, criarPermissao);

  app.post('/atribuir', {
    schema: {
      body: usuarioPermissaoSchema,
      response: {
        200: {
          type: 'object',
          properties: {
            mensagem: { type: 'string' }
          }
        }
      }
    }
  }, atribuirPermissaoUsuario);

  app.get('/', {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            data: {
              type: 'array',
              items: permissaoResponseSchema
            }
          }
        }
      }
    }
  }, listarPermissoes);

  app.get('/usuario/:id', {
    schema: {
      params: idParamSchema,
      response: {
        200: {
          type: 'object',
          properties: {
            data: {
              type: 'array',
              items: permissaoResponseSchema
            }
          }
        }
      }
    }
  }, buscarPermissoesPorUsuario);
}
