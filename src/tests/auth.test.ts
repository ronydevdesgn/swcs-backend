import { app } from '../server';

describe('Auth Routes', () => {
  let token: string;

  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should login with valid credentials', async () => {
    // Usando usuário do seed
    const res = await app.inject({
      method: 'POST',
      url: '/auth/login',
      payload: { 
        email: 'sumarista@instituicao.com', 
        senha: 'senha_hash_fake',
        tipo: 'FUNCIONARIO'
      }
    });
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.payload)).toHaveProperty('accessToken');
  });

  it('should reject invalid credentials', async () => {
    const res = await app.inject({
      method: 'POST',
      url: '/auth/login',
      payload: { 
        email: 'naoexistente@teste.com', 
        senha: 'errada',
        tipo: 'FUNCIONARIO'
      }
    });
    expect(res.statusCode).toBe(401);
  });
});
