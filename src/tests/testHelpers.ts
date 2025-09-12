// src/tests/testHelpers.ts
import { app } from "../server";
import { PrismaClient, TipoUsuario } from "@prisma/client";
import jwt from "jsonwebtoken";
import { uuidv4 } from "zod/v4";

const prisma = new PrismaClient();

// Token de teste fixo para autenticação
const TEST_TOKEN = jwt.sign(
  {
    userId: uuidv4(),
    tipo: "FUNCIONARIO",
    email: "test@example.com",
    nome: "Usuário Teste",
  },
  "test-secret-key",
  { expiresIn: "1d" }
);

export async function createTestProfessor() {
  const professor = await prisma.professor.create({
    data: {
      Nome: `Professor Teste ${Date.now()}`,
      Departamento: "INFORMATICA",
      CargaHoraria: 20,
    },
  });
  return { professor };
}

export async function createTestCurso() {
  const curso = await prisma.curso.create({
    data: {
      Nome: `Curso Teste ${Date.now()}`,
      Descricao: "Curso para testes",
    },
  });
  return curso;
}

export async function createTestFuncionario() {
  const funcionario = await prisma.funcionario.create({
    data: {
      Nome: `Funcionário Teste ${Date.now()}`,
      Email: `funcionario${Date.now()}@test.com`,
      Cargo: "SECRETARIO",
    },
  });
  return { funcionario };
}

export async function makeAuthenticatedRequest(
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  payload?: any
) {
  return app.inject({
    method,
    url,
    payload,
    headers: {
      Authorization: `Bearer ${TEST_TOKEN}`,
    },
  });
}

export async function cleanupTestData() {
  // Limpar dados de teste em ordem reversa para evitar problemas de foreign key
  await prisma.usuarioPermissao.deleteMany({});
  await prisma.refreshToken.deleteMany({});
  await prisma.passwordReset.deleteMany({});
  await prisma.efetividade.deleteMany({});
  await prisma.presenca.deleteMany({});
  await prisma.sumario.deleteMany({});
  await prisma.professorCurso.deleteMany({});
  await prisma.professor.deleteMany({});
  await prisma.funcionario.deleteMany({});
  await prisma.curso.deleteMany({});
  await prisma.permissao.deleteMany({});
  await prisma.usuario.deleteMany({});
}
