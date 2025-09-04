import fp from "fastify-plugin";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";

export default fp(
  async function (fastify) {
    await fastify.register(swagger, {
      openapi: {
        openapi: "3.0.0",
        info: {
          title: "SWCS API Documentation",
          description:
            "Sistema Web de Controlo de Sumários - API Documentation",
          version: "1.0.1",
          contact: {
            name: "SWCS Developer",
            email: "ronydevdesgn@gmail.com",
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
      },
    });

    await fastify.register(swaggerUi, {
      routePrefix: "/docs",
      uiConfig: {
        docExpansion: "list",
        deepLinking: true,
        displayRequestDuration: true,
        tryItOutEnabled: true,
      },
      staticCSP: true,
      transformStaticCSP: (header) => header,
    });
  },
  {
    name: "swagger",
    // Aguarda o Prisma ser carregado primeiro
    dependencies: ["prisma"],
  }
);
