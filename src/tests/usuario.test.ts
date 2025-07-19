import { app } from "../server";
import { makeAuthenticatedRequest } from "./testHelpers";
import { TipoUsuario } from "@prisma/client";

describe("Usuario Routes", () => {
  let usuarioId: number;

  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should create a new usuario", async () => {
    const res = await makeAuthenticatedRequest("POST", "/usuarios", {
      nome: "Usuário Teste",
      email: `usuarioteste${Date.now()}@example.com`,
      senha: "senha123",
      tipo: TipoUsuario.FUNCIONARIO,
    });

    expect(res.statusCode).toBe(201);
    const body = JSON.parse(res.payload);
    expect(body).toHaveProperty("data");
    expect(body.data).toHaveProperty("UsuarioID");
    usuarioId = body.data.UsuarioID;
  });

  it("should get all usuarios", async () => {
    const res = await makeAuthenticatedRequest("GET", "/usuarios");
    expect(res.statusCode).toBe(200);
    const response = JSON.parse(res.payload);
    expect(response).toHaveProperty("data");
    expect(Array.isArray(response.data)).toBe(true);
  });

  it("should get a single usuario by ID", async () => {
    const res = await makeAuthenticatedRequest("GET", `/usuarios/${usuarioId}`);
    expect(res.statusCode).toBe(200);
    const response = JSON.parse(res.payload);
    expect(response).toHaveProperty("data");
    expect(response.data.UsuarioID).toBe(usuarioId);
  });

  it("should update a usuario", async () => {
    const res = await makeAuthenticatedRequest(
      "PUT",
      `/usuarios/${usuarioId}`,
      {
        nome: "Usuário Atualizado",
        email: `atualizado${Date.now()}@example.com`,
        tipo: TipoUsuario.FUNCIONARIO,
      }
    );
    expect(res.statusCode).toBe(200);
  });

  it("should delete a usuario", async () => {
    const res = await makeAuthenticatedRequest(
      "DELETE",
      `/usuarios/${usuarioId}`
    );
    expect(res.statusCode).toBe(200);
  });
});
