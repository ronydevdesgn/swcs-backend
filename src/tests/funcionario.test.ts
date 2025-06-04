import Fastify from 'fastify';
import { app } from '../server.js';

describe('Funcionario Routes', () => {
  let server: ReturnType<typeof Fastify>;
  let funcionarioId: number;

  beforeAll(async () => {
    await app.ready();
    server = Fastify();
    await server.register(app);
    await server.ready();
  });

  afterAll(() => server.close());

  it('should create a funcionario', async () => {
    const res = await server.inject({
      method: 'POST',
      url: '/funcionarios',
      payload: {
        nome: 'Funcionário Teste',
        email: 'funcionario@teste.com',
        telefone: '923456789',
        departamento: 'RH',
        estado: 'ATIVO'
      }
    });

    const data = JSON.parse(res.payload);
    funcionarioId = data.FuncionarioID;

    expect(res.statusCode).toBe(201);
    expect(data).toHaveProperty('FuncionarioID');
  });

  it('should list all funcionarios', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/funcionarios'
    });

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(JSON.parse(res.payload))).toBe(true);
  });

  it('should update a funcionario', async () => {
    const res = await server.inject({
      method: 'PUT',
      url: `/funcionarios/${funcionarioId}`,
      payload: {
        nome: 'Funcionário Atualizado',
        email: 'funcionarioatualizado@teste.com',
        telefone: '923456780',
        departamento: 'Financeiro',
        estado: 'INATIVO'
      }
    });

    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.payload).nome).toBe('Funcionário Atualizado');
  });

  it('should delete a funcionario', async () => {
    const res = await server.inject({
      method: 'DELETE',
      url: `/funcionarios/${funcionarioId}`
    });

    expect(res.statusCode).toBe(204);
  });
});