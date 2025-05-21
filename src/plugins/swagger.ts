import fp from 'fastify-plugin'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'

export default fp(async (fastify) => {
  await fastify.register(fastifySwagger, {
    swagger: {
      info: {
        title: 'SWCS de Professores e Funcionários',
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
      host: 'localhost:3306',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
  })

  await fastify.register(fastifySwaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'full'
    },
  })

  fastify.ready().then(() => {
    fastify.swagger()
  })
})