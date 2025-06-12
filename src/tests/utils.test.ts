// src/tests/utils.ts
import { FastifyInstance } from 'fastify'
import { PrismaClient } from '@prisma/client'

export async function createTestDatabase() {
  const prisma = new PrismaClient()
  await prisma.$connect()
  return prisma
}

export async function clearTestDatabase(prisma: PrismaClient) {
  const tables = ['Usuario', 'Professor', 'Funcionario']
  for (const table of tables) {
    await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${table} CASCADE`)
  }
}