import Fastify from 'fastify';
import { app } from '../server.js';

describe('Professor Routes', () => {
  let server: ReturnType<typeof Fastify>;
  let professorId: number;

  beforeAll(async () => {
    await app.ready();
    server = Fastify();
    await server.register(app);
    await server.ready();
  });

  afterAll(() => server.close());

  it('should create a professor', async () => {
    // should create a professor
    const res = await server.inject({
      method: 'POST',
      url: '/professores',
      payload: {
        nome: 'Prof. João Silva',
        email: 'joao@teste.com',
        telefone: '923456789',
        especialidade: 'Matemática',
        estado: 'ATIVO'
      }
    });

    const data = JSON.parse(res.payload);
    professorId = data.ProfessorID;

    expect(res.statusCode).toBe(201);
    expect(data).toHaveProperty('ProfessorID');
  });

  it('should list all a professors', async () => {
    // should list all professors
    const res = await server.inject({
      method: 'GET',
      url: '/professores'
    });

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(JSON.parse(res.payload))).toBe(true);
  });

  it('should update a professor', async () => {
    const res = await server.inject({
      method: 'PUT',
      url: `/professores/${professorId}`,
      payload: {
        nome: 'Prof. João Silva Atualizado',
        email: 'joaoatualizado@teste.com',
        telefone: '923456780',
        especialidade: 'Física',
        estado: 'ATIVO'
      }
    });

    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.payload).nome).toBe('Prof. João Silva Atualizado');
  });

  it('should delete a professor', async () => {
    const res = await server.inject({
      method: 'DELETE',
      url: `/professores/${professorId}`
    });

    expect(res.statusCode).toBe(204);
  });
});
