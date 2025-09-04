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
    }
  }, criarSumario);

  app.get('/', {}, listarSumarios);

  app.get('/:id', {
    schema: {
      params: idParamSchema,
    }
  }, buscarSumario);

  app.put('/:id', {
    schema: {
      params: idParamSchema,
      body: updateSumarioSchema,
      
    }
  }, atualizarSumario);

  app.delete('/:id', {
    schema: {
      params: idParamSchema,
    }
  }, deletarSumario);
}
