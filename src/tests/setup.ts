// src/tests/setup.ts
import { PrismaClient } from "@prisma/client";
import { cleanupTestData } from "./testHelpers";

// Configurar timeout global para testes
jest.setTimeout(30000);

// Configurar variáveis de ambiente para testes
process.env.NODE_ENV = "test";
process.env.DATABASE_URL =
process.env.TEST_DATABASE_URL || process.env.DATABASE_URL;
process.env.JWT_SECRET = "test-secret-key";
process.env.REFRESH_TOKEN_SECRET = "test-refresh-secret-key";

// Configurar limpeza global após todos os testes
afterAll(async () => {
  await cleanupTestData();
});

// Configurar limpeza após cada teste
afterEach(async () => {
  // Limpeza opcional após cada teste se necessário
});
