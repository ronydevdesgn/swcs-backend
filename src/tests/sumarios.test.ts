import Fastify from 'fastify';
import { app } from '../server.js';

describe('Sumarios Routes', () => {
  let server: ReturnType<typeof Fastify>;
  let sumarioId: number;

  beforeAll(async () => {
    await app.ready();
    server = Fastify();
    await server.register(app);
    await server.ready();
  });

  afterAll(() => server.close());

  it('should create a sumario', async () => {
    const res = await server.inject({
      method: 'POST',
      url: '/sumarios',
      payload: {
        titulo: 'Sumário de Matemática',
        descricao: 'Conteúdo abordado na aula de matemática.',
        data: '2025-06-02'
      }
    });

    const data = JSON.parse(res.payload);
    sumarioId = data.SumarioID;

    expect(res.statusCode).toBe(201);
    expect(data).toHaveProperty('SumarioID');
  });

  it('should list all sumarios', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/sumarios'
    });

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(JSON.parse(res.payload))).toBe(true);
  });

  it('should update a sumario', async () => {
    const res = await server.inject({
      method: 'PUT',
      url: `/sumarios/${sumarioId}`,
      payload: {
        titulo: 'Sumário de Física',
        descricao: 'Conteúdo abordado na aula de física.',
        data: '2025-06-03'
      }
    });

    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.payload).titulo).toBe('Sumário de Física');
  });

  it('should delete a sumario', async () => {
    const res = await server.inject({
      method: 'DELETE',
      url: `/sumarios/${sumarioId}`
    });

    expect(res.statusCode).toBe(204);
  });
});
