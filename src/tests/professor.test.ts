import Fastify from 'fastify'
import { app } from '../server.js'

describe('Professor Routes', () => {
  let server: ReturnType<typeof Fastify>
  let professorId: number

  beforeAll(async () => {
    await app.ready()
    server = Fastify()
    await server.register(app)
    await server.ready()
  })

  afterAll(() => server.close())

  it('should create a new professor', async () => {
    const res = await server.inject({
      method: 'POST',
      url: '/professores',
      payload: {
        nome: 'Prof. Teste',
        departamento: 'Ciência da Computação',
        cargaHoraria: 20
      }
    })

    expect(res.statusCode).toBe(201)
    const body = JSON.parse(res.payload)
    expect(body).toHaveProperty('professorID')
    professorId = body.professorID
  })

  it('should list all professores', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/professores'
    })
    expect(res.statusCode).toBe(200)
    const list = JSON.parse(res.payload)
    expect(Array.isArray(list)).toBe(true)
  })

  it('should get a professor by ID', async () => {
    const res = await server.inject({
      method: 'GET',
      url: `/professores/${professorId}`
    })
    expect(res.statusCode).toBe(200)
    const body = JSON.parse(res.payload)
    expect(body.professorID).toBe(professorId)
  })

  it('should update a professor', async () => {
    const res = await server.inject({
      method: 'PUT',
      url: `/professores/${professorId}`,
      payload: {
        nome: 'Prof. Atualizado',
        departamento: 'Matemática',
        cargaHoraria: 30
      }
    })
    expect(res.statusCode).toBe(200)
  })

  it('should delete a professor', async () => {
    const res = await server.inject({
      method: 'DELETE',
      url: `/professores/${professorId}`
    })
    expect(res.statusCode).toBe(204)
  })
})