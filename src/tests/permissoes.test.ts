import Fastify from 'fastify'
import { app } from '../server'

describe('Permissao Routes', () => {
  let server: ReturnType<typeof Fastify>
  let permissaoId: number

  beforeAll(async () => {
    await app.ready()
    server = Fastify()
    await server.register(app)
    await server.ready()
  })

  afterAll(() => server.close())

  it('should create a new permissao', async () => {
    const res = await server.inject({
      method: 'POST',
      url: '/permissoes',
      payload: {
        descricao: 'Acesso total ao sistema'
      }
    })

    expect(res.statusCode).toBe(201)
    const body = JSON.parse(res.payload)
    expect(body).toHaveProperty('permissaoID')
    permissaoId = body.permissaoID
  })

  it('should list all permissoes', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/permissoes'
    })

    expect(res.statusCode).toBe(200)
    const permissoes = JSON.parse(res.payload)
    expect(Array.isArray(permissoes)).toBe(true)
  })

  it('should get a permissao by ID', async () => {
    const res = await server.inject({
      method: 'GET',
      url: `/permissoes/${permissaoId}`
    })

    expect(res.statusCode).toBe(200)
    const permissao = JSON.parse(res.payload)
    expect(permissao.permissaoID).toBe(permissaoId)
  })

  it('should update a permissao', async () => {
    const res = await server.inject({
      method: 'PUT',
      url: `/permissoes/${permissaoId}`,
      payload: {
        descricao: 'Permissão de administrador'
      }
    })

    expect(res.statusCode).toBe(200)
  })

  it('should delete a permissao', async () => {
    const res = await server.inject({
      method: 'DELETE',
      url: `/permissoes/${permissaoId}`
    })

    expect(res.statusCode).toBe(204)
  })
})