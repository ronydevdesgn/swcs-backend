import { FastifyRequest, FastifyReply } from "fastify";
import {
  CreateEfetividadeInput,
  UpdateEfetividadeInput,
  IdParam,
  PeriodoInput,
} from "../schemas/efetividades.schema";

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
      return reply.status(400).send({
        mensagem: "Não é possível registrar efetividade para datas futuras",
      });
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
        throw { code: "NOT_FOUND", message: "Professor não encontrado" };
      }

      // Verificar se já existe registro para esta data
      const efetividadeExistente = await tx.efetividade.findFirst({
        where: {
          Data: dataEfetividade,
          ProfessorID,
        },
      });

      if (efetividadeExistente) {
        throw {
          code: "DUPLICATE",
          message: "Já existe registro de efetividade para esta data",
        };
      }

      // Validar horas trabalhadas
      if (HorasTrabalhadas > professor.CargaHoraria) {
        throw {
          code: "INVALID_HOURS",
          message: `As horas trabalhadas não podem exceder a carga horária do professor (${professor.CargaHoraria}h)`,
        };
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

    return reply.status(500).send({
      mensagem: "Erro interno ao registrar efetividade",
      detalhes:
        process.env.NODE_ENV === "development" ? error.message : undefined,
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
      return reply.status(400).send({
        mensagem: "A data inicial deve ser anterior à data final",
      });
    }

    if (fim > hoje) {
      return reply.status(400).send({
        mensagem: "O período não pode incluir datas futuras",
      });
    }

    // Buscar efetividades e calcular estatísticas
    const [efetividades, estatisticas] = await prisma.$transaction([
      // Buscar efetividades do período
      prisma.efetividade.findMany({
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
      }),

      // Calcular estatísticas
      prisma.efetividade.groupBy({
        by: ["ProfessorID"],
        where: {
          Data: {
            gte: inicio,
            lte: fim,
          },
        },
        _sum: {
          HorasTrabalhadas: true,
        },
        _count: true,
      }),
    ]);

    // Processar estatísticas
    const estatisticasPorProfessor = estatisticas.map((est) => ({
      professorID: est.ProfessorID,
      totalHoras: est._sum.HorasTrabalhadas,
      totalDias: est._count,
      mediaDiaria: Number((est._sum.HorasTrabalhadas / est._count).toFixed(2)),
    }));

    return reply.send({
      data: efetividades,
      meta: {
        periodo: {
          inicio: dataInicio,
          fim: dataFim,
        },
        total: efetividades.length,
        estatisticas: estatisticasPorProfessor,
      },
    });
  } catch (error) {
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao buscar efetividades",
      detalhes:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}

export async function buscarEfetividadesProfessor(
  req: FastifyRequest<{ Params: IdParam }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { id } = req.params;
    const { inicio, fim } = req.query as { inicio?: string; fim?: string };

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
      return reply.status(404).send({
        mensagem: "Professor não encontrado",
      });
    }

    // Preparar filtro de data
    const where: any = { ProfessorID: id };
    if (inicio || fim) {
      where.Data = {};
      if (inicio) where.Data.gte = new Date(inicio);
      if (fim) where.Data.lte = new Date(fim);
    }

    // Buscar efetividades e calcular estatísticas
    const [efetividades, estatisticas] = await prisma.$transaction([
      prisma.efetividade.findMany({
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
      }),
      prisma.efetividade.aggregate({
        where,
        _sum: {
          HorasTrabalhadas: true,
        },
        _avg: {
          HorasTrabalhadas: true,
        },
        _count: true,
      }),
    ]);

    return reply.send({
      data: efetividades,
      meta: {
        professor: {
          nome: professor.Nome,
          departamento: professor.Departamento,
          cargaHoraria: professor.CargaHoraria,
        },
        estatisticas: {
          totalHoras: estatisticas._sum.HorasTrabalhadas,
          mediaDiaria: Number(estatisticas._avg.HorasTrabalhadas.toFixed(2)),
          totalDias: estatisticas._count,
        },
      },
    });
  } catch (error) {
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao buscar efetividades do professor",
      detalhes:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}
