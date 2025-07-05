import Fastify from 'fastify'
import { app } from '../server'
import { Estado } from '@prisma/client'

describe('Presenca Routes', () => {
  let server: ReturnType<typeof Fastify>
  let presencaId: number
  let professorId = 1 // Altere conforme um Professor válido no seu banco
  let cursoId = 1 // Altere conforme um Curso válido no seu banco

  beforeAll(async () => {
    await app.ready()
    server = Fastify()
    await server.register(app)
    await server.ready()
  })

  afterAll(() => server.close())

  it('should create a new presenca', async () => {
    const res = await server.inject({
      method: 'POST',
      url: '/presencas',
      payload: {
        data: new Date().toISOString(),
        estado: Estado.PRESENTE,
        professorID: professorId,
        cursoID: cursoId
      }
    })

    expect(res.statusCode).toBe(201)
    const body = JSON.parse(res.payload)
    expect(body).toHaveProperty('presencaID')
    presencaId = body.presencaID
  })

  it('should list all presencas', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/presencas'
    })

    expect(res.statusCode).toBe(200)
    const presencas = JSON.parse(res.payload)
    expect(Array.isArray(presencas)).toBe(true)
  })

  it('should get a presenca by ID', async () => {
    const res = await server.inject({
      method: 'GET',
      url: `/presencas/${presencaId}`
    })

    expect(res.statusCode).toBe(200)
    const presenca = JSON.parse(res.payload)
    expect(presenca.presencaID).toBe(presencaId)
  })

  it('should update a presenca', async () => {
    const res = await server.inject({
      method: 'PUT',
      url: `/presencas/${presencaId}`,
      payload: {
        estado: Estado.FALTA
      }
    })

    expect(res.statusCode).toBe(200)
  })

  it('should delete a presenca', async () => {
    const res = await server.inject({
      method: 'DELETE',
      url: `/presencas/${presencaId}`
    })

    expect(res.statusCode).toBe(204)
  })
})