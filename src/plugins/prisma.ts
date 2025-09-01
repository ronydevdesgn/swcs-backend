import { FastifyPluginAsync } from 'fastify';
import { PrismaClient } from '@prisma/client';
import fp from 'fastify-plugin';

// Declaração de tipos para o Fastify
declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

export class Database {
  private static instance: PrismaClient;

  static getInstance(): PrismaClient {
    if (!Database.instance) {
      Database.instance = new PrismaClient({
        log: process.env.NODE_ENV === 'development' 
          ? ['query', 'info', 'warn', 'error']
          : ['warn', 'error'],
        errorFormat: 'pretty',
        // Configurações otimizadas para MySQL
        datasources: {
          db: {
            url: process.env.DATABASE_URL
          }
        }
      });
    }
    return Database.instance;
  }

  static async disconnect(): Promise<void> {
    if (Database.instance) {
      await Database.instance.$disconnect();
      Database.instance = null as any;
    }
  }
}

const prismaPlugin: FastifyPluginAsync = async (fastify) => {
  const prisma = Database.getInstance();

  try {
    // Testa a conexão
    await prisma.$connect();
    fastify.log.info('Database connected successfully');
    
    // Opcional: testar uma query simples para verificar conectividade
    await prisma.$queryRaw`SELECT 1`;
    
  } catch (error) {
    fastify.log.error('Failed to connect to database:', error);
    throw error;
  }

  // Decora a instância do Fastify com o Prisma
  fastify.decorate('prisma', prisma);
  
  // Hook para desconectar quando o servidor for fechado
  fastify.addHook('onClose', async (instance) => {
    try {
      await instance.prisma.$disconnect();
      fastify.log.info('Database disconnected successfully');
    } catch (error) {
      fastify.log.error('Error disconnecting from database:', error);
    }
  });

  // Hook para lidar com erros de conexão durante runtime
  fastify.addHook('onRequest', async (request, reply) => {
    try {
      // Verifica se a conexão ainda está ativa
      await fastify.prisma.$queryRaw`SELECT 1`;
    } catch (error) {
      fastify.log.error('Database connection lost:', error);
      reply.status(503).send({
        statusCode: 503,
        error: 'Service Unavailable',
        message: 'Database connection lost'
      });
    }
  });
};

export default fp(prismaPlugin, {
  name: 'prisma',
  fastify: '4.x'
});