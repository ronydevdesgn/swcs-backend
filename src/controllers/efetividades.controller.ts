import { FastifyRequest, FastifyReply } from "fastify";
import {
  CreateEfetividadeInput,
  UpdateEfetividadeInput,
  IdParam,
  PeriodoInput,
} from "../schemas/efetividades.schema";
import { AppError } from "../types/errors";
import { Prisma } from "@prisma/client";

export async function registrarEfetividade(
  req: FastifyRequest<{ Body: CreateEfetividadeInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { Data, HorasTrabalhadas, ProfessorID } = req.body;

    // Validar data
    const dataEfetividade = new Date(Data);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    if (dataEfetividade > hoje) {
      throw new AppError(
        "VALIDATION_ERROR",
        "Não é possível registrar efetividade para datas futuras"
      );
    }

    // Usar transação para garantir consistência
    const efetividade = await prisma.$transaction(async (tx) => {
      // Verificar se o professor existe
      const professor = await tx.professor.findUnique({
        where: { ProfessorID },
        select: {
          Nome: true,
          Departamento: true,
          CargaHoraria: true,
          Usuario: {
            select: {
              Email: true,
            },
          },
        },
      });

      if (!professor) {
        throw new AppError("NOT_FOUND", "Professor não encontrado");
      }

      // Verificar se já existe registro para esta data
      const efetividadeExistente = await tx.efetividade.findFirst({
        where: {
          Data: dataEfetividade,
          ProfessorID,
        },
      });

      if (efetividadeExistente) {
        throw new AppError(
          "DUPLICATE",
          "Já existe registro de efetividade para esta data"
        );
      }

      // Validar horas trabalhadas
      if (HorasTrabalhadas > professor.CargaHoraria) {
        throw new AppError(
          "INVALID_HOURS",
          `As horas trabalhadas não podem exceder a carga horária do professor (${professor.CargaHoraria}h)`
        );
      }

      // Criar o registro
      return await tx.efetividade.create({
        data: {
          Data: dataEfetividade,
          HorasTrabalhadas,
          ProfessorID,
        },
        include: {
          Professor: {
            select: {
              Nome: true,
              Departamento: true,
              CargaHoraria: true,
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
      mensagem: "Efetividade registrada com sucesso",
      data: efetividade,
    });
  } catch (error) {
    req.log.error(error);

    if (error instanceof AppError) {
      if (error.code === "VALIDATION_ERROR") {
        return reply.status(400).send({
          mensagem: error.message,
        });
      }

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

      if (error.code === "INVALID_HOURS") {
        return reply.status(400).send({
          mensagem: error.message,
        });
      }
    }

    return reply.status(500).send({
      mensagem: "Erro interno ao registrar efetividade",
      detalhes:
        process.env.NODE_ENV === "development" && error instanceof Error
          ? error.message
          : undefined,
    });
  }
}

export async function buscarEfetividadesPorPeriodo(
  req: FastifyRequest<{ Querystring: PeriodoInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { dataInicio, dataFim } = req.query;

    // Validar período
    const inicio = new Date(dataInicio);
    const fim = new Date(dataFim);
    const hoje = new Date();

    if (inicio > fim) {
      throw new AppError(
        "VALIDATION_ERROR",
        "A data inicial deve ser anterior à data final"
      );
    }

    if (fim > hoje) {
      throw new AppError(
        "VALIDATION_ERROR",
        "O período não pode incluir datas futuras"
      );
    }

    // Buscar efetividades e calcular estatísticas
    const efetividades = await prisma.efetividade.findMany({
      where: {
        Data: {
          gte: inicio,
          lte: fim,
        },
      },
      include: {
        Professor: {
          select: {
            Nome: true,
            Departamento: true,
            CargaHoraria: true,
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
    });

    // Calcular estatísticas usando reduce
    const estatisticasPorProfessor = efetividades.reduce(
      (acc, curr) => {
        const pid = curr.ProfessorID;
        if (!acc[pid]) {
          acc[pid] = {
            professorID: pid,
            totalHoras: 0,
            totalDias: 0,
            mediaDiaria: 0,
            professor: curr.Professor,
          };
        }
        acc[pid].totalHoras += curr.HorasTrabalhadas;
        acc[pid].totalDias++;
        acc[pid].mediaDiaria = Number(
          (acc[pid].totalHoras / acc[pid].totalDias).toFixed(2)
        );
        return acc;
      },
      {} as Record<
        number,
        {
          professorID: number;
          totalHoras: number;
          totalDias: number;
          mediaDiaria: number;
          professor: {
            Nome: string;
            Departamento: string;
            CargaHoraria: number;
          };
        }
      >
    );

    return reply.send({
      data: efetividades,
      meta: {
        periodo: {
          inicio: dataInicio,
          fim: dataFim,
        },
        total: efetividades.length,
        estatisticas: Object.values(estatisticasPorProfessor),
      },
    });
  } catch (error) {
    req.log.error(error);

    if (error instanceof AppError) {
      if (error.code === "VALIDATION_ERROR") {
        return reply.status(400).send({
          mensagem: error.message,
        });
      }
    }

    return reply.status(500).send({
      mensagem: "Erro interno ao buscar efetividades",
      detalhes:
        process.env.NODE_ENV === "development" && error instanceof Error
          ? error.message
          : undefined,
    });
  }
}

export async function buscarEfetividadesProfessor(
  req: FastifyRequest<{
    Params: IdParam;
    Querystring: {
      inicio?: string;
      fim?: string;
    };
  }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { id } = req.params;
    const { inicio, fim } = req.query;

    // Validar professor
    const professor = await prisma.professor.findUnique({
      where: { ProfessorID: id },
      select: {
        Nome: true,
        Departamento: true,
        CargaHoraria: true,
      },
    });

    if (!professor) {
      throw new AppError("NOT_FOUND", "Professor não encontrado");
    }

    // Preparar filtro de data
    const where: Prisma.EfetividadeWhereInput = {
      ProfessorID: id,
      ...(inicio || fim
        ? {
            Data: {
              ...(inicio && { gte: new Date(inicio) }),
              ...(fim && { lte: new Date(fim) }),
            },
          }
        : {}),
    };

    // Buscar efetividades
    const efetividades = await prisma.efetividade.findMany({
      where,
      include: {
        Professor: {
          select: {
            Nome: true,
            Departamento: true,
            CargaHoraria: true,
          },
        },
      },
      orderBy: {
        Data: "desc",
      },
    });

    // Calcular estatísticas
    const totalHoras = efetividades.reduce(
      (sum, ef) => sum + ef.HorasTrabalhadas,
      0
    );
    const mediaDiaria =
      efetividades.length > 0
        ? Number((totalHoras / efetividades.length).toFixed(2))
        : 0;

    return reply.send({
      data: efetividades,
      meta: {
        professor: {
          nome: professor.Nome,
          departamento: professor.Departamento,
          cargaHoraria: professor.CargaHoraria,
        },
        estatisticas: {
          totalHoras,
          mediaDiaria,
          totalDias: efetividades.length,
        },
      },
    });
  } catch (error) {
    req.log.error(error);

    if (error instanceof AppError) {
      if (error.code === "NOT_FOUND") {
        return reply.status(404).send({
          mensagem: error.message,
        });
      }
    }

    return reply.status(500).send({
      mensagem: "Erro interno ao buscar efetividades do professor",
      detalhes:
        process.env.NODE_ENV === "development" && error instanceof Error
          ? error.message
          : undefined,
    });
  }
}

export async function estatisticasPorPeriodo(
  req: FastifyRequest<{ Body: PeriodoInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { dataInicio, dataFim } = req.body;
    const inicio = new Date(dataInicio);
    const fim = new Date(dataFim);

    // Buscar efetividades do período
    const efetividades = await prisma.efetividade.findMany({
      where: {
        Data: {
          gte: inicio,
          lte: fim,
        },
      },
      include: {
        Professor: {
          select: {
            ProfessorID: true,
            Nome: true,
            Departamento: true,
            CargaHoraria: true,
          },
        },
      },
    });

    // Calcular estatísticas por professor
    const estatisticasPorProfessor = efetividades.reduce(
      (acc, curr) => {
        const pid = curr.ProfessorID;
        if (!acc[pid]) {
          acc[pid] = {
            professor: curr.Professor,
            totalHoras: 0,
            diasRegistrados: 0,
            mediaDiaria: 0,
          };
        }
        acc[pid].totalHoras += curr.HorasTrabalhadas;
        acc[pid].diasRegistrados++;
        acc[pid].mediaDiaria = Number(
          (acc[pid].totalHoras / acc[pid].diasRegistrados).toFixed(2)
        );
        return acc;
      },
      {} as Record<
        number,
        {
          professor: {
            ProfessorID: number;
            Nome: string;
            Departamento: string;
            CargaHoraria: number;
          };
          totalHoras: number;
          diasRegistrados: number;
          mediaDiaria: number;
        }
      >
    );

    // Calcular estatísticas gerais
    const totalHoras = efetividades.reduce(
      (sum, ef) => sum + ef.HorasTrabalhadas,
      0
    );
    const totalRegistros = efetividades.length;
    const mediaHorasDiarias =
      totalRegistros > 0 ? Number((totalHoras / totalRegistros).toFixed(2)) : 0;

    return reply.send({
      data: {
        estatisticasPorProfessor: Object.values(estatisticasPorProfessor),
        estatisticasGerais: {
          totalHoras,
          totalRegistros,
          mediaHorasDiarias,
        },
        periodo: {
          inicio,
          fim,
        },
      },
    });
  } catch (error) {
    req.log.error(error);

    if (error instanceof AppError) {
      if (error.code === "VALIDATION_ERROR") {
        return reply.status(400).send({
          mensagem: error.message,
        });
      }
    }

    return reply.status(500).send({
      mensagem: "Erro interno ao gerar estatísticas",
      detalhes:
        process.env.NODE_ENV === "development" && error instanceof Error
          ? error.message
          : undefined,
    });
  }
}

export async function estatisticasPorProfessor(
  req: FastifyRequest<{ Params: IdParam; Body: PeriodoInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { id: ProfessorID } = req.params;
    const { dataInicio, dataFim } = req.body;
    const inicio = new Date(dataInicio);
    const fim = new Date(dataFim);

    // Verificar se o professor existe
    const professor = await prisma.professor.findUnique({
      where: { ProfessorID },
      select: {
        Nome: true,
        Departamento: true,
        CargaHoraria: true,
      },
    });

    if (!professor) {
      throw new AppError("NOT_FOUND", "Professor não encontrado");
    }

    // Buscar registros do período
    const registros = await prisma.efetividade.findMany({
      where: {
        ProfessorID,
        Data: {
          gte: inicio,
          lte: fim,
        },
      },
      orderBy: {
        Data: "asc",
      },
      select: {
        EfetividadeID: true,
        Data: true,
        HorasTrabalhadas: true,
      },
    });

    // Calcular estatísticas
    const totalHoras = registros.reduce(
      (sum, reg) => sum + reg.HorasTrabalhadas,
      0
    );
    const totalRegistros = registros.length;
    const mediaDiaria =
      totalRegistros > 0 ? Number((totalHoras / totalRegistros).toFixed(2)) : 0;

    return reply.send({
      data: {
        professor: {
          ...professor,
          ProfessorID,
        },
        estatisticas: {
          totalHoras,
          totalRegistros,
          mediaDiaria,
        },
        registros,
        periodo: {
          inicio,
          fim,
        },
      },
    });
  } catch (error) {
    req.log.error(error);

    if (error instanceof AppError && error.code === "NOT_FOUND") {
      return reply.status(404).send({
        mensagem: error.message,
      });
    }

    return reply.status(500).send({
      mensagem: "Erro interno ao buscar estatísticas",
      detalhes:
        process.env.NODE_ENV === "development" && error instanceof Error
          ? error.message
          : undefined,
    });
  }
}
