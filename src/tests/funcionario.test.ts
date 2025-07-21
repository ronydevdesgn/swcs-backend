import { app } from "../server";
import { makeAuthenticatedRequest } from "./testHelpers";
import { Cargo } from "@prisma/client";

describe("Funcionario Routes", () => {
  let funcionarioId: number;

  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should create a new funcionario", async () => {
    const res = await makeAuthenticatedRequest("POST", "/funcionarios", {
      nome: "Funcionário Teste",
        email: `teste${Date.now()}@empresa.com`,
      senha: "senha123",
      cargo: Cargo.SECRETARIO,
    });

    expect(res.statusCode).toBe(201);
    const body = JSON.parse(res.payload);
    expect(body).toHaveProperty("data");
    expect(body.data).toHaveProperty("FuncionarioID");
    funcionarioId = body.data.FuncionarioID;
  });

  it("should list all funcionarios", async () => {
    const res = await makeAuthenticatedRequest("GET", "/funcionarios");
    expect(res.statusCode).toBe(200);
    const response = JSON.parse(res.payload);
    expect(response).toHaveProperty("data");
    expect(Array.isArray(response.data)).toBe(true);
  });

  it("should get a funcionario by ID", async () => {
    const res = await makeAuthenticatedRequest(
      "GET",
      `/funcionarios/${funcionarioId}`
    );
    expect(res.statusCode).toBe(200);
    const response = JSON.parse(res.payload);
    expect(response).toHaveProperty("data");
    expect(response.data.FuncionarioID).toBe(funcionarioId);
  });

  it("should update a funcionario", async () => {
    const res = await makeAuthenticatedRequest(
      "PUT",
      `/funcionarios/${funcionarioId}`,
      {
        nome: "Funcionário Atualizado",
        email: `atualizado${Date.now()}@empresa.com`,
        cargo: Cargo.SUMARISTA,
      }
    );
    expect(res.statusCode).toBe(200);
  });

  it("should delete a funcionario", async () => {
    const res = await makeAuthenticatedRequest(
      "DELETE",
      `/funcionarios/${funcionarioId}`
    );
    expect(res.statusCode).toBe(200);
  });
});
