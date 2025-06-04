import Fastify from 'fastify'
import { app } from '../server.js'

describe('Usuario Routes', () => {
  let server: ReturnType<typeof Fastify>
  let usuarioId: number

  beforeAll(async () => {
    await app.ready()
    server = Fastify()
    await server.register(app)
    await server.ready()
  })

  afterAll(() => server.close())

  it('should create a new usuario', async () => {
    const res = await server.inject({
      method: 'POST',
      url: '/usuarios',
      payload: {
        nome: 'Usuário Teste',
        email: 'usuarioteste@example.com',
        senha: 'senha123',
        tipo: 'FUNCIONARIO'
      }
    })

    expect(res.statusCode).toBe(201)
    const body = JSON.parse(res.payload)
    expect(body).toHaveProperty('usuarioID')
    usuarioId = body.usuarioID
  })

  it('should get all usuarios', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/usuarios'
    })
    expect(res.statusCode).toBe(200)
    const usuarios = JSON.parse(res.payload)
    expect(Array.isArray(usuarios)).toBe(true)
  })

  it('should get a single usuario by ID', async () => {
    const res = await server.inject({
      method: 'GET',
      url: `/usuarios/${usuarioId}`
    })
    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res.payload)).toHaveProperty('usuarioID', usuarioId)
  })

  it('should update a usuario', async () => {
    const res = await server.inject({
      method: 'PUT',
      url: `/usuarios/${usuarioId}`,
      payload: {
        nome: 'Usuário Atualizado',
        tipo: 'FUNCIONARIO'
      }
    })
    expect(res.statusCode).toBe(200)
  })

  it('should delete a usuario', async () => {
    const res = await server.inject({
      method: 'DELETE',
      url: `/usuarios/${usuarioId}`
    })
    expect(res.statusCode).toBe(204)
  })
})