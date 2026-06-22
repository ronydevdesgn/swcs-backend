import { app } from "../server";
import { makeAuthenticatedRequest } from "./testHelpers";

describe("Dashboard Routes", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should return 401 if not authenticated", async () => {
    const res = await app.inject({
      method: "GET",
      url: "/dashboard/stats",
    });

    expect(res.statusCode).toBe(401);
  });

  it("should return dashboard statistics", async () => {
    const res = await makeAuthenticatedRequest("GET", "/dashboard/stats");

    expect(res.statusCode).toBe(200);
    
    const body = JSON.parse(res.payload);
    expect(body).toHaveProperty("data");
    expect(body.data).toHaveProperty("professores");
    expect(body.data).toHaveProperty("cursos");
    expect(body.data).toHaveProperty("sumarios");
    expect(body.data).toHaveProperty("presencas");
    expect(body.data).toHaveProperty("funcionarios");

    // Verify types
    expect(typeof body.data.professores).toBe("number");
    expect(typeof body.data.cursos).toBe("number");
    expect(typeof body.data.sumarios).toBe("number");
    expect(typeof body.data.presencas).toBe("number");
    expect(typeof body.data.funcionarios).toBe("number");
  });
});
