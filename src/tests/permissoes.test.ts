import { app } from "../server";
import { makeAuthenticatedRequest } from "./testHelpers";

describe("Permissao Routes", () => {
  let permissaoId: number;

  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should create a new permissao", async () => {
    const res = await makeAuthenticatedRequest("POST", "/permissoes", {
      descricao: "Acesso total ao sistema",
    });

    expect(res.statusCode).toBe(201);
    const body = JSON.parse(res.payload);
    expect(body).toHaveProperty("data");
    expect(body.data).toHaveProperty("PermissaoID");
    permissaoId = body.data.PermissaoID;
  });

  it("should list all permissoes", async () => {
    const res = await makeAuthenticatedRequest("GET", "/permissoes");
    expect(res.statusCode).toBe(200);
    const response = JSON.parse(res.payload);
    expect(response).toHaveProperty("data");
    expect(Array.isArray(response.data)).toBe(true);
  });

  it("should get a permissao by ID", async () => {
    const res = await makeAuthenticatedRequest(
      "GET",
      `/permissoes/${permissaoId}`
    );
    expect(res.statusCode).toBe(200);
    const response = JSON.parse(res.payload);
    expect(response).toHaveProperty("data");
    expect(response.data.PermissaoID).toBe(permissaoId);
  });

  it("should update a permissao", async () => {
    const res = await makeAuthenticatedRequest(
      "PUT",
      `/permissoes/${permissaoId}`,
      {
        descricao: "Permissão de administrador",
      }
    );
    expect(res.statusCode).toBe(200);
  });

  it("should delete a permissao", async () => {
    const res = await makeAuthenticatedRequest(
      "DELETE",
      `/permissoes/${permissaoId}`
    );
    expect(res.statusCode).toBe(200);
  });
});
