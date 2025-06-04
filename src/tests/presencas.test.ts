import Fastify from 'fastify';
import { app } from '../server.js';

describe('Presencas Routes', () => {
  let server: ReturnType<typeof Fastify>;
  let presencaId: number;

  beforeAll(async () => {
    await app.ready();
    server = Fastify();
    await server.register(app);
    await server.ready();
  });

  afterAll(() => server.close());

  it('should create a presenca', async () => {
    const res = await server.inject({
      method: 'POST',
      url: '/presencas',
      payload: {
        usuarioId: 1,
        data: '2025-06-02',
        status: 'PRESENTE'
      }
    });

    const data = JSON.parse(res.payload);
    presencaId = data.PresencaID;

    expect(res.statusCode).toBe(201);
    expect(data).toHaveProperty('PresencaID');
  });

  it('should list all presencas', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/presencas'
    });

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(JSON.parse(res.payload))).toBe(true);
  });

  it('should update a presenca', async () => {
    const res = await server.inject({
      method: 'PUT',
      url: `/presencas/${presencaId}`,
      payload: {
        usuarioId: 1,
        data: '2025-06-03',
        status: 'FALTA'
      }
    });

    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.payload).status).toBe('AUSENTE');
  });

  it('should delete a presenca', async () => {
    const res = await server.inject({
      method: 'DELETE',
      url: `/presencas/${presencaId}`
    });

    expect(res.statusCode).toBe(204);
  });
});
