import { FastifyRequest, FastifyReply } from "fastify";
import {
  CreateSumarioInput,
  UpdateSumarioInput,
  IdParam,
} from "../schemas/sumarios.schema";

const MIN_CONTEUDO_LENGTH = 10;
const MAX_CONTEUDO_LENGTH = 2000;

export async function criarSumario(
  req: FastifyRequest<{ Body: CreateSumarioInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { Conteudo, Data, CursoID, ProfessorID } = req.body;

    // Validar conteúdo
    if (Conteudo.length < MIN_CONTEUDO_LENGTH) {
      return reply.status(400).send({
        mensagem: `O conteúdo deve ter no mínimo ${MIN_CONTEUDO_LENGTH} caracteres`,
      });
    }

    if (Conteudo.length > MAX_CONTEUDO_LENGTH) {
      return reply.status(400).send({
        mensagem: `O conteúdo deve ter no máximo ${MAX_CONTEUDO_LENGTH} caracteres`,
      });
    }

    // Validar data
    const dataSumario = new Date(Data);
    const hoje = new Date();
    hoje.setHours(23, 59, 59, 999);

    if (dataSumario > hoje) {
      return reply.status(400).send({
        mensagem: "Não é possível criar sumários para datas futuras",
      });
    }

    // Usar transação para garantir consistência
    const sumario = await prisma.$transaction(async (tx) => {
      // Verificar se o curso e professor existem
      const [curso, professor] = await Promise.all([
        tx.curso.findUnique({
          where: { CursoID },
          select: {
            Nome: true,
            Professor: {
              select: {
                ProfessorID: true,
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
        throw { code: "NOT_FOUND", message: "Curso não encontrado" };
      }

      if (!professor) {
        throw { code: "NOT_FOUND", message: "Professor não encontrado" };
      }

      // Verificar se o professor está associado ao curso
      const professorNoCurso = professor.Cursos.some(
        (c) => c.CursoID === CursoID
      );
      if (!professorNoCurso) {
        throw {
          code: "UNAUTHORIZED",
          message: "Professor não está associado a este curso",
        };
      }

      // Verificar se já existe sumário para esta data e curso
      const sumarioExistente = await tx.sumario.findFirst({
        where: {
          Data: dataSumario,
          CursoID,
        },
      });

      if (sumarioExistente) {
        throw {
          code: "DUPLICATE",
          message: "Já existe um sumário para este curso nesta data",
        };
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
    req.log.error(error);

    if (error.code === "NOT_FOUND") {
      return reply.status(404).send({ mensagem: error.message });
    }

    if (error.code === "UNAUTHORIZED") {
      return reply.status(403).send({ mensagem: error.message });
    }

    if (error.code === "DUPLICATE") {
      return reply.status(409).send({ mensagem: error.message });
    }

    return reply.status(500).send({
      mensagem: "Erro interno ao criar sumário",
      detalhes:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}

export async function listarSumarios(req: FastifyRequest, reply: FastifyReply) {
  const prisma = req.server.prisma;

  try {
    const {
      page = 1,
      limit = 10,
      search,
      cursoId,
      professorId,
      dataInicio,
      dataFim,
    } = req.query as {
      page?: number;
      limit?: number;
      search?: string;
      cursoId?: string;
      professorId?: string;
      dataInicio?: string;
      dataFim?: string;
    };

    // Construir filtros
    const where: any = {};

    if (search) {
      where.Conteudo = { contains: search, mode: "insensitive" };
    }

    if (cursoId) {
      where.CursoID = parseInt(cursoId);
    }

    if (professorId) {
      where.ProfessorID = parseInt(professorId);
    }

    if (dataInicio || dataFim) {
      where.Data = {};
      if (dataInicio) where.Data.gte = new Date(dataInicio);
      if (dataFim) where.Data.lte = new Date(dataFim);
    }

    // Buscar sumários paginados e contar total
    const [sumarios, total] = await prisma.$transaction([
      prisma.sumario.findMany({
        where,
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
        orderBy: {
          Data: "desc",
        },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.sumario.count({ where }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return reply.send({
      data: sumarios,
      meta: {
        total,
        page,
        limit,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    });
  } catch (error) {
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao listar sumários",
      detalhes:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
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
            Professor: {
              select: {
                Nome: true,
                Departamento: true,
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
      return reply.status(404).send({ mensagem: "Sumário não encontrado" });
    }

    return reply.send({ data: sumario });
  } catch (error) {
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao buscar sumário",
      detalhes:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
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

    // Validar conteúdo se fornecido
    if (dados.Conteudo) {
      if (dados.Conteudo.length < MIN_CONTEUDO_LENGTH) {
        return reply.status(400).send({
          mensagem: `O conteúdo deve ter no mínimo ${MIN_CONTEUDO_LENGTH} caracteres`,
        });
      }

      if (dados.Conteudo.length > MAX_CONTEUDO_LENGTH) {
        return reply.status(400).send({
          mensagem: `O conteúdo deve ter no máximo ${MAX_CONTEUDO_LENGTH} caracteres`,
        });
      }
    }

    // Validar data se fornecida
    if (dados.Data) {
      const dataSumario = new Date(dados.Data);
      const hoje = new Date();
      hoje.setHours(23, 59, 59, 999);

      if (dataSumario > hoje) {
        return reply.status(400).send({
          mensagem: "Não é possível definir datas futuras para sumários",
        });
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
        throw { code: "NOT_FOUND", message: "Sumário não encontrado" };
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
          throw { code: "NOT_FOUND", message: "Curso não encontrado" };
        }

        if (dados.ProfessorID) {
          if (!professor) {
            throw { code: "NOT_FOUND", message: "Professor não encontrado" };
          }

          // Verificar se o professor está associado ao curso
          const professorNoCurso = professor.Cursos.some(
            (c) => c.CursoID === cursoId
          );
          if (!professorNoCurso) {
            throw {
              code: "UNAUTHORIZED",
              message: "Professor não está associado a este curso",
            };
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
            throw {
              code: "DUPLICATE",
              message: "Já existe um sumário para este curso nesta data",
            };
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
    req.log.error(error);

    if (error.code === "NOT_FOUND") {
      return reply.status(404).send({ mensagem: error.message });
    }

    if (error.code === "UNAUTHORIZED") {
      return reply.status(403).send({ mensagem: error.message });
    }

    if (error.code === "DUPLICATE") {
      return reply.status(409).send({ mensagem: error.message });
    }

    return reply.status(500).send({
      mensagem: "Erro interno ao atualizar sumário",
      detalhes:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
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
      return reply.status(404).send({ mensagem: "Sumário não encontrado" });
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
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao deletar sumário",
      detalhes:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}
