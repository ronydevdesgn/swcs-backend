import { Prisma } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import {
  CreateSumarioInput,
  IdParam,
  UpdateSumarioInput,
} from "../schemas/sumarios.schema";
import { sendError } from "../utils/http";

export async function criarSumario(
  req: FastifyRequest<{ Body: CreateSumarioInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { conteudo, data, cursoId, professorId } = req.body;

    // Validar data
    const dataSumario = new Date(data);
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
          where: { cursoId: cursoId },
          select: {
            nome: true,
            professores: {
              select: {
                professor: {
                  select: {
                    nome: true,
                    departamento: true,
                  },
                },
              },
            },
          },
        }),
        tx.professor.findUnique({
          where: { professorId: professorId },
          select: {
            nome: true,
            cursos: {
              select: {
                cursoId: true,
              },
            },
          },
        }),
      ]);

      if (!curso) {
        throw new Error("Curso não encontrado");
      }

      if (!professor) {
        throw new Error("Professor não encontrado");
      }

      // Verificar se o professor está associado ao curso
      const professorNoCurso = professor.cursos.some(
        (c) => c.cursoId === cursoId
      );
      if (!professorNoCurso) {
        throw new Error("Professor não está associado a este curso");
      }

      // Verificar se já existe sumário para esta data e curso
      const sumarioExistente = await tx.sumario.findFirst({
        where: {
          data: dataSumario,
          cursoId,
        },
      });

      if (sumarioExistente) {
        throw new Error("Já existe um sumário para este curso nesta data");
      }

      // Criar o sumário
      return await tx.sumario.create({
        data: {
          conteudo,
          data: dataSumario,
          cursoId,
          professorId,
        },
        include: {
          curso: true,
          professor: true,
        },
      });
    });

    return reply.status(201).send({
      mensagem: "Sumário criado com sucesso",
      data: sumario,
    });
  } catch (error) {
    req.log.error("Erro ao criar sumário:", error);

    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";

    if (errorMessage === "Curso não encontrado" || errorMessage === "Professor não encontrado") {
      return sendError(reply, 404, errorMessage);
    }

    if (errorMessage === "Professor não está associado a este curso") {
      return sendError(reply, 403, errorMessage);
    }

    if (errorMessage === "Já existe um sumário para este curso nesta data") {
      return sendError(reply, 409, errorMessage);
    }

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
        conteudo: { contains: search },
      }),
      ...(cursoId && { cursoId: parseInt(cursoId, 10) }),
      ...(professorId && { professorId: parseInt(professorId, 10) }),
      ...(dataInicio || dataFim
        ? {
            data: {
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
          curso: {
            select: {
              nome: true,
              descricao: true,
              professores: {
                select: {
                  professor: {
                    select: {
                      nome: true,
                      departamento: true,
                    },
                  },
                },
              },
            },
          },
          professor: {
            select: {
              nome: true,
              departamento: true,
              usuario: {
                select: {
                  email: true,
                },
              },
            },
          },
        },
        orderBy: {
          data: "desc",
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
      where: { sumarioId: id },
      include: {
        curso: {
          select: {
            nome: true,
            descricao: true,
            professores: {
              select: {
                professor: {
                  select: {
                    nome: true,
                    departamento: true,
                  },
                },
              },
            },
          },
        },
        professor: {
          select: {
            nome: true,
            departamento: true,
            usuario: {
              select: {
                email: true,
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
    if (dados.data) {
      const dataSumario = new Date(dados.data);
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
        where: { sumarioId: id },
        include: {
          curso: {
            select: {
              cursoId: true,
            },
          },
        },
      });

      if (!sumarioExiste) {
        return sendError(reply, 404, "Sumário não encontrado");
      }

      // Se houver mudança de curso ou professor, fazer validações
      if (dados.cursoId || dados.professorId) {
        const cursoId = dados.cursoId || sumarioExiste.curso.cursoId;
        const professorId = dados.professorId || sumarioExiste.professorId;

        const [curso, professor] = await Promise.all([
          dados.cursoId
            ? tx.curso.findUnique({ where: { cursoId: dados.cursoId } })
            : null,
          dados.professorId
            ? tx.professor.findUnique({
                where: { professorId: dados.professorId },
                include: {
                  cursos: {
                    select: {
                      cursoId: true,
                    },
                  },
                },
              })
            : null,
        ]);

        if (dados.cursoId && !curso) {
          return sendError(reply, 404, "Curso não encontrado");
        }

        if (dados.professorId) {
          if (!professor) {
            return sendError(reply, 404, "Professor não encontrado");
          }

          // Verificar se o professor está associado ao curso
          const professorNoCurso = professor.cursos.some(
            (c) => c.cursoId === cursoId
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
        if (dados.data) {
          const sumarioExistente = await tx.sumario.findFirst({
            where: {
              data: new Date(dados.data),
              cursoId: cursoId,
              NOT: {
                sumarioId: id,
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
        where: { sumarioId: id },
        data: {
          conteudo: dados.conteudo,
          data: dados.data ? new Date(dados.data) : undefined,
          cursoId: dados.cursoId,
          professorId: dados.professorId,
        },
        include: {
          curso: {
            select: {
              nome: true,
              descricao: true,
            },
          },
          professor: {
            select: {
              nome: true,
              departamento: true,
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
      where: { sumarioId: id },
      include: {
        curso: {
          select: {
            nome: true,
          },
        },
      },
    });

    if (!sumario) {
      return sendError(reply, 404, "Sumário não encontrado");
    }

    // Excluir o sumário
    await prisma.sumario.delete({
      where: { sumarioId: id },
    });

    return reply.send({
      mensagem: "Sumário removido com sucesso",
      data: {
        id,
        curso: sumario.curso.nome,
        data: sumario.data,
      },
    });
  } catch (error) {
    req.log.error("Erro ao deletar sumário:", error);
    return sendError(reply, 500, "Erro interno ao deletar sumário");
  }
}
