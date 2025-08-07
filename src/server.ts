import Fastify from "fastify";
import dotenv from "dotenv";
import swagger from "./plugins/swagger";
import prismaPlugin from "./plugins/prisma";
import cors from "@fastify/cors";
import {
  validatorCompiler,
  serializerCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";

import authRoutes from "./Routers/auth.routes";
import professorRoutes from "./Routers/professor.routes";
import funcionarioRoutes from "./Routers/funcionario.routes";
import usuarioRoutes from "./Routers/usuario.routes";
import permissoesRoutes from "./Routers/permissoes.routes";
import cursosRoutes from "./Routers/cursos.routes";
import sumariosRoutes from "./Routers/sumarios.routes";
import presencasRoutes from "./Routers/presencas.routes";
import efetividadesRoutes from "./Routers/efetividades.routes";

dotenv.config();

export const app = Fastify({ logger: true })
  // adiciona os compilers do Zod
  .setValidatorCompiler(validatorCompiler)
  .setSerializerCompiler(serializerCompiler)
  // habilita o TypeProvider que faz converter Zod→JSONSchema
  .withTypeProvider<ZodTypeProvider>();

// ROTA PADRÃO
app.get("/", async (request, reply) => {
  return {
    message: "SWCS BACKEND API IS RUNNING",
    status: "server running",
    docs: "/docs",
    version: "1.0.1",
    endpoints: {
      auth: "/auth",
      professores: "/professores",
      funcionarios: "/funcionarios",
      usuarios: "/usuarios",
      permissoes: "/permissoes",
      cursos: "/cursos",
      sumarios: "/sumarios",
      presencas: "/presencas",
      efetividades: "/efetividades",
    },
  };
});

app.register(prismaPlugin);
app.register(swagger);
app.register(authRoutes, { prefix: "/auth" });
app.register(professorRoutes, { prefix: "/professores" });
app.register(funcionarioRoutes, { prefix: "/funcionarios" });
app.register(usuarioRoutes, { prefix: "/usuarios" });
app.register(permissoesRoutes, { prefix: "/permissoes" });
app.register(cursosRoutes, { prefix: "/cursos" });
app.register(sumariosRoutes, { prefix: "/sumarios" });
app.register(presencasRoutes, { prefix: "/presencas" });
app.register(efetividadesRoutes, { prefix: "/efetividades" });

// Register plugins
app.register(cors, {
  origin: ["http://localhost:5173", "http://localhost:3333"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

/** Tratamento de erros 404 do Fastify
 Isso é necessário para que o Fastify retorne um erro 404 personalizado
 quando uma rota não for encontrada.
*/
app.setNotFoundHandler((request, reply) => {
  reply.status(404).send({
    statusCode: 404,
    error: "Not Found",
    message: `Rota ${request.method} ${request.url} não encontrada`,
  });
});

app.setErrorHandler((error, request, reply) => {
  app.log.error(error);
  const statusCode = error.validation ? 400 : error.statusCode || 500;
  const errorResponse = {
    statusCode,
    error: error.validation ? "Validation Error" : error.name,
    message: error.message || "Erro interno do servidor",
    validation: error.validation,
  };
  reply.status(statusCode).send(errorResponse);
});

// Só inicia o servidor se for chamado diretamente (não em testes)
const isMainModule = process.argv[1] && process.argv[1].endsWith("server.ts");
if (isMainModule) {
  const start = async () => {
    try {
      await app.listen({
        port: 3333,
        host: "0.0.0.0", // Permite conexões de qualquer IP
      });

      console.log(`Servidor está agora ouvindo na rota http://localhost:3333`);
      console.log(
        `Documentação Swagger disponível em http://localhost:3333/docs`
      );
    } catch (err) {
      app.log.error(err);
      console.error("Erro ao iniciar o servidor:", err);

      if (err instanceof Error) {
        console.error("Mensagem de erro:", err.message);
        console.error("Stack trace:", err.stack);
      } else {
        console.error("Erro desconhecido:", err);
      }

      await app.close();
      process.exit(1);
    }
  };
  start();
}

export default app;
