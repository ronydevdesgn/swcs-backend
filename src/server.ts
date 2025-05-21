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

const start = async () => {
  try {
    await app.listen({ port: 3000 })
  } catch (err) {
    app.log.error(err)
    console.log(`Servidor está agora ouvindo a rota http://localhost:3000`)
    console.log(`Swagger docs está disponível na rota http://localhost:3000/docs`)
    // Se o servidor não conseguir iniciar, exibe o erro e encerra o processo
    process.exit(1)
  }
}

start();

export default app;