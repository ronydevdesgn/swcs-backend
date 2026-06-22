import { app } from "../server";
import {
  createProfessorCurso,
  createTestCurso,
  createTestProfessor,
  makeAuthenticatedRequest,
} from "./testHelpers";

describe("Sumario Routes", () => {
  let sumarioId: number;
  let cursoId: number;
  let professorId: number;

  beforeAll(async () => {
    await app.ready();

    // Criar dados de teste necessários
    const { professor } = await createTestProfessor();
    const curso = await createTestCurso();
    cursoId = curso.cursoId;
    professorId = professor.professorId;
    await createProfessorCurso(professorId, cursoId);
  });

  afterAll(async () => {
    await app.close();
  });

  it("should create a new sumario", async () => {
    const res = await makeAuthenticatedRequest("POST", "/sumarios", {
      data: new Date().toISOString(),
      conteudo: "Revisão de conteúdos da aula anterior.",
      cursoId: cursoId,
      professorId: professorId,
    });

    expect(res.statusCode).toBe(201);
    const body = JSON.parse(res.payload);
    expect(body).toHaveProperty("data");
    expect(body.data).toHaveProperty("sumarioId");
    sumarioId = body.data.sumarioId;
  });

  it("should list all sumarios", async () => {
    const res = await makeAuthenticatedRequest("GET", "/sumarios");

    expect(res.statusCode).toBe(200);
    const response = JSON.parse(res.payload);
    expect(response).toHaveProperty("data");
    expect(Array.isArray(response.data)).toBe(true);
  });

  it("should get a sumario by ID", async () => {
    const res = await makeAuthenticatedRequest("GET", `/sumarios/${sumarioId}`);

    expect(res.statusCode).toBe(200);
    const response = JSON.parse(res.payload);
    expect(response).toHaveProperty("data");
    expect(response.data.sumarioId).toBe(sumarioId);
  });

  it("should update a sumario", async () => {
    const res = await makeAuthenticatedRequest(
      "PUT",
      `/sumarios/${sumarioId}`,
      {
        conteudo: "Conteúdo atualizado: nova matéria adicionada.",
      }
    );

    expect(res.statusCode).toBe(200);
  });

  it("should delete a sumario", async () => {
    const res = await makeAuthenticatedRequest(
      "DELETE",
      `/sumarios/${sumarioId}`
    );

    expect(res.statusCode).toBe(200);
  });
});
