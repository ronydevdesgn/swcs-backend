import { FastifyInstance } from 'fastify';
import {
  efetividadeSchema,
  periodoSchema,
  idParamSchema
} from '../schemas/efetividades.schema';
import {
  registrarEfetividade,
  buscarEfetividadesPorPeriodo,
  buscarEfetividadesProfessor
} from '../controllers/efetividades.controller';
import { autenticar } from '../middlewares/authMiddleware';

export default async function efetividadesRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas
  app.addHook('onRequest', autenticar);

  app.post('/', {
    schema: {
      body: efetividadeSchema,
      response: {
        201: {
          type: 'object',
          properties: {
            mensagem: { type: 'string' },
            data: {
              type: 'object',
              properties: {
                EfetividadeID: { type: 'number' },
                Data: { type: 'string', format: 'date-time' },
                HorasTrabalhadas: { type: 'number' },
                ProfessorID: { type: 'number' },
                Professor: {
                  type: 'object',
                  properties: {
                    Nome: { type: 'string' },
                    Departamento: { type: 'string' },
                    CargaHoraria: { type: 'number' }
                  }
                }
              }
            }
          }
        }
      }
    }
  }, registrarEfetividade);

  app.get('/periodo', {
    schema: {
      querystring: periodoSchema,
      response: {
        200: {
          type: 'object',
          properties: {
            data: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  EfetividadeID: { type: 'number' },
                  Data: { type: 'string', format: 'date-time' },
                  HorasTrabalhadas: { type: 'number' },
                  ProfessorID: { type: 'number' }
                }
              }
            }
          }
        }
      }
    }
  }, buscarEfetividadesPorPeriodo);

  app.get('/professor/:id', {
    schema: {
      params: idParamSchema,
      response: {
        200: {
          type: 'object',
          properties: {
            data: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  EfetividadeID: { type: 'number' },
                  Data: { type: 'string', format: 'date-time' },
                  HorasTrabalhadas: { type: 'number' },
                  ProfessorID: { type: 'number' }
                }
              }
            }
          }
        }
      }
    }
  }, buscarEfetividadesProfessor);
}
