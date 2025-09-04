import Fastify from "fastify";
import dotenv from "dotenv";
import swaggerPlugin from "./plugins/swagger";
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

export const app = Fastify({ 
  logger: true,
  
  ajv: {
    customOptions: {
      removeAdditional: "all",
      coerceTypes: true,
      useDefaults: true,
    }
  }
})
  // habilita o TypeProvider que faz converter Zod→JSONSchema
  .withTypeProvider<ZodTypeProvider>();

// adiciona os compilers do Zod sempre (requerido para schemas Zod nas rotas)
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

// Normalização de payloads (aceita campos em caixa baixa vindos dos testes)
app.addHook("preValidation", async (req) => {
  const body = req.body as any;
  if (body && typeof body === "object" && !Array.isArray(body)) {
    const mapping: Record<string, string> = {
      email: "Email",
      senha: "Senha",
      nome: "Nome",
      tipo: "Tipo",
      descricao: "Descricao",
      cargo: "Cargo",
      data: "Data",
      conteudo: "Conteudo",
      horasTrabalhadas: "HorasTrabalhadas",
      professorID: "ProfessorID",
      cursoID: "CursoID",
      estado: "Estado",
    };
    for (const [key, val] of Object.entries(mapping)) {
      if (body[key] !== undefined && body[val] === undefined) {
        body[val] = body[key];
      }
    }
    req.body = body;
  }
});

// Habilita/Desabilita Swagger conforme ambiente (desabilitado por padrão)
const enableSwagger = process.env.SWAGGER_ENABLED === "true";

// ROTA PADRÃO
app.get("/", async (request, reply) => {
  const base = {
    message: "SWCS BACKEND API IS RUNNING",
    status: "server running",
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
  } as Record<string, unknown>;

  if (enableSwagger) {
    base.docs = "/docs";
  }

  return base;
});

// Register plugins in correct order
await app.register(prismaPlugin);

await app.register(cors, {
  origin: ["http://localhost:5173", "http://localhost:3333"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

// Register routes BEFORE Swagger so it can capture the schemas
await app.register(authRoutes, { prefix: "/auth" });
await app.register(professorRoutes, { prefix: "/professores" });
await app.register(funcionarioRoutes, { prefix: "/funcionarios" });
await app.register(usuarioRoutes, { prefix: "/usuarios" });
await app.register(permissoesRoutes, { prefix: "/permissoes" });
await app.register(cursosRoutes, { prefix: "/cursos" });
await app.register(sumariosRoutes, { prefix: "/sumarios" });
await app.register(presencasRoutes, { prefix: "/presencas" });
await app.register(efetividadesRoutes, { prefix: "/efetividades" });

// Register Swagger AFTER all routes are registered
if (enableSwagger) {
  try {
    await app.register(swaggerPlugin);
    app.log.info("Swagger plugin registered successfully");
  } catch (error) {
    app.log.error("Failed to register Swagger plugin:", error);
  }
} else {
  app.log.info("Swagger disabled by configuration");
}

// Tratamento de erros 404 do Fastify
app.setNotFoundHandler((request, reply) => {
  reply.status(404).send({
    statusCode: 404,
    error: "Not Found",
    message: `Rota ${request.method} ${request.url} não encontrada`,
  });
});

// Error handler melhorado
app.setErrorHandler((error, request, reply) => {
  app.log.error(error);
  
  // Se for erro de validação Zod
  if (error.validation) {
    return reply.status(400).send({
      statusCode: 400,
      error: "Validation Error",
      message: "Dados de entrada inválidos",
      details: error.validation,
    });
  }

  // Se for erro customizado com statusCode
  if (error.statusCode) {
    return reply.status(error.statusCode).send({
      statusCode: error.statusCode,
      error: error.name || "Error",
      message: error.message,
    });
  }

  // Erro interno do servidor
  reply.status(500).send({
    statusCode: 500,
    error: "Internal Server Error",
    message: "Erro interno do servidor",
  });
});

// Função para iniciar o servidor
const start = async () => {
  try {
    await app.ready(); // Aguarda todos os plugins serem carregados
    
    await app.listen({
      port: 3333,
      host: "0.0.0.0",
    });

    console.log(`Servidor está agora ouvindo na rota http://localhost:3333`);
    
    if (enableSwagger) {
      console.log(`Documentação Swagger disponível em http://localhost:3333/docs`);
    }
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

// Só inicia o servidor se for chamado diretamente (não em testes)
const isMainModule = process.argv[1] && process.argv[1].endsWith("server.ts");
if (isMainModule) {
  start();
}

export default app;