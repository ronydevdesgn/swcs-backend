// src/tests/testHelpers.ts
import { app } from "../server";
import { PrismaClient } from "@prisma/client";
import { sign } from "../utils/jwt";

const prisma = new PrismaClient();

export interface TestUser {
  id: number;
  email: string;
  tipo: string;
  permissions?: string[];
}

export async function createTestUser(): Promise<TestUser> {
  // Criar um usuário de teste
  const user = await prisma.usuario.create({
    data: {
      Nome: "Test User",
      Email: `test${Date.now()}@example.com`,
      SenhaHash: "$2b$10$test.hash.for.testing",
      Tipo: "FUNCIONARIO",
    },
  });

  return {
    id: user.UsuarioID,
    email: user.Email,
    tipo: user.Tipo,
  };
}

export async function generateTestToken(user?: TestUser): Promise<string> {
  const testUser = user || (await createTestUser());

  const token = sign({
    id: testUser.id,
    email: testUser.email,
    tipo: testUser.tipo,
  });

  return token;
}

export async function makeAuthenticatedRequest(
  method: string,
  url: string,
  payload?: any
) {
  const token = await generateTestToken();

  return app.inject({
    method,
    url,
    payload,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
}

export async function cleanupTestData() {
  try {
    // Limpar dados de teste em ordem para evitar problemas de foreign key
    await prisma.$executeRawUnsafe("SET FOREIGN_KEY_CHECKS = 0");

    const tables = [
      "RefreshToken",
      "PasswordReset",
      "UsuarioPermissao",
      "Permissao",
      "Efetividade",
      "Presenca",
      "Sumario",
      "ProfessorCurso",
      "Professor",
      "Funcionario",
      "Usuario",
      "Curso",
    ];

    for (const table of tables) {
      await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${table}`);
    }

    await prisma.$executeRawUnsafe("SET FOREIGN_KEY_CHECKS = 1");
  } catch (error) {
    console.error("Erro ao limpar dados de teste:", error);
  }
}

export async function createTestProfessor() {
  const professor = await prisma.professor.create({
    data: {
      Nome: "Professor Teste",
      Departamento: "INFORMATICA",
      CargaHoraria: 20,
    },
  });

  const user = await prisma.usuario.create({
    data: {
      Nome: "Professor Teste",
      Email: `professor${Date.now()}@example.com`,
      SenhaHash: "$2b$10$test.hash.for.testing",
      Tipo: "PROFESSOR",
      Professor: {
        connect: {
          ProfessorID: professor.ProfessorID,
        },
      },
    },
  });

  return { professor, user };
}

export async function createTestCurso() {
  return await prisma.curso.create({
    data: {
      Nome: "Curso Teste",
      Descricao: "Descrição do curso teste",
    },
  });
}

export async function createTestFuncionario() {
  const funcionario = await prisma.funcionario.create({
    data: {
      Nome: "Funcionário Teste",
      Email: `funcionario${Date.now()}@example.com`,
      Cargo: "SECRETARIO",
    },
  });

  const user = await prisma.usuario.create({
    data: {
      Nome: "Funcionário Teste",
      Email: `funcionario${Date.now()}@example.com`,
      SenhaHash: "$2b$10$test.hash.for.testing",
      Tipo: "FUNCIONARIO",
      Funcionario: {
        connect: {
          FuncionarioID: funcionario.FuncionarioID,
        },
      },
    },
  });

  return { funcionario, user };
}
