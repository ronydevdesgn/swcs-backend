import { app } from "../server";
import {
  makeAuthenticatedRequest,
  createTestCurso,
  createTestProfessor,
} from "./testHelpers";

describe("Curso Routes", () => {
  let cursoId: number;
  let professorId: number;

  beforeAll(async () => {
    await app.ready();

    // Criar dados de teste necessários
    const { professor } = await createTestProfessor();
    professorId = professor.ProfessorID;
  });

  afterAll(async () => {
    await app.close();
  });

  it("should create a new curso", async () => {
    const res = await makeAuthenticatedRequest("POST", "/cursos", {
      nome: "Engenharia de Software",
      descricao: "Curso focado em desenvolvimento de software e boas práticas.",
      professorID: professorId,
    });

    expect(res.statusCode).toBe(201);
    const body = JSON.parse(res.payload);
    expect(body).toHaveProperty("data");
    expect(body.data).toHaveProperty("CursoID");
    cursoId = body.data.CursoID;
  });

  it("should list all cursos", async () => {
    const res = await makeAuthenticatedRequest("GET", "/cursos");

    expect(res.statusCode).toBe(200);
    const response = JSON.parse(res.payload);
    expect(response).toHaveProperty("data");
    expect(Array.isArray(response.data)).toBe(true);
  });

  it("should get a curso by ID", async () => {
    const res = await makeAuthenticatedRequest("GET", `/cursos/${cursoId}`);

    expect(res.statusCode).toBe(200);
    const response = JSON.parse(res.payload);
    expect(response).toHaveProperty("data");
    expect(response.data.CursoID).toBe(cursoId);
  });

  it("should update a curso", async () => {
    const res = await makeAuthenticatedRequest("PUT", `/cursos/${cursoId}`, {
      nome: "Engenharia de Computação",
      descricao:
        "Abrange hardware e software com ênfase em sistemas embarcados.",
    });

    expect(res.statusCode).toBe(200);
  });

  it("should delete a curso", async () => {
    const res = await makeAuthenticatedRequest("DELETE", `/cursos/${cursoId}`);

    expect(res.statusCode).toBe(200);
  });
});
