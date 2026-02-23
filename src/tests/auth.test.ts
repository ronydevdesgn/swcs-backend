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
    // Criar um usuário para teste de login
    const email = `login_test_${Date.now()}@test.com`;
    const password = "senha123";
    const passwordHash = await require("bcryptjs").hash(password, 10);
    const prisma = require("@prisma/client").PrismaClient;
    const db = new prisma();
    
    await db.usuario.create({
      data: {
        Nome: "Login Test User",
        Email: email,
        SenhaHash: passwordHash,
        Tipo: "FUNCIONARIO"
      }
    });

    const res = await app.inject({
      method: "POST",
      url: "/auth/login",
      payload: {
        email: email,
        senha: password,
        tipo: "FUNCIONARIO",
      },
    });
    
    // Cleanup
    await db.usuario.delete({ where: { Email: email } });
    await db.$disconnect();

    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.payload)).toHaveProperty("accessToken");
  });

  it("should reject invalid credentials", async () => {
    const res = await app.inject({
      method: "POST",
      url: "/auth/login",
      payload: {
        email: "naoexistente@teste.com",
        senha: "errada",
        tipo: "FUNCIONARIO",
      },
    });
    expect(res.statusCode).toBe(401);
  });
});
