// src/tests/utils.test.ts
import { FastifyInstance } from "fastify";
import { PrismaClient } from "@prisma/client";

export async function createTestDatabase() {
  const prisma = new PrismaClient();
  await prisma.$connect();
  return prisma;
}

export async function clearTestDatabase(prisma: PrismaClient) {
  const tables = ["Usuario", "Professor", "Funcionario"];
  for (const table of tables) {
    await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${table} CASCADE`);
  }
}

// Teste dummy para evitar erro de suite vazia
describe("Utils", () => {
  it("should have utility functions", () => {
    expect(typeof createTestDatabase).toBe("function");
    expect(typeof clearTestDatabase).toBe("function");
  });
});
