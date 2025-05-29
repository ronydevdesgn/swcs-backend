import { PrismaClient } from '@prisma/client';

declare global {
  namespace FastifyTypes {
    interface FastifyInstance {
      prisma: PrismaClient;
    }
  }
}

declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

export {};