import { FastifyPluginAsync } from 'fastify';
import { PrismaClient } from '@prisma/client';
import fp from 'fastify-plugin';

export class Database {
  private static instance: PrismaClient

  static getInstance(): PrismaClient {
    if (!Database.instance) {
      Database.instance = new PrismaClient({
        log: ['query', 'info', 'warn', 'error'],
      })
    }
    return Database.instance
  }
}

const prismaPlugin: FastifyPluginAsync = async (fastify) => {
  const prisma = Database.getInstance();

  await prisma.$connect();

  fastify.decorate('prisma', prisma);
  
  fastify.addHook('onClose', async (instance) => {
    await instance.prisma.$disconnect();
  });
};

export default fp(prismaPlugin);