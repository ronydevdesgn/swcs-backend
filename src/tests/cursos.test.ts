import Fastify from 'fastify'
import { app } from '../server'

describe('Curso Routes', () => {
  let server: ReturnType<typeof Fastify>
  let cursoId: number

  beforeAll(async () => {
    await app.ready()
    server = Fastify()
    await server.register(app)
    await server.ready()
  })

  afterAll(() => server.close())

  it('should create a new curso', async () => {
    const res = await server.inject({
      method: 'POST',
      url: '/cursos',
      payload: {
        nome: 'Engenharia de Software',
        descricao: 'Curso focado em desenvolvimento de software e boas práticas.'
      }
    })

    expect(res.statusCode).toBe(201)
    const body = JSON.parse(res.payload)
    expect(body).toHaveProperty('cursoID')
    cursoId = body.cursoID
  })

  it('should list all cursos', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/cursos'
    })

    expect(res.statusCode).toBe(200)
    const cursos = JSON.parse(res.payload)
    expect(Array.isArray(cursos)).toBe(true)
  })

  it('should get a curso by ID', async () => {
    const res = await server.inject({
      method: 'GET',
      url: `/cursos/${cursoId}`
    })

    expect(res.statusCode).toBe(200)
    const curso = JSON.parse(res.payload)
    expect(curso.cursoID).toBe(cursoId)
  })

  it('should update a curso', async () => {
    const res = await server.inject({
      method: 'PUT',
      url: `/cursos/${cursoId}`,
      payload: {
        nome: 'Engenharia de Computação',
        descricao: 'Abrange hardware e software com ênfase em sistemas embarcados.'
      }
    })

    expect(res.statusCode).toBe(200)
  })

  it('should delete a curso', async () => {
    const res = await server.inject({
      method: 'DELETE',
      url: `/cursos/${cursoId}`
    })

    expect(res.statusCode).toBe(204)
  })
})