import Fastify from 'fastify'
import { app } from '../server'

describe('Sumario Routes', () => {
  let server: ReturnType<typeof Fastify>
  let sumarioId: number
  const cursoId = 1 // ajuste conforme seu seed
  const professorId = 1 // ajuste conforme seu seed

  beforeAll(async () => {
    await app.ready()
    server = Fastify()
    await server.register(app)
    await server.ready()
  })

  afterAll(() => server.close())

  it('should create a new sumario', async () => {
    const res = await server.inject({
      method: 'POST',
      url: '/sumarios',
      payload: {
        data: new Date().toISOString(),
        conteudo: 'Revisão de conteúdos da aula anterior.',
        cursoID: cursoId,
        professorID: professorId
      }
    })

    expect(res.statusCode).toBe(201)
    const body = JSON.parse(res.payload)
    expect(body).toHaveProperty('sumarioID')
    sumarioId = body.sumarioID
  })

  it('should list all sumarios', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/sumarios'
    })

    expect(res.statusCode).toBe(200)
    const sumarios = JSON.parse(res.payload)
    expect(Array.isArray(sumarios)).toBe(true)
  })

  it('should get a sumario by ID', async () => {
    const res = await server.inject({
      method: 'GET',
      url: `/sumarios/${sumarioId}`
    })

    expect(res.statusCode).toBe(200)
    const sumario = JSON.parse(res.payload)
    expect(sumario.sumarioID).toBe(sumarioId)
  })

  it('should update a sumario', async () => {
    const res = await server.inject({
      method: 'PUT',
      url: `/sumarios/${sumarioId}`,
      payload: {
        conteudo: 'Conteúdo atualizado: nova matéria adicionada.'
      }
    })

    expect(res.statusCode).toBe(200)
  })

  it('should delete a sumario', async () => {
    const res = await server.inject({
      method: 'DELETE',
      url: `/sumarios/${sumarioId}`
    })

    expect(res.statusCode).toBe(204)
  })
})