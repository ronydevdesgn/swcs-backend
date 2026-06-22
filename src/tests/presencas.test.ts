import { Estado } from "@prisma/client";
import { app } from "../server";
import {
  createTestCurso,
  createTestProfessor,
  makeAuthenticatedRequest
} from "./testHelpers";

describe("Presenca Routes", () => {
  let presencaId: number;
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

  it("should create a new presenca", async () => {
    const res = await makeAuthenticatedRequest("POST", "/presencas", {
      data: new Date().toISOString(),
      estado: Estado.PRESENTE,
      professorId: professorId,
      cursoId: cursoId,
    });

    expect(res.statusCode).toBe(201);
    const body = JSON.parse(res.payload);
    expect(body).toHaveProperty("data");
    expect(body.data).toHaveProperty("presencaId");
    presencaId = body.data.presencaId;
  });

  it("should list all presencas", async () => {
    const res = await makeAuthenticatedRequest("GET", "/presencas");

    expect(res.statusCode).toBe(200);
    const response = JSON.parse(res.payload);
    expect(response).toHaveProperty("data");
    expect(Array.isArray(response.data)).toBe(true);
  });

  it("should get a presenca by ID", async () => {
    const res = await makeAuthenticatedRequest(
      "GET",
      `/presencas/${presencaId}`
    );

    expect(res.statusCode).toBe(200);
    const response = JSON.parse(res.payload);
    expect(response).toHaveProperty("data");
    expect(response.data.presencaId).toBe(presencaId);
  });

  it("should update a presenca", async () => {
    const res = await makeAuthenticatedRequest(
      "PUT",
      `/presencas/${presencaId}`,
      {
        estado: Estado.FALTA,
      }
    );

    expect(res.statusCode).toBe(200);
  });

  it("should delete a presenca", async () => {
    const res = await makeAuthenticatedRequest(
      "DELETE",
      `/presencas/${presencaId}`
    );

    expect(res.statusCode).toBe(200);
  });
});
