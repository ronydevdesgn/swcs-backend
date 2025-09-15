import { FastifyRequest, FastifyReply } from "fastify";
import {
  CreateSumarioInput,
  UpdateSumarioInput,
  IdParam,
} from "../schemas/sumarios.schema";
import { Prisma } from "@prisma/client";
import { sendError } from "../utils/http";

export async function criarSumario(
  req: FastifyRequest<{ Body: CreateSumarioInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { Conteudo, Data, CursoID, ProfessorID } = req.body;

    // Validar data
    const dataSumario = new Date(Data);
    const hoje = new Date();
    hoje.setHours(23, 59, 59, 999);

    if (dataSumario > hoje) {
      return sendError(
        reply,
        400,
        "Não é possível criar sumários para datas futuras"
      );
    }

    // Usar transação para garantir consistência
    const sumario = await prisma.$transaction(async (tx) => {
      // Verificar se o curso e professor existem
      const [curso, professor] = await Promise.all([
        tx.curso.findUnique({
          where: { CursoID },
          select: {
            Nome: true,
            Professores: {
              select: {
                Professor: {
                  select: {
                    Nome: true,
                    Departamento: true,
                  },
                },
              },
            },
          },
        }),
        tx.professor.findUnique({
          where: { ProfessorID },
          select: {
            Nome: true,
            Cursos: {
              select: {
                CursoID: true,
              },
            },
          },
        }),
      ]);

      if (!curso) {
        return sendError(reply, 404, "Curso não encontrado");
      }

      if (!professor) {
        return sendError(reply, 404, "Professor não encontrado");
      }

      // Verificar se o professor está associado ao curso
      const professorNoCurso = professor.Cursos.some(
        (c) => c.CursoID === CursoID
      );
      if (!professorNoCurso) {
        return sendError(
          reply,
          403,
          "Professor não está associado a este curso"
        );
      }

      // Verificar se já existe sumário para esta data e curso
      const sumarioExistente = await tx.sumario.findFirst({
        where: {
          Data: dataSumario,
          CursoID,
        },
      });

      if (sumarioExistente) {
        return sendError(
          reply,
          409,
          "Já existe um sumário para este curso nesta data"
        );
      }

      // Criar o sumário
      return await tx.sumario.create({
        data: {
          Conteudo,
          Data: dataSumario,
          CursoID,
          ProfessorID,
        },
        include: {
          Curso: true,
          Professor: true,
        },
      });
    });

    return reply.status(201).send({
      mensagem: "Sumário criado com sucesso",
      data: sumario,
    });
  } catch (error) {
    req.log.error("Erro ao criar sumário:", error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return sendError(
        reply,
        409,
        "Já existe um sumário para este curso nesta data"
      );
    }
    return sendError(reply, 500, "Erro interno ao criar sumário");
  }
}

export async function listarSumarios(
  req: FastifyRequest<{
    Querystring: {
      page?: string;
      limit?: string;
      search?: string;
      cursoId?: string;
      professorId?: string;
      dataInicio?: string;
      dataFim?: string;
    };
  }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const {
      page = "1",
      limit = "10",
      search,
      cursoId,
      professorId,
      dataInicio,
      dataFim,
    } = req.query;

    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);

    // Construir filtros
    const where: Prisma.SumarioWhereInput = {
      ...(search && {
        Conteudo: { contains: search },
      }),
      ...(cursoId && { CursoID: parseInt(cursoId, 10) }),
      ...(professorId && { ProfessorID: parseInt(professorId, 10) }),
      ...(dataInicio || dataFim
        ? {
            Data: {
              ...(dataInicio && { gte: new Date(dataInicio) }),
              ...(dataFim && { lte: new Date(dataFim) }),
            },
          }
        : {}),
    };

    // Buscar sumários paginados e contar total
    const [sumarios, total] = await prisma.$transaction([
      prisma.sumario.findMany({
        where,
        include: {
          Curso: {
            select: {
              Nome: true,
              Descricao: true,
              Professores: {
                select: {
                  Professor: {
                    select: {
                      Nome: true,
                      Departamento: true,
                    },
                  },
                },
              },
            },
          },
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
        orderBy: {
          Data: "desc",
        },
        skip: (pageNum - 1) * limitNum,
        take: limitNum,
      }),
      prisma.sumario.count({ where }),
    ]);

    const totalPages = Math.ceil(total / limitNum);

    return reply.send({
      data: sumarios,
      meta: {
        total,
        page: pageNum,
        limit: limitNum,
        totalPages,
        hasNext: pageNum < totalPages,
        hasPrev: pageNum > 1,
      },
    });
  } catch (error) {
    req.log.error("Erro ao listar sumários:", error);
    return sendError(reply, 500, "Erro interno ao listar sumários");
  }
}

export async function buscarSumario(
  req: FastifyRequest<{ Params: IdParam }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { id } = req.params;

    const sumario = await prisma.sumario.findUnique({
      where: { SumarioID: id },
      include: {
        Curso: {
          select: {
            Nome: true,
            Descricao: true,
            Professores: {
              select: {
                Professor: {
                  select: {
                    Nome: true,
                    Departamento: true,
                  },
                },
              },
            },
          },
        },
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

    if (!sumario) {
      return sendError(reply, 404, "Sumário não encontrado");
    }

    return reply.send({ data: sumario });
  } catch (error) {
    req.log.error("Erro ao buscar sumário:", error);
    return sendError(reply, 500, "Erro interno ao buscar sumário");
  }
}

export async function atualizarSumario(
  req: FastifyRequest<{ Params: IdParam; Body: UpdateSumarioInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { id } = req.params;
    const dados = req.body;

    // Validar data se fornecida
    if (dados.Data) {
      const dataSumario = new Date(dados.Data);
      const hoje = new Date();
      hoje.setHours(23, 59, 59, 999);

      if (dataSumario > hoje) {
        return sendError(
          reply,
          400,
          "Não é possível definir datas futuras para sumários"
        );
      }
    }

    // Usar transação para garantir consistência
    const sumario = await prisma.$transaction(async (tx) => {
      // Verificar se o sumário existe
      const sumarioExiste = await tx.sumario.findUnique({
        where: { SumarioID: id },
        include: {
          Curso: {
            select: {
              CursoID: true,
            },
          },
        },
      });

      if (!sumarioExiste) {
        return sendError(reply, 404, "Sumário não encontrado");
      }

      // Se houver mudança de curso ou professor, fazer validações
      if (dados.CursoID || dados.ProfessorID) {
        const cursoId = dados.CursoID || sumarioExiste.Curso.CursoID;
        const professorId = dados.ProfessorID || sumarioExiste.ProfessorID;

        const [curso, professor] = await Promise.all([
          dados.CursoID
            ? tx.curso.findUnique({ where: { CursoID: dados.CursoID } })
            : null,
          dados.ProfessorID
            ? tx.professor.findUnique({
                where: { ProfessorID: dados.ProfessorID },
                include: {
                  Cursos: {
                    select: {
                      CursoID: true,
                    },
                  },
                },
              })
            : null,
        ]);

        if (dados.CursoID && !curso) {
          return sendError(reply, 404, "Curso não encontrado");
        }

        if (dados.ProfessorID) {
          if (!professor) {
            return sendError(reply, 404, "Professor não encontrado");
          }

          // Verificar se o professor está associado ao curso
          const professorNoCurso = professor.Cursos.some(
            (c) => c.CursoID === cursoId
          );
          if (!professorNoCurso) {
            return sendError(
              reply,
              403,
              "Professor não está associado a este curso"
            );
          }
        }

        // Verificar se já existe sumário para a data no curso
        if (dados.Data) {
          const sumarioExistente = await tx.sumario.findFirst({
            where: {
              Data: new Date(dados.Data),
              CursoID: cursoId,
              NOT: {
                SumarioID: id,
              },
            },
          });

          if (sumarioExistente) {
            return sendError(
              reply,
              409,
              "Já existe um sumário para este curso nesta data"
            );
          }
        }
      }

      // Atualizar o sumário
      return await tx.sumario.update({
        where: { SumarioID: id },
        data: {
          Conteudo: dados.Conteudo,
          Data: dados.Data ? new Date(dados.Data) : undefined,
          CursoID: dados.CursoID,
          ProfessorID: dados.ProfessorID,
        },
        include: {
          Curso: {
            select: {
              Nome: true,
              Descricao: true,
            },
          },
          Professor: {
            select: {
              Nome: true,
              Departamento: true,
            },
          },
        },
      });
    });

    return reply.send({
      mensagem: "Sumário atualizado com sucesso",
      data: sumario,
    });
  } catch (error) {
    req.log.error("Erro ao atualizar sumário:", error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return sendError(
        reply,
        409,
        "Já existe um sumário para este curso nesta data"
      );
    }
    return sendError(reply, 500, "Erro interno ao atualizar sumário");
  }
}

export async function deletarSumario(
  req: FastifyRequest<{ Params: IdParam }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { id } = req.params;

    // Verificar se o sumário existe antes de tentar excluir
    const sumario = await prisma.sumario.findUnique({
      where: { SumarioID: id },
      include: {
        Curso: {
          select: {
            Nome: true,
          },
        },
      },
    });

    if (!sumario) {
      return sendError(reply, 404, "Sumário não encontrado");
    }

    // Excluir o sumário
    await prisma.sumario.delete({
      where: { SumarioID: id },
    });

    return reply.send({
      mensagem: "Sumário removido com sucesso",
      data: {
        id,
        curso: sumario.Curso.Nome,
        data: sumario.Data,
      },
    });
  } catch (error) {
    req.log.error("Erro ao deletar sumário:", error);
    return sendError(reply, 500, "Erro interno ao deletar sumário");
  }
}
