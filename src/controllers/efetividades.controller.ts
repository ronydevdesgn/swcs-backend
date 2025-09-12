import { FastifyRequest, FastifyReply } from "fastify";
import {
  CreateEfetividadeInput,
  UpdateEfetividadeInput,
  IdParam,
  PeriodoInput,
  ProfessorEfetividadeQuery,
} from "../schemas/efetividades.schema";
import { Prisma } from "@prisma/client";

// Helper para respostas de erro padronizadas
const sendError = (
  reply: FastifyReply,
  statusCode: number,
  message: string,
  details?: string
) => {
  return reply.status(statusCode).send({
    mensagem: message,
    detalhes: process.env.NODE_ENV === "development" ? details : undefined,
  });
};

export async function registrarEfetividade(
  req: FastifyRequest<{ Body: CreateEfetividadeInput }>,
  reply: FastifyReply
) {
  try {
    const { Data, HorasTrabalhadas, ProfessorID } = req.body;
    const prisma = req.server.prisma;

    // Validar data
    const dataEfetividade = new Date(Data);
    const hoje = new Date();
    hoje.setHours(23, 59, 59, 999); // Permitir até o final do dia atual

    if (dataEfetividade > hoje) {
      return sendError(
        reply,
        400,
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
        throw new Error("Professor não encontrado");
      }

      // Verificar se já existe registro para esta data
      const dataInicio = new Date(dataEfetividade);
      dataInicio.setHours(0, 0, 0, 0);
      const dataFim = new Date(dataEfetividade);
      dataFim.setHours(23, 59, 59, 999);

      const efetividadeExistente = await tx.efetividade.findFirst({
        where: {
          Data: {
            gte: dataInicio,
            lte: dataFim,
          },
          ProfessorID,
        },
      });

      if (efetividadeExistente) {
        throw new Error("Já existe registro de efetividade para esta data");
      }

      // Validar horas trabalhadas
      if (HorasTrabalhadas > professor.CargaHoraria) {
        throw new Error(
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

    req.log.info(
      `Efetividade registrada: Professor ID ${ProfessorID}, Data: ${Data}, Horas: ${HorasTrabalhadas}`
    );

    return reply.status(201).send({
      mensagem: "Efetividade registrada com sucesso",
      data: efetividade,
    });
  } catch (error) {
    req.log.error("Erro ao registrar efetividade:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido";

    if (errorMessage === "Professor não encontrado") {
      return sendError(reply, 404, errorMessage);
    }

    if (errorMessage === "Já existe registro de efetividade para esta data") {
      return sendError(reply, 409, errorMessage);
    }

    if (errorMessage.includes("não podem exceder a carga horária")) {
      return sendError(reply, 400, errorMessage);
    }

    return sendError(
      reply,
      500,
      "Erro interno ao registrar efetividade",
      errorMessage
    );
  }
}

export async function listarEfetividades(
  req: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const prisma = req.server.prisma;

    const registros = await prisma.efetividade.findMany({
      include: {
        Professor: {
          select: {
            Nome: true,
            Departamento: true,
            CargaHoraria: true,
          },
        },
      },
      orderBy: { Data: "desc" },
    });

    return reply.send({
      data: registros,
    });
  } catch (error) {
    req.log.error("Erro ao listar efetividades:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido";
    return sendError(
      reply,
      500,
      "Erro interno ao listar efetividades",
      errorMessage
    );
  }
}

export async function buscarEfetividade(
  req: FastifyRequest<{ Params: IdParam }>,
  reply: FastifyReply
) {
  try {
    const { id } = req.params;
    const prisma = req.server.prisma;

    const registro = await prisma.efetividade.findUnique({
      where: { EfetividadeID: id },
      include: {
        Professor: {
          select: {
            Nome: true,
            Departamento: true,
            CargaHoraria: true,
          },
        },
      },
    });

    if (!registro) {
      return sendError(reply, 404, "Efetividade não encontrada");
    }

    return reply.send({ data: registro });
  } catch (error) {
    req.log.error("Erro ao buscar efetividade:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido";
    return sendError(
      reply,
      500,
      "Erro interno ao buscar efetividade",
      errorMessage
    );
  }
}

export async function atualizarEfetividade(
  req: FastifyRequest<{ Params: IdParam; Body: UpdateEfetividadeInput }>,
  reply: FastifyReply
) {
  try {
    const { id } = req.params;
    const dados = req.body;
    const prisma = req.server.prisma;

    // Usar transação para garantir consistência
    const efetividade = await prisma.$transaction(async (tx) => {
      // Verificar se a efetividade existe
      const efetividadeExiste = await tx.efetividade.findUnique({
        where: { EfetividadeID: id },
        include: {
          Professor: {
            select: {
              CargaHoraria: true,
            },
          },
        },
      });

      if (!efetividadeExiste) {
        throw new Error("Efetividade não encontrada");
      }

      // Validar horas trabalhadas se fornecidas
      if (
        dados.HorasTrabalhadas !== undefined &&
        dados.HorasTrabalhadas > efetividadeExiste.Professor.CargaHoraria
      ) {
        throw new Error(
          `As horas trabalhadas não podem exceder a carga horária do professor (${efetividadeExiste.Professor.CargaHoraria}h)`
        );
      }

      // Validar data se fornecida
      if (dados.Data) {
        const novaData = new Date(dados.Data);
        const hoje = new Date();
        hoje.setHours(23, 59, 59, 999);

        if (novaData > hoje) {
          throw new Error(
            "Não é possível registrar efetividade para datas futuras"
          );
        }

        // Verificar duplicidade de data (excluindo o registro atual)
        const dataInicio = new Date(novaData);
        dataInicio.setHours(0, 0, 0, 0);
        const dataFim = new Date(novaData);
        dataFim.setHours(23, 59, 59, 999);

        const efetividadeDataExiste = await tx.efetividade.findFirst({
          where: {
            Data: {
              gte: dataInicio,
              lte: dataFim,
            },
            ProfessorID: efetividadeExiste.ProfessorID,
            NOT: { EfetividadeID: id },
          },
        });

        if (efetividadeDataExiste) {
          throw new Error("Já existe registro de efetividade para esta data");
        }
      }

      // Atualizar o registro
      return await tx.efetividade.update({
        where: { EfetividadeID: id },
        data: {
          ...(dados.Data && { Data: new Date(dados.Data) }),
          ...(dados.HorasTrabalhadas !== undefined && {
            HorasTrabalhadas: dados.HorasTrabalhadas,
          }),
          ...(dados.ProfessorID && { ProfessorID: dados.ProfessorID }),
        },
        include: {
          Professor: {
            select: {
              Nome: true,
              Departamento: true,
              CargaHoraria: true,
            },
          },
        },
      });
    });

    req.log.info(`Efetividade atualizada: ID ${id}`);

    return reply.send({
      mensagem: "Efetividade atualizada com sucesso",
      data: efetividade,
    });
  } catch (error) {
    req.log.error("Erro ao atualizar efetividade:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido";

    if (errorMessage === "Efetividade não encontrada") {
      return sendError(reply, 404, errorMessage);
    }

    if (
      errorMessage.includes("não podem exceder a carga horária") ||
      errorMessage.includes("não é possível registrar efetividade")
    ) {
      return sendError(reply, 400, errorMessage);
    }

    if (errorMessage === "Já existe registro de efetividade para esta data") {
      return sendError(reply, 409, errorMessage);
    }

    return sendError(
      reply,
      500,
      "Erro interno ao atualizar efetividade",
      errorMessage
    );
  }
}

export async function deletarEfetividade(
  req: FastifyRequest<{ Params: IdParam }>,
  reply: FastifyReply
) {
  try {
    const { id } = req.params;
    const prisma = req.server.prisma;

    // Verificar se existe antes de deletar
    const efetividade = await prisma.efetividade.findUnique({
      where: { EfetividadeID: id },
    });

    if (!efetividade) {
      return sendError(reply, 404, "Efetividade não encontrada");
    }

    await prisma.efetividade.delete({
      where: { EfetividadeID: id },
    });

    req.log.info(`Efetividade deletada: ID ${id}`);

    return reply.send({
      mensagem: "Efetividade removida com sucesso",
    });
  } catch (error) {
    req.log.error("Erro ao deletar efetividade:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido";
    return sendError(
      reply,
      500,
      "Erro interno ao remover efetividade",
      errorMessage
    );
  }
}

export async function buscarEfetividadesPorPeriodo(
  req: FastifyRequest<{ Querystring: PeriodoInput }>,
  reply: FastifyReply
) {
  try {
    const { dataInicio, dataFim } = req.query;
    const prisma = req.server.prisma;

    // Validar período
    const inicio = new Date(dataInicio);
    const fim = new Date(dataFim);
    const hoje = new Date();

    if (inicio > fim) {
      return sendError(
        reply,
        400,
        "A data inicial deve ser anterior à data final"
      );
    }

    if (fim > hoje) {
      return sendError(reply, 400, "O período não pode incluir datas futuras");
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

    // Calcular estatísticas por professor
    const estatisticasPorProfessor = efetividades.reduce(
      (acc, curr) => {
        const pid = curr.ProfessorID;
        if (!acc[pid]) {
          acc[pid] = {
            professorID: pid,
            totalHoras: 0,
            totalDias: 0,
            mediaDiaria: 0,
            professor: {
              Nome: curr.Professor.Nome,
              Departamento: curr.Professor.Departamento,
              CargaHoraria: curr.Professor.CargaHoraria,
            },
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
    req.log.error("Erro ao buscar efetividades por período:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido";
    return sendError(
      reply,
      500,
      "Erro interno ao buscar efetividades",
      errorMessage
    );
  }
}

export async function buscarEfetividadesProfessor(
  req: FastifyRequest<{
    Params: IdParam;
    Querystring: ProfessorEfetividadeQuery;
  }>,
  reply: FastifyReply
) {
  try {
    const { id } = req.params;
    const { inicio, fim } = req.query;
    const prisma = req.server.prisma;

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
      return sendError(reply, 404, "Professor não encontrado");
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
    req.log.error("Erro ao buscar efetividades do professor:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido";
    return sendError(
      reply,
      500,
      "Erro interno ao buscar efetividades do professor",
      errorMessage
    );
  }
}
