import fp from 'fastify-plugin';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';

export default fp(async function (fastify) {
  await fastify.register(swagger, {
    openapi: {
      openapi: '3.0.0',
      info: {
        title: 'SWCS API Documentation',
        description: 'Sistema Web de Controlo de Sumários - API Documentation',
        version: '1.0.0',
        contact: {
          name: 'SWCS Team',
          email: 'support@swcs.com'
        }
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Development server'
        }
      ],
      tags: [
        { name: 'auth', description: 'Autenticação e gerenciamento de tokens' },
        { name: 'usuarios', description: 'Gerenciamento de usuários do sistema' },
        { name: 'professores', description: 'Gerenciamento de professores' },
        { name: 'funcionarios', description: 'Gerenciamento de funcionários' },
        { name: 'permissoes', description: 'Controle de permissões de acesso' },
        { name: 'cursos', description: 'Gerenciamento de cursos' },
        { name: 'sumarios', description: 'Controle de sumários das aulas' },
        { name: 'presencas', description: 'Registro de presenças' },
        { name: 'efetividades', description: 'Controle de efetividade dos professores' }
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
          }
        }
      },
      security: [{
        bearerAuth: []
      }]
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