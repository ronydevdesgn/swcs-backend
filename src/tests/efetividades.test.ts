import Fastify from 'fastify'
import { app } from '../server'

describe('Efetividade Routes', () => {
  let server: ReturnType<typeof Fastify>
  let efetividadeId: number
  let professorId = 1 // Ajuste conforme o ProfessorID existente no seu banco

  beforeAll(async () => {
    await app.ready()
    server = Fastify()
    await server.register(app)
    await server.ready()
  })

  afterAll(() => server.close())

  it('should create a new efetividade', async () => {
    const res = await server.inject({
      method: 'POST',
      url: '/efetividades',
      payload: {
        data: new Date().toISOString(),
        horasTrabalhadas: 5,
        professorID: professorId
      }
    })

    expect(res.statusCode).toBe(201)
    const body = JSON.parse(res.payload)
    expect(body).toHaveProperty('efetividadeID')
    efetividadeId = body.efetividadeID
  })

  it('should list all efetividades', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/efetividades'
    })

    expect(res.statusCode).toBe(200)
    const efetividades = JSON.parse(res.payload)
    expect(Array.isArray(efetividades)).toBe(true)
  })

  it('should get an efetividade by ID', async () => {
    const res = await server.inject({
      method: 'GET',
      url: `/efetividades/${efetividadeId}`
    })

    expect(res.statusCode).toBe(200)
    const efetividade = JSON.parse(res.payload)
    expect(efetividade.efetividadeID).toBe(efetividadeId)
  })

  it('should update an efetividade', async () => {
    const res = await server.inject({
      method: 'PUT',
      url: `/efetividades/${efetividadeId}`,
      payload: {
        horasTrabalhadas: 6
      }
    })

    expect(res.statusCode).toBe(200)
  })

  it('should delete an efetividade', async () => {
    const res = await server.inject({
      method: 'DELETE',
      url: `/efetividades/${efetividadeId}`
    })

    expect(res.statusCode).toBe(204)
  })
})