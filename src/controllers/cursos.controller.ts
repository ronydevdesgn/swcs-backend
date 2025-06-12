import { FastifyRequest, FastifyReply } from "fastify";
import {
  CreateCursoInput,
  UpdateCursoInput,
  IdParam,
} from "../schemas/cursos.schema";

export async function criarCurso(
  req: FastifyRequest<{ Body: CreateCursoInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { Nome, Descricao, ProfessorID } = req.body;

    // Usar transação para garantir consistência
    const curso = await prisma.$transaction(async (tx) => {
      // Verificar se o professor existe e está ativo
      const professor = await tx.professor.findUnique({
        where: { ProfessorID },
        include: {
          Usuario: {
            select: {
              Email: true,
              Tipo: true,
            },
          },
        },
      });

      if (!professor) {
        throw { code: "NOT_FOUND", message: "Professor não encontrado" };
      }

      // Verificar se já existe um curso com o mesmo nome
      const cursoExistente = await tx.curso.findFirst({
        where: { Nome: { equals: Nome, mode: "insensitive" } },
      });

      if (cursoExistente) {
        throw {
          code: "DUPLICATE",
          message: "Já existe um curso com este nome",
        };
      }

      // Criar o curso
      return await tx.curso.create({
        data: {
          Nome,
          Descricao,
          Professor: {
            connect: { ProfessorID },
          },
        },
        include: {
          Professor: {
            select: {
              Nome: true,
              Departamento: true,
              Usuario: {
                select: {
                  Email: true,
                },
              },
            },
          },
        },
      });
    });

    return reply.status(201).send({
      mensagem: "Curso criado com sucesso",
      data: curso,
    });
  } catch (error) {
    req.log.error(error);

    if (error.code === "NOT_FOUND") {
      return reply.status(404).send({
        mensagem: error.message,
      });
    }

    if (error.code === "DUPLICATE") {
      return reply.status(409).send({
        mensagem: error.message,
      });
    }

    return reply.status(500).send({
      mensagem: "Erro interno ao criar curso",
      detalhes:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}

export async function listarCursos(req: FastifyRequest, reply: FastifyReply) {
  const prisma = req.server.prisma;

  try {
    const { search, departamento } = req.query as {
      search?: string;
      departamento?: string;
    };

    // Construir query dinâmica
    const where = {
      ...(search && {
        OR: [
          { Nome: { contains: search, mode: "insensitive" } },
          { Descricao: { contains: search, mode: "insensitive" } },
        ],
      }),
      ...(departamento && {
        Professor: {
          Departamento: { equals: departamento, mode: "insensitive" },
        },
      }),
    };

    const cursos = await prisma.curso.findMany({
      where,
      include: {
        Professor: {
          select: {
            Nome: true,
            Departamento: true,
            Usuario: {
              select: {
                Email: true,
              },
            },
          },
        },
        Sumarios: {
          select: {
            SumarioID: true,
            Data: true,
            Conteudo: true,
          },
          orderBy: {
            Data: "desc",
          },
          take: 5, // Últimos 5 sumários
        },
        _count: {
          select: {
            Sumarios: true,
          },
        },
      },
      orderBy: {
        Nome: "asc",
      },
    });

    return reply.send({
      data: cursos,
      meta: {
        total: cursos.length,
      },
    });
  } catch (error) {
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao listar cursos",
      detalhes:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}

export async function buscarCurso(
  req: FastifyRequest<{ Params: IdParam }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { id } = req.params;

    const curso = await prisma.curso.findUnique({
      where: { CursoID: id },
      include: {
        Professor: {
          select: {
            Nome: true,
            Departamento: true,
            Usuario: {
              select: {
                Email: true,
              },
            },
          },
        },
        Sumarios: {
          orderBy: {
            Data: "desc",
          },
          include: {
            Professor: {
              select: {
                Nome: true,
              },
            },
          },
        },
        _count: {
          select: {
            Sumarios: true,
          },
        },
      },
    });

    if (!curso) {
      return reply.status(404).send({
        mensagem: "Curso não encontrado",
      });
    }

    return reply.send({ data: curso });
  } catch (error) {
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao buscar curso",
      detalhes:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}

export async function atualizarCurso(
  req: FastifyRequest<{ Params: IdParam; Body: UpdateCursoInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { id } = req.params;
    const dados = req.body;

    // Usar transação para garantir consistência
    const curso = await prisma.$transaction(async (tx) => {
      // Verificar se o curso existe
      const cursoExiste = await tx.curso.findUnique({
        where: { CursoID: id },
      });

      if (!cursoExiste) {
        throw { code: "NOT_FOUND", message: "Curso não encontrado" };
      }

      // Se o nome foi alterado, verificar duplicidade
      if (dados.Nome && dados.Nome !== cursoExiste.Nome) {
        const cursoNomeExiste = await tx.curso.findFirst({
          where: {
            Nome: { equals: dados.Nome, mode: "insensitive" },
            NOT: { CursoID: id },
          },
        });

        if (cursoNomeExiste) {
          throw {
            code: "DUPLICATE",
            message: "Já existe um curso com este nome",
          };
        }
      }

      // Se houver mudança de professor, verificar se existe
      if (dados.ProfessorID) {
        const professor = await tx.professor.findUnique({
          where: { ProfessorID: dados.ProfessorID },
        });

        if (!professor) {
          throw { code: "NOT_FOUND", message: "Professor não encontrado" };
        }
      }

      // Atualizar o curso
      return await tx.curso.update({
        where: { CursoID: id },
        data: {
          Nome: dados.Nome,
          Descricao: dados.Descricao,
          Professor: dados.ProfessorID
            ? {
                connect: { ProfessorID: dados.ProfessorID },
              }
            : undefined,
        },
        include: {
          Professor: {
            select: {
              Nome: true,
              Departamento: true,
              Usuario: {
                select: {
                  Email: true,
                },
              },
            },
          },
        },
      });
    });

    return reply.send({
      mensagem: "Curso atualizado com sucesso",
      data: curso,
    });
  } catch (error) {
    req.log.error(error);

    if (error.code === "NOT_FOUND") {
      return reply.status(404).send({
        mensagem: error.message,
      });
    }

    if (error.code === "DUPLICATE") {
      return reply.status(409).send({
        mensagem: error.message,
      });
    }

    return reply.status(500).send({
      mensagem: "Erro interno ao atualizar curso",
      detalhes:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}
