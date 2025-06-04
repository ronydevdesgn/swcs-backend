import Fastify from 'fastify';
import { app } from '../server.js';

describe('Usuario Routes', () => {
  let server: ReturnType<typeof Fastify>;
  let usuarioId: number;

  beforeAll(async () => {
    await app.ready();
    server = Fastify();
    await server.register(app);
    await server.ready();
  });

  afterAll(() => server.close());

  it('should create a usuario', async () => {
    const res = await server.inject({
      method: 'POST',
      url: '/usuarios',
      payload: {
        nome: 'Usuário Teste',
        email: 'usuario@teste.com',
        senha: 'senha123',
        role: 'ADMIN'
      }
    });

    const data = JSON.parse(res.payload);
    usuarioId = data.UsuarioID;

    expect(res.statusCode).toBe(201);
    expect(data).toHaveProperty('UsuarioID');
  });

  it('should list all usuarios', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/usuarios'
    });

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(JSON.parse(res.payload))).toBe(true);
  });

  it('should update a usuario', async () => {
    const res = await server.inject({
      method: 'PUT',
      url: `/usuarios/${usuarioId}`,
      payload: {
        nome: 'Usuário Teste Atualizado',
        email: 'usuarioatualizado@teste.com',
        senha: 'novaSenha123',
        role: 'USER'
      }
    });

    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.payload).nome).toBe('Usuário Teste Atualizado');
  });

  it('should delete a usuario', async () => {
    const res = await server.inject({
      method: 'DELETE',
      url: `/usuarios/${usuarioId}`
    });

    expect(res.statusCode).toBe(204);
  });
});
