import { FastifyRequest, FastifyReply } from 'fastify';
import { PrismaClient } from '@prisma/client';
interface FastifyRequestWithPrisma extends FastifyRequest {
    server: FastifyRequest['server'] & {
        prisma: PrismaClient;
    };
}
export declare function criarSumario(req: FastifyRequestWithPrisma, reply: FastifyReply): Promise<never>;
export declare function listarSumarios(req: FastifyRequestWithPrisma, reply: FastifyReply): Promise<never>;
export {};
