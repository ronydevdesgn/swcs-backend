import { FastifyInstance } from 'fastify';
import {
  updateUsuarioSchema,
  updateSenhaSchema,
  idParamSchema
} from '../schemas/usuario.schema';
import {
  listarUsuarios,
  buscarUsuario,
  atualizarUsuario,
  atualizarSenha
} from '../controllers/usuario.controller';
import { autenticar } from '../middlewares/authMiddleware';

export default async function usuarioRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas
  app.addHook('onRequest', autenticar);

  app.get('/', {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            data: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  UsuarioID: { type: 'number' },
                  Nome: { type: 'string' },
                  Email: { type: 'string' },
                  Tipo: { type: 'string' },
                  Permissoes: { 
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        Permissao: {
                          type: 'object',
                          properties: {
                            Descricao: { type: 'string' }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }, listarUsuarios);

  app.get('/:id', {
    schema: {
      params: idParamSchema,
      response: {
        200: {
          type: 'object',
          properties: {
            data: {
              type: 'object',
              properties: {
                UsuarioID: { type: 'number' },
                Nome: { type: 'string' },
                Email: { type: 'string' },
                Tipo: { type: 'string' }
              }
            }
          }
        }
      }
    }
  }, buscarUsuario);

  app.put('/:id', {
    schema: {
      params: idParamSchema,
      body: updateUsuarioSchema,
      response: {
        200: {
          type: 'object',
          properties: {
            mensagem: { type: 'string' },
            data: {
              type: 'object',
              properties: {
                UsuarioID: { type: 'number' },
                Nome: { type: 'string' },
                Email: { type: 'string' },
                Tipo: { type: 'string' }
              }
            }
          }
        }
      }
    }
  }, atualizarUsuario);

  app.put('/:id/senha', {
    schema: {
      params: idParamSchema,
      body: updateSenhaSchema,
      response: {
        200: {
          type: 'object',
          properties: {
            mensagem: { type: 'string' }
          }
        }
      }
    }
  }, atualizarSenha);
}
