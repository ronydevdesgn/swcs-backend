import fp from "fastify-plugin";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";

export default fp(async function (fastify) {
  await fastify.register(swagger, {
    swagger: {
      info: {
        title: 'SWCS API Documentation',
        description: 'Sistema Web de Controlo de Sumários - API Documentation',
        version: '1.0.0',
        contact: {
          name: 'SWCS Team',
          email: 'support@swcs.com'
        }
      },
      host: 'localhost:3000',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
         { name: 'auth', description: 'Autenticação' },
        { name: 'usuarios', description: 'Autenticação' },
        { name: 'professores', description: 'Autenticação' },
        { name: 'funcionarios', description: 'Autenticação' },
        { name: 'permissoes', description: 'Autenticação' },
        { name: 'cursos', description: 'Autenticação' },
        { name: 'sumarios', description: 'Autenticação' },
        { name: 'presencas', description: 'Autenticação' },
        { name: 'efetividades', description: 'Autenticação' }
      ],
      securityDefinitions: {
        bearerAuth: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'header'
        }
      }
    }
  });

  await fastify.register(swaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: true,
      displayRequestDuration: true
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject) => {
      return swaggerObject;
    },
    transformSpecificationClone: true
  });

  // Custom error handling for swagger
  fastify.setErrorHandler((error, request, reply) => {
    const statusCode = error.validation ? 400 : 500;
    reply.status(statusCode).send({
      error: statusCode === 400 ? 'Validation Error' : 'Internal Server Error',
      message: error.message,
      validation: error.validation
    });
  });
}, { name: 'swagger' });