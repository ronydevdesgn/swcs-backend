import Fastify from 'fastify';
import dotenv from 'dotenv';
import prismaPlugin from './plugins/prisma';
import swagger from './plugins/swagger';
import authRoutes from './routers/auth.routes';
import professorRoutes from './routers/professor.routes';
import funcionarioRoutes from "./routers/funcionario.routes";
import usuarioRoutes from './routers/usuario.routes';
import permissoesRoutes from './routers/permissoes.routes';
import cursosRoutes from './routers/cursos.routes';
import sumariosRoutes from './routers/sumarios.routes';
import presencasRoutes from './routers/presencas.routes';
import efetividadesRoutes from './routers/efetividades.routes';


dotenv.config()

const app = Fastify({ logger: true })

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
    await app.listen({ port: 3306 })
  } catch (err) {
    app.log.error(err)
    console.log(`Servidor está agora ouvindo a porta 3306`);
    process.exit(1)
  }
}

start()

// old script
// Declaração de rota
// app.get("/", (request, reply) => {
//   reply.send({ hello: "world" });
// });

// // Tudo OK! servidor ligado...!
// app.listen({ port: 3000 }, (err, address) => {
//   if (err) throw err;
//   console.log(`Servidor está agora ouvindo a porta 3000`);
// });