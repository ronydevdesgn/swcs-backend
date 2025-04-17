import fp from 'fastify-plugin'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'

export default fp(async (fastify) => {
  await fastify.register(fastifySwagger, {
    swagger: {
      info: {
        title: 'Sistema de Professores e Funcionários',
        description: 'API documentada com Swagger',
        version: '1.0.0',
      },
      tags: [
        { name: 'auth' },
        { name: 'usuarios' },
        { name: 'professores' },
        { name: 'funcionarios' },
        { name: 'permissoes' },
        { name: 'cursos' },
        { name: 'sumarios' },
        { name: 'presencas' },
        { name: 'efetividades' }
      ],
    },
  })

  await fastify.register(fastifySwaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
    },
  })

  fastify.ready().then(() => {
    fastify.swagger()
  })
})