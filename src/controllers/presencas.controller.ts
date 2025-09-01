import { FastifyRequest, FastifyReply } from "fastify";
import {
  CreatePresencaInput,
  UpdatePresencaInput,
  IdParam,
  CreateBatchPresencaInput,
} from "../schemas/presencas.schema";
import { Estado, Prisma } from "@prisma/client";
import { AppError } from "../types/errors";
import { sendError } from "../utils/http";

export async function registrarPresenca(
  req: FastifyRequest<{ Body: CreatePresencaInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { Data, ProfessorID, Estado: estado } = req.body;

    // Validar data
    const dataPresenca = new Date(Data);
    const dataPresencaSemHora = new Date(dataPresenca);
    dataPresencaSemHora.setHours(0, 0, 0, 0);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    if (dataPresencaSemHora.getTime() > hoje.getTime()) {
      throw new AppError(
        "VALIDATION_ERROR",
        "Não é possível registrar presença para datas futuras"
      );
    }

    // Usar transação para garantir consistência
    const presenca = await prisma.$transaction(async (tx) => {
      // Verificar se o professor existe
      const professor = await tx.professor.findUnique({
        where: { ProfessorID },
        select: {
          Nome: true,
          Departamento: true,
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
      const presencaExistente = await tx.presenca.findFirst({
        where: {
          Data: dataPresenca,
          ProfessorID,
        },
      });

      if (presencaExistente) {
        throw new AppError(
          "DUPLICATE",
          "Já existe registro de presença para esta data"
        );
      }

      // Criar o registro
      return await tx.presenca.create({
        data: {
          Data: dataPresenca,
          Estado: estado,
          ProfessorID,
        },
        include: {
          Professor: {
            select: {
              Nome: true,
              Departamento: true,
            },
          },
        },
      });
    });

    return reply.status(201).send({
      mensagem: "Presença registrada com sucesso",
      data: presenca,
    });
  } catch (error) {
    req.log.error(error);

    if (error instanceof AppError) {
      if (error.code === "NOT_FOUND") {
        return reply.status(404).send({
          mensagem: error.message,
        });
      }

      if (error.code === "DUPLICATE" || error.code === "VALIDATION_ERROR") {
        return reply.status(409).send({
          mensagem: error.message,
        });
      }
    }

    return sendError(reply, 500, "Erro interno ao registrar presença");
  }
}

export async function registrarPresencasEmLote(
  req: FastifyRequest<{ Body: CreateBatchPresencaInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { presencas } = req.body;
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    // Validar datas e professor
    for (const presenca of presencas) {
      const dataPresenca = new Date(presenca.Data);
      if (dataPresenca > hoje) {
        throw new AppError(
          "VALIDATION_ERROR",
          `Não é possível registrar presença para a data futura ${presenca.Data}`
        );
      }
    }

    // Usar transação para garantir consistência
    const resultados = await prisma.$transaction(async (tx) => {
      const professoresIds = [...new Set(presencas.map((p) => p.ProfessorID))];

      // Verificar se todos os professores existem
      const professores = await tx.professor.findMany({
        where: {
          ProfessorID: {
            in: professoresIds as number[],
          },
        },
        select: {
          ProfessorID: true,
          Nome: true,
        },
      });

      if (professores.length !== professoresIds.length) {
        throw new AppError(
          "NOT_FOUND",
          "Um ou mais professores não encontrados"
        );
      }

      // Verificar registros existentes
      const datasParaVerificar = presencas.map((p) => new Date(p.Data));
      const presencasExistentes = await tx.presenca.findMany({
        where: {
          ProfessorID: { in: professoresIds as number[] },
          Data: { in: datasParaVerificar },
        },
      });

      if (presencasExistentes.length > 0) {
        const registrosDuplicados = presencasExistentes
          .map(
            (p) => `${p.ProfessorID} - ${p.Data.toISOString().split("T")[0]}`
          )
          .join(", ");
        throw new AppError(
          "DUPLICATE",
          `Já existem registros de presença para: ${registrosDuplicados}`
        );
      }

      // Criar todos os registros
      return await tx.presenca.createMany({
        data: presencas.map((p: CreatePresencaInput) => ({
          Data: new Date(p.Data),
          Estado: p.Estado,
          ProfessorID: p.ProfessorID,
        })),
      });
    });

    return reply.status(201).send({
      mensagem: "Presenças registradas com sucesso",
      data: {
        registrosCriados: resultados.count,
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

      if (error.code === "DUPLICATE" || error.code === "VALIDATION_ERROR") {
        return reply.status(409).send({
          mensagem: error.message,
        });
      }
    }

    return sendError(reply, 500, "Erro interno ao registrar presenças em lote");
  }
}

export async function listarPresencas(
  req: FastifyRequest<{
    Querystring: {
      inicio?: string;
      fim?: string;
      estado?: Estado;
      professorId?: string;
    };
  }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { inicio, fim, estado, professorId } = req.query;

    // Construir filtros
    const where: Prisma.PresencaWhereInput = {
      ...(inicio || fim
        ? {
            Data: {
              ...(inicio && { gte: new Date(inicio) }),
              ...(fim && { lte: new Date(fim) }),
            },
          }
        : {}),
      ...(estado && { Estado: estado }),
      ...(professorId && { ProfessorID: parseInt(professorId) }),
    };

    // Buscar presenças
    const presencas = await prisma.presenca.findMany({
      where,
      include: {
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
    });

    // Calcular estatísticas usando findMany e reduce
    const estatisticasPorEstado = presencas.reduce(
      (acc, curr) => {
        if (!acc[curr.Estado]) {
          acc[curr.Estado] = 0;
        }
        acc[curr.Estado]++;
        return acc;
      },
      {
        PRESENTE: 0,
        FALTA: 0,
      } as Record<Estado, number>
    );

    return reply.send({
      data: presencas,
      meta: {
        total: presencas.length,
        porEstado: estatisticasPorEstado,
        periodo:
          inicio || fim
            ? {
                inicio: inicio || "início",
                fim: fim || "atual",
              }
            : undefined,
      },
    });
  } catch (error) {
    req.log.error(error);
    return sendError(reply, 500, "Erro interno ao listar presenças");
  }
}

export async function buscarPresencasProfessor(
  req: FastifyRequest<{
    Params: IdParam;
    Querystring: {
      inicio?: string;
      fim?: string;
      estado?: Estado;
    };
  }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { id } = req.params;
    const { inicio, fim, estado } = req.query;

    // Verificar se o professor existe
    const professor = await prisma.professor.findUnique({
      where: { ProfessorID: id },
      select: {
        Nome: true,
        Departamento: true,
      },
    });

    if (!professor) {
      throw new AppError("NOT_FOUND", "Professor não encontrado");
    }

    // Construir filtros
    const where: Prisma.PresencaWhereInput = {
      ProfessorID: id,
      ...(inicio || fim
        ? {
            Data: {
              ...(inicio && { gte: new Date(inicio) }),
              ...(fim && { lte: new Date(fim) }),
            },
          }
        : {}),
      ...(estado && { Estado: estado }),
    };

    // Buscar presenças
    const presencas = await prisma.presenca.findMany({
      where,
      include: {
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
    });

    // Calcular estatísticas usando findMany e reduce
    const total = presencas.length;
    const estatisticasPorEstado: Record<
      Estado,
      { count: number; percentual: number }
    > = {
      PRESENTE: { count: 0, percentual: 0 },
      FALTA: { count: 0, percentual: 0 },
    };

    // Contar presenças por estado
    for (const presenca of presencas) {
      estatisticasPorEstado[presenca.Estado].count++;
    }

    // Calcular percentuais
    if (total > 0) {
      for (const estado in estatisticasPorEstado) {
        estatisticasPorEstado[estado as Estado].percentual = Number(
          (
            (estatisticasPorEstado[estado as Estado].count / total) *
            100
          ).toFixed(2)
        );
      }
    }

    return reply.send({
      data: presencas,
      meta: {
        professor: {
          nome: professor.Nome,
          departamento: professor.Departamento,
        },
        total,
        estatisticas: estatisticasPorEstado,
        periodo:
          inicio || fim
            ? {
                inicio: inicio || "início",
                fim: fim || "atual",
              }
            : undefined,
      },
    });
  } catch (error) {
    req.log.error(error);

    if (error instanceof AppError && error.code === "NOT_FOUND") {
      return reply.status(404).send({
        mensagem: error.message,
      });
    }

    return sendError(
      reply,
      500,
      "Erro interno ao buscar presenças do professor"
    );
  }
}

export async function atualizarPresenca(
  req: FastifyRequest<{ Params: IdParam; Body: UpdatePresencaInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { id } = req.params;
    const dados = req.body;

    // Validar data se fornecida
    if (dados.Data) {
      const dataPresenca = new Date(dados.Data);
      const hoje = new Date();
      hoje.setHours(0, 0, 0, 0);

      if (dataPresenca > hoje) {
        throw new AppError(
          "VALIDATION_ERROR",
          "Não é possível registrar presença para datas futuras"
        );
      }
    }

    // Usar transação para garantir consistência
    const presenca = await prisma.$transaction(async (tx) => {
      // Verificar se a presença existe
      const presencaExiste = await tx.presenca.findUnique({
        where: { PresencaID: id },
      });

      if (!presencaExiste) {
        throw new AppError("NOT_FOUND", "Registro de presença não encontrado");
      }

      // Se a data está sendo alterada, verificar duplicidade
      if (dados.Data) {
        const duplicada = await tx.presenca.findFirst({
          where: {
            Data: new Date(dados.Data),
            ProfessorID: presencaExiste.ProfessorID,
            NOT: {
              PresencaID: id,
            },
          },
        });

        if (duplicada) {
          throw new AppError(
            "DUPLICATE",
            "Já existe registro de presença para esta data"
          );
        }
      }

      // Atualizar o registro
      return await tx.presenca.update({
        where: { PresencaID: id },
        data: {
          Estado: dados.Estado as Estado,
          Data: dados.Data ? new Date(dados.Data) : undefined,
        },
        include: {
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
      mensagem: "Presença atualizada com sucesso",
      data: presenca,
    });
  } catch (error) {
    req.log.error(error);

    if (error instanceof AppError) {
      if (error.code === "NOT_FOUND") {
        return reply.status(404).send({
          mensagem: error.message,
        });
      }

      if (error.code === "DUPLICATE" || error.code === "VALIDATION_ERROR") {
        return reply.status(409).send({
          mensagem: error.message,
        });
      }
    }

    return sendError(reply, 500, "Erro interno ao atualizar presença");
  }
}
