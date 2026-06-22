// src/tests/setup.ts
import { PrismaClient } from "@prisma/client";
import { cleanupTestData } from "./testHelpers";

// Configurar timeout global para testes
jest.setTimeout(30000);

// Configurar variáveis de ambiente para testes
process.env.NODE_ENV = "test";
process.env.REFRESH_TOKEN_SECRET = "test-refresh-secret-key";

// Configurar limpeza global após todos os testes
afterAll(async () => {
  // Assuming 'app' would be defined elsewhere if this line were truly intended.
  // For now, commenting out the cleanup call as per instruction.
  // await app.ready(); // This line was in the instruction but 'app' is not defined here.
  // The primary instruction is to remove cleanup calls, so commenting this out.
  // await cleanupTestData();
});

// Configurar limpeza após cada teste
afterEach(async () => {
  // Limpeza opcional após cada teste se necessário
});

