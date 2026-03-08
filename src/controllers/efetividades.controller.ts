import { Prisma } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import {
  CreateEfetividadeInput,
  IdParam,
  PeriodoInput,
  ProfessorEfetividadeQuery,
  UpdateEfetividadeInput,
} from "../schemas/efetividades.schema";

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
    const { data, horasTrabalhadas, professorId, cursoId } = req.body;
    const prisma = req.server.prisma;

    // Validar data
    const dataEfetividade = new Date(data);
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
        where: { professorId },
        select: {
          nome: true,
          departamento: true,
          cargaHoraria: true,
          usuario: {
            select: {
              email: true,
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
          data: {
            gte: dataInicio,
            lte: dataFim,
          },
          professorId,
          cursoId,
        },
      });

      if (efetividadeExistente) {
        throw new Error("Já existe registro de efetividade para esta data");
      }

      // Validar horas trabalhadas
      if (horasTrabalhadas > professor.cargaHoraria) {
        throw new Error(
          `As horas trabalhadas não podem exceder a carga horária do professor (${professor.cargaHoraria}h)`
        );
      }

      // Criar o registro
      return await tx.efetividade.create({
        data: {
          data: dataEfetividade,
          horasTrabalhadas,
          professorId,
          cursoId,
        },
        include: {
          professor: {
            select: {
              nome: true,
              departamento: true,
              cargaHoraria: true,
              usuario: {
                select: {
                  email: true,
                },
              },
            },
          },
        },
      });
    });

    req.log.info(
      `Efetividade registrada: Professor ID ${professorId}, Curso ID ${cursoId}, Data: ${data}, Horas: ${horasTrabalhadas}`
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
        curso: true,
        professor: {
          select: {
            nome: true,
            departamento: true,
            cargaHoraria: true,
          },
        },
      },
      orderBy: { data: "desc" },
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
      where: { efetividadeId: id },
      include: {
        professor: {
          select: {
            nome: true,
            departamento: true,
            cargaHoraria: true,
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
        where: { efetividadeId: id },
        include: {
          professor: {
            select: {
              cargaHoraria: true,
            },
          },
        },
      });

      if (!efetividadeExiste) {
        throw new Error("Efetividade não encontrada");
      }

      // Validar horas trabalhadas se fornecidas
      if (
        dados.horasTrabalhadas !== undefined &&
        dados.horasTrabalhadas > efetividadeExiste.professor.cargaHoraria
      ) {
        throw new Error(
          `As horas trabalhadas não podem exceder a carga horária do professor (${efetividadeExiste.professor.cargaHoraria}h)`
        );
      }

      // Validar data se fornecida
      if (dados.data) {
        const novaData = new Date(dados.data);
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
            data: {
              gte: dataInicio,
              lte: dataFim,
            },
            professorId: efetividadeExiste.professorId,
            NOT: { efetividadeId: id },
          },
        });

        if (efetividadeDataExiste) {
          throw new Error("Já existe registro de efetividade para esta data");
        }
      }

      // Atualizar o registro
      return await tx.efetividade.update({
        where: { efetividadeId: id },
        data: {
          ...(dados.data && { data: new Date(dados.data) }),
          ...(dados.horasTrabalhadas !== undefined && {
            horasTrabalhadas: dados.horasTrabalhadas,
          }),
          ...(dados.professorId && { professorId: dados.professorId }),
        },
        include: {
          professor: {
            select: {
              nome: true,
              departamento: true,
              cargaHoraria: true,
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
      where: { efetividadeId: id },
    });

    if (!efetividade) {
      return sendError(reply, 404, "Efetividade não encontrada");
    }

    await prisma.efetividade.delete({
      where: { efetividadeId: id },
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
        data: {
          gte: inicio,
          lte: fim,
        },
      },
      include: {
        professor: {
          select: {
            nome: true,
            departamento: true,
            cargaHoraria: true,
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
    });

    // Calcular estatísticas por professor
    const estatisticasPorProfessor = efetividades.reduce(
      (acc, curr) => {
        const pid = curr.professorId;
        if (!acc[pid]) {
          acc[pid] = {
            professorId: pid,
            totalHoras: 0,
            totalDias: 0,
            mediaDiaria: 0,
            professor: {
              nome: curr.professor.nome,
              departamento: curr.professor.departamento,
              cargaHoraria: curr.professor.cargaHoraria,
            },
          };
        }
        acc[pid].totalHoras += curr.horasTrabalhadas;
        acc[pid].totalDias++;
        acc[pid].mediaDiaria = Number(
          (acc[pid].totalHoras / acc[pid].totalDias).toFixed(2)
        );
        return acc;
      },
      {} as Record<
        number,
        {
          professorId: number;
          totalHoras: number;
          totalDias: number;
          mediaDiaria: number;
          professor: {
            nome: string;
            departamento: string;
            cargaHoraria: number;
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
      where: { professorId: id },
      select: {
        nome: true,
        departamento: true,
        cargaHoraria: true,
      },
    });

    if (!professor) {
      return sendError(reply, 404, "Professor não encontrado");
    }

    // Preparar filtro de data
    const where: Prisma.EfetividadeWhereInput = {
      professorId: id,
      ...(inicio || fim
        ? {
            data: {
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
        professor: {
          select: {
            nome: true,
            departamento: true,
            cargaHoraria: true,
          },
        },
      },
      orderBy: {
        data: "desc",
      },
    });

    // Calcular estatísticas
    const totalHoras = efetividades.reduce(
      (sum, ef) => sum + ef.horasTrabalhadas,
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
          nome: professor.nome,
          departamento: professor.departamento,
          cargaHoraria: professor.cargaHoraria,
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
