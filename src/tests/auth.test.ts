import { app } from "../server";

describe("Auth Routes", () => {
  let token: string;

  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should login with valid credentials", async () => {
    // Assumindo que já exista um usuário seed
    const res = await app.inject({
      method: "POST",
      url: "/auth/login",
      payload: {
        email: "admin@teste.com",
        senha: "senha123",
      },
    });
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.payload)).toHaveProperty("token");
  });

  it("should reject invalid credentials", async () => {
    const res = await app.inject({
      method: "POST",
      url: "/auth/login",
      payload: {
        email: "naoexistente@teste.com",
        senha: "errada",
      },
    });
    expect(res.statusCode).toBe(401);
  });
});
