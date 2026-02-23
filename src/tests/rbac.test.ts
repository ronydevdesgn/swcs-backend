import { app } from "../server";
import { generateTestToken, createTestUser, cleanupTestData } from "./testHelpers";
import { PERMISSIONS } from "../consts/permissions";

describe("RBAC Authorization", () => {
  let userWithPermission: any;
  let userWithoutPermission: any;
  let tokenWithPermission: string;
  let tokenWithoutPermission: string;

  beforeAll(async () => {
    await app.ready();

    // Create user WITH permission
    userWithPermission = await createTestUser({
      permissions: [PERMISSIONS.REGISTRAR_SUMARIO]
    });
    tokenWithPermission = generateTestToken(
      userWithPermission.UsuarioID,
      userWithPermission.Email,
      userWithPermission.Tipo,
      userWithPermission.permissions
    );

    // Create user WITHOUT permission
    userWithoutPermission = await createTestUser({
      permissions: [] 
    });
    tokenWithoutPermission = generateTestToken(
      userWithoutPermission.UsuarioID,
      userWithoutPermission.Email,
      userWithoutPermission.Tipo,
      userWithoutPermission.permissions
    );
  });

  afterAll(async () => {
    await app.close();
  });

  it("should allow access if user has required permission", async () => {
    // Attempt to access a route protected by REGISTRAR_SUMARIO
    // Note: The route might fail validation (400) but NOT 403.
    // If we get 400, it means we passed authorization.

    const validPayload = {
        ProfessorID: 1, // Assumptions: IDs might need to be valid based on seed? Or just type check?
        // Actually, if validation checks DB existence (refinement), it might fail 400.
        // But let's try to satisfy types first.
        CursoID: 1,
        Data: new Date().toISOString(),
        Conteudo: "Conteúdo teste RBAC"
    };

    const res = await app.inject({
      method: "POST",
      url: "/sumarios/", // Protected route
      headers: {
        Authorization: `Bearer ${tokenWithPermission}`
      },
      payload: validPayload
    });

    // If validation fails due to FK (400) or success (201), it confirms auth passed.
    expect([201, 400, 404, 409]).toContain(res.statusCode);
    expect(res.statusCode).not.toBe(401);
    expect(res.statusCode).not.toBe(403);
  });

  it("should deny access (403) if user lacks permission", async () => {
    const validPayload = {
        ProfessorID: 1,
        CursoID: 1,
        Data: new Date().toISOString(),
        Conteudo: "Conteúdo teste RBAC"
    };

    const res = await app.inject({
      method: "POST",
      url: "/sumarios/",
      headers: {
        Authorization: `Bearer ${tokenWithoutPermission}`
      },
      payload: validPayload
    });

    expect(res.statusCode).toBe(403);
  });
});
