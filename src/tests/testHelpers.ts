// src/tests/testHelpers.ts
import { app } from "../server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

// Token de teste para autenticação
const TEST_TOKEN = jwt.sign(
  {
    userId: 1,
    tipo: "FUNCIONARIO",
    email: "test@example.com",
  },
  "test-secret-key",
  { expiresIn: "1d" }
);

export async function createTestProfessor() {
  const professor = await prisma.professor.create({
    data: {
      nome: `Professor Teste ${Date.now()}`,
      email: `professor${Date.now()}@test.com`,
      senha: "senha123",
      departamento: "INFORMATICA",
      cargaHoraria: 20,
    },
  });
  return { professor };
}

export async function createTestCurso() {
  const curso = await prisma.curso.create({
    data: {
      nome: `Curso Teste ${Date.now()}`,
      descricao: "Curso para testes",
      cargaHoraria: 40,
      departamento: "INFORMATICA",
    },
  });
  return curso;
}

export async function createTestFuncionario() {
  const funcionario = await prisma.funcionario.create({
    data: {
      nome: `Funcionário Teste ${Date.now()}`,
      email: `funcionario${Date.now()}@test.com`,
      senha: "senha123",
      cargo: "SECRETARIO",
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
  await prisma.efetividade.deleteMany({});
  await prisma.presenca.deleteMany({});
  await prisma.sumario.deleteMany({});
  await prisma.professor.deleteMany({});
  await prisma.funcionario.deleteMany({});
  await prisma.curso.deleteMany({});
  await prisma.permissao.deleteMany({});
  await prisma.usuario.deleteMany({});
}
