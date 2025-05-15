import Fastify from 'fastify';
import dotenv from 'dotenv';
import prismaPlugin from './plugins/prisma';
import swagger from './plugins/swagger';
import authRoutes from './Routers/auth.routes';
import professorRoutes from './Routers/professor.routes.js';
import funcionarioRoutes from "./Routers/funcionario.routes.js";
import usuarioRoutes from './Routers/usuario.routes.js';
import permissoesRoutes from './Routers/permissoes.routes.js';
import cursosRoutes from './Routers/cursos.routes.js';
import sumariosRoutes from './Routers/sumarios.routes.js';
import presencasRoutes from './Routers/presencas.routes.js';
import efetividadesRoutes from './Routers/efetividades.routes.js';


dotenv.config()

export const app = Fastify({ logger: true })

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
    console.log(`Servidor está agora ouvindo a porta 3000`);
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