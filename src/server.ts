import Fastify from 'fastify';
import dotenv from 'dotenv';
import swagger from './plugins/swagger';
import prismaPlugin from './plugins/prisma';
// import do type-provider-zod
import {
  validatorCompiler,
  serializerCompiler,
  ZodTypeProvider
} from 'fastify-type-provider-zod';

import authRoutes from './Routers/auth.routes';
import professorRoutes from './Routers/professor.routes';
import funcionarioRoutes from "./Routers/funcionario.routes";
import usuarioRoutes from './Routers/usuario.routes';
import permissoesRoutes from './Routers/permissoes.routes';
import cursosRoutes from './Routers/cursos.routes';
import sumariosRoutes from './Routers/sumarios.routes';
import presencasRoutes from './Routers/presencas.routes';
import efetividadesRoutes from './Routers/efetividades.routes';


dotenv.config()

export const app = Fastify({ logger: true })
  // adiciona os compilers do Zod
  .setValidatorCompiler(validatorCompiler)
  .setSerializerCompiler(serializerCompiler)
  // habilita o TypeProvider que faz converter Zod→JSONSchema
  .withTypeProvider<ZodTypeProvider>();

// ROTA PADRÃO
app.get('/', async (request, reply) => {
  return { 
    message: 'SWCS BACKEND API IS RUNNING',
    status: 'server running',
    docs: '/docs',
    version: '1.0.1',
    endpoints: {
      auth: '/auth',
      professores: '/professores',
      funcionarios: '/funcionarios',
      usuarios: '/usuarios',
      permissoes: '/permissoes',
      cursos: '/cursos',
      sumarios: '/sumarios',
      presencas: '/presencas',
      efetividades: '/efetividades'
    }
  }
})

app.register(prismaPlugin)
app.register(swagger)
app.register(authRoutes, { prefix: '/auth' })
app.register(professorRoutes, { prefix: '/professores' })
app.register(funcionarioRoutes, { prefix: '/funcionarios' })
app.register(usuarioRoutes, { prefix: '/usuarios' })
app.register(permissoesRoutes, { prefix: '/permissoes' })
app.register(cursosRoutes, { prefix: '/cursos' })
app.register(sumariosRoutes, { prefix: '/sumarios' })
app.register(presencasRoutes, { prefix: '/presencas' })
app.register(efetividadesRoutes, { prefix: '/efetividades' })

/** Configuração do CORS */
app.addHook('onRequest', (request, reply, done) => {
  reply.header('Access-Control-Allow-Origin', 'http://localhost:5173') // Removido a barra final
  reply.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  reply.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  done()
})

/** Tratamento de erros 404 do Fastify
 Isso é necessário para que o Fastify retorne um erro 404 personalizado
 quando uma rota não for encontrada.
*/
app.setNotFoundHandler((request, reply) => {
  reply.status(404).send({
    statusCode: 404,
    error: 'Not Found',
    message: `Rota ${request.method} ${request.url} não encontrada`,
  });
});

app.setErrorHandler((error, request, reply) => {
  app.log.error(error);
  reply.status(error.statusCode || 500).send({
    statusCode: error.statusCode || 500,
    error: error.name,
    message: error.message || 'Erro interno do servidor',
  });
});

const start = async () => {
  try {
    await app.listen({ 
      port: 3000,
      host: '0.0.0.0' // Permite conexões de qualquer IP
    })
    
    console.log(`Servidor está agora ouvindo na rota http://localhost:3000`)
    console.log(`Documentação Swagger disponível em http://localhost:3000/docs`)
    
  } catch (err) {
    app.log.error(err)
    console.error('Erro ao iniciar o servidor:', err)
    
    if (err instanceof Error) {
      console.error('Mensagem de erro:', err.message)
      console.error('Stack trace:', err.stack)
    } else {
      console.error('Erro desconhecido:', err)
    }

    await app.close() // Aguarda o fechamento do servidor
    process.exit(1)
  }
}

start()

export default app;