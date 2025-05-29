import { FastifyPluginAsync } from 'fastify';
import { PrismaClient } from '@prisma/client';
import fp from 'fastify-plugin';

const prismaPlugin: FastifyPluginAsync = async (fastify) => {
  const prisma = new PrismaClient();
  
  await prisma.$connect();
  
  fastify.decorate('prisma', prisma);
  
  fastify.addHook('onClose', async (instance) => {
    await instance.prisma.$disconnect();
  });
};

export default fp(prismaPlugin);