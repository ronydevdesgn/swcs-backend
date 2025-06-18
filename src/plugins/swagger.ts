import fp from "fastify-plugin";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";

export default fp(
  async function (fastify) {
    await fastify.register(swagger, {
      openapi: {
        openapi: "3.1.0",
        info: {
          title: "SWCS API Documentation",
          description: "Sistema Web de Controlo de Sumários - API Documentation",
          version: "1.0.1",
          contact: {
            name: "SWCS Team",
            email: "support@swcs.com",
          },
        },
        servers: [
          {
            url: "http://localhost:3000",
            description: "Servidor de desenvolvimento",
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
        security: [
          {
            bearerAuth: [],
          },
        ],
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
      transformStaticCSP: (header) => header,
      transformSpecification: (swaggerObject, request, reply) => {
        return swaggerObject;
      },
      transformSpecificationClone: true,
    });

    // Tratamento de erros customizado
    fastify.setErrorHandler((error, request, reply) => {
      fastify.log.error(error);
      
      if (error.validation) {
        return reply.status(400).send({
          error: "Erro de Validação",
          message: error.message,
          validation: error.validation,
        });
      }

      if (error.statusCode) {
        return reply.status(error.statusCode).send({
          error: error.name || "Erro",
          message: error.message,
        });
      }

      return reply.status(500).send({
        error: "Erro Interno do Servidor",
        message: "Ocorreu um erro inesperado",
      });
    });
  },
  { 
    name: "swagger",
    dependencies: [],
  }
);