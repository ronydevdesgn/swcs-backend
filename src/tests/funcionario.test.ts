import Fastify from 'fastify'
import { app } from '../server.js'

describe('Funcionario Routes', () => {
  let server: ReturnType<typeof Fastify>
  let funcionarioId: number

  beforeAll(async () => {
    await app.ready()
    server = Fastify()
    await server.register(app)
    await server.ready()
  })

  afterAll(() => server.close())

  it('should create a new funcionario', async () => {
    const res = await server.inject({
      method: 'POST',
      url: '/funcionarios',
      payload: {
        nome: 'Funcionário Teste',
        email: `teste${Date.now()}@empresa.com`,
        cargo: 'Secretário'
      }
    })

    expect(res.statusCode).toBe(201)
    const body = JSON.parse(res.payload)
    expect(body).toHaveProperty('funcionarioID')
    funcionarioId = body.funcionarioID
  })

  it('should list all funcionarios', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/funcionarios'
    })
    expect(res.statusCode).toBe(200)
    const list = JSON.parse(res.payload)
    expect(Array.isArray(list)).toBe(true)
  })

  it('should get a funcionario by ID', async () => {
    const res = await server.inject({
      method: 'GET',
      url: `/funcionarios/${funcionarioId}`
    })
    expect(res.statusCode).toBe(200)
    const body = JSON.parse(res.payload)
    expect(body.funcionarioID).toBe(funcionarioId)
  })

  it('should update a funcionario', async () => {
    const res = await server.inject({
      method: 'PUT',
      url: `/funcionarios/${funcionarioId}`,
      payload: {
        nome: 'Funcionário Atualizado',
        email: `atualizado${Date.now()}@empresa.com`,
        cargo: 'Sumarista'
      }
    })
    expect(res.statusCode).toBe(200)
  })

  it('should delete a funcionario', async () => {
    const res = await server.inject({
      method: 'DELETE',
      url: `/funcionarios/${funcionarioId}`
    })
    expect(res.statusCode).toBe(204)
  })
})