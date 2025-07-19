import { app } from "../server";
import { makeAuthenticatedRequest } from "./testHelpers";
import { Departamento } from "@prisma/client";

describe("Professor Routes", () => {
  let professorId: number;

  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should create a new professor", async () => {
    const res = await makeAuthenticatedRequest("POST", "/professores", {
      nome: "Prof. Teste",
      email: `professor${Date.now()}@example.com`,
      senha: "senha123",
      departamento: Departamento.INFORMATICA,
      cargaHoraria: 20,
    });

    expect(res.statusCode).toBe(201);
    const body = JSON.parse(res.payload);
    expect(body).toHaveProperty("data");
    expect(body.data).toHaveProperty("ProfessorID");
    professorId = body.data.ProfessorID;
  });

  it("should list all professores", async () => {
    const res = await makeAuthenticatedRequest("GET", "/professores");
    expect(res.statusCode).toBe(200);
    const response = JSON.parse(res.payload);
    expect(response).toHaveProperty("data");
    expect(Array.isArray(response.data)).toBe(true);
  });

  it("should get a professor by ID", async () => {
    const res = await makeAuthenticatedRequest(
      "GET",
      `/professores/${professorId}`
    );
    expect(res.statusCode).toBe(200);
    const response = JSON.parse(res.payload);
    expect(response).toHaveProperty("data");
    expect(response.data.ProfessorID).toBe(professorId);
  });

  it("should update a professor", async () => {
    const res = await makeAuthenticatedRequest(
      "PUT",
      `/professores/${professorId}`,
      {
        nome: "Prof. Atualizado",
        email: `atualizado${Date.now()}@example.com`,
        departamento: Departamento.INFORMATICA,
        cargaHoraria: 30,
      }
    );
    expect(res.statusCode).toBe(200);
  });

  it("should delete a professor", async () => {
    const res = await makeAuthenticatedRequest(
      "DELETE",
      `/professores/${professorId}`
    );
    expect(res.statusCode).toBe(200);
  });
});
