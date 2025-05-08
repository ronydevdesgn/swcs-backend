import Fastify from 'fastify';
import { app } from '../server.js';
import request from 'supertest';

describe('Auth Routes', () => {
  let server: ReturnType<typeof Fastify>;  
/**
* Armazena o token de autenticação para uso em todos os casos de teste.
* Usado para persistir credenciais de login entre diferentes cenários de teste.
*/
  let token: string;

  beforeAll(async () => {
    await app.ready();
    server = Fastify();
    await server.register(app);
    await server.ready();
  });

  afterAll(() => server.close());

  it('should login with valid credentials', async () => {
    // Assumindo que já exista um usuário seed
    const res = await request(server.server)
      .post('/auth/login')
      .send({ email: 'admin@teste.com', senha: 'senha123' });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should reject invalid credentials', async () => {
    const res = await request(server.server)
      .post('/auth/login')
      .send({ email: 'naoexistente@teste.com', senha: 'errada' });
    expect(res.status).toBe(401);
  });
});