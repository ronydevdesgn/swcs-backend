import { app } from "../server";
import {
  createTestCurso,
  createTestProfessor,
  makeAuthenticatedRequest,
} from "./testHelpers";

describe("Efetividade Routes", () => {
  let efetividadeId: number;
  let professorId: number;
  let cursoId: number;

  beforeAll(async () => {
    await app.ready();

    // Criar dados de teste necessários
    const { professor } = await createTestProfessor();
    const curso = await createTestCurso();
    professorId = professor.professorId;
    cursoId = curso.cursoId;
  });

  afterAll(async () => {
    await app.close();
  });

  it("should create a new efetividade", async () => {
    const res = await makeAuthenticatedRequest("POST", "/efetividades", {
      data: new Date().toISOString(),
      horasTrabalhadas: 5,
      professorId: professorId,
      cursoId: cursoId,
    });

    expect(res.statusCode).toBe(201);
    const body = JSON.parse(res.payload);
    expect(body).toHaveProperty("data");
    expect(body.data).toHaveProperty("efetividadeId");
    efetividadeId = body.data.efetividadeId;
  });

  it("should list all efetividades", async () => {
    const res = await makeAuthenticatedRequest("GET", "/efetividades");

    expect(res.statusCode).toBe(200);
    const response = JSON.parse(res.payload);
    expect(response).toHaveProperty("data");
    expect(Array.isArray(response.data)).toBe(true);
  });

  it("should get an efetividade by ID", async () => {
    const res = await makeAuthenticatedRequest(
      "GET",
      `/efetividades/${efetividadeId}`
    );

    expect(res.statusCode).toBe(200);
    const response = JSON.parse(res.payload);
    expect(response).toHaveProperty("data");
    expect(response.data.efetividadeId).toBe(efetividadeId);
  });

  it("should update an efetividade", async () => {
    const res = await makeAuthenticatedRequest(
      "PUT",
      `/efetividades/${efetividadeId}`,
      {
        horasTrabalhadas: 6,
      }
    );

    expect(res.statusCode).toBe(200);
  });

  it("should delete an efetividade", async () => {
    const res = await makeAuthenticatedRequest(
      "DELETE",
      `/efetividades/${efetividadeId}`
    );

    expect(res.statusCode).toBe(200);
  });
});
