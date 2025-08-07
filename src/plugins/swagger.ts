import fp from "fastify-plugin";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";

export default fp(
  async function (fastify) {
    await fastify.register(swagger, {
      mode: "dynamic",
      openapi: {
        openapi: "3.0.0",
        info: {
          title: "SWCS API Documentation",
          description:
            "Sistema Web de Controlo de Sumários - API Documentation",
          version: "1.0.1",
          contact: {
            name: "SWCS Team",
            email: "support@swcs.com",
          },
        },
        servers: [
          {
            url: "http://localhost:3333",
            description: "Servidor de desenvolvimento (back-end)",
          },
        ],
        tags: [
          { name: "auth", description: "Autenticação" },
          { name: "usuarios", description: "Gestão de usuários" },
          { name: "professores", description: "Gestão de professores" },
          { name: "funcionarios", description: "Gestão de funcionários" },
          { name: "permissoes", description: "Gestão de permissões" },
          { name: "cursos", description: "Gestão de cursos" },
          { name: "sumarios", description: "Gestão de sumários" },
          { name: "presencas", description: "Gestão de presenças" },
          { name: "efetividades", description: "Gestão de efetividades" },
        ],
        components: {
          securitySchemes: {
            bearerAuth: {
              type: "http",
              scheme: "bearer",
              bearerFormat: "JWT",
            },
          },
        },
        // Configuração global para não exigir autenticação em todas as rotas
        security: [],
      },
    });

    await fastify.register(swaggerUi, {
      routePrefix: "/docs",
      uiConfig: {
        docExpansion: "list",
        deepLinking: true,
        displayRequestDuration: true,
      },
      staticCSP: true,
    });
  },

  {
    name: "swagger",
    dependencies: [],
  }
);
