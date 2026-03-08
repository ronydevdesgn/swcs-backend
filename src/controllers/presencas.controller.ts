import { Estado, Prisma } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import {
    CreateBatchPresencaInput,
    CreatePresencaInput,
    IdParam,
    UpdatePresencaInput,
} from "../schemas/presencas.schema";
import { sendError } from "../utils/http";

export async function registrarPresenca(
  req: FastifyRequest<{ Body: CreatePresencaInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { data, professorId, cursoId, estado } = req.body;

    // Validar data
    const dataPresenca = new Date(data);
    const dataPresencaSemHora = new Date(dataPresenca);
    dataPresencaSemHora.setHours(0, 0, 0, 0);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    if (dataPresencaSemHora.getTime() > hoje.getTime()) {
      return sendError(
        reply,
        400,
        "Não é possível registrar presença para datas futuras"
      );
    }

    // Usar transação para garantir consistência
    const presenca = await prisma.$transaction(async (tx) => {
      // Verificar se o professor existe
      const professor = await tx.professor.findUnique({
        where: { professorId },
        select: {
          nome: true,
          departamento: true,
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
      const presencaExistente = await tx.presenca.findFirst({
        where: {
          data: dataPresenca,
          professorId,
        },
      });

      if (presencaExistente) {
        throw new Error("Já existe registro de presença para esta data");
      }

      // Criar o registro
      return await tx.presenca.create({
        data: {
          data: dataPresenca,
          estado: estado as Estado,
          professorId,
          cursoId,
        },
        include: {
          professor: {
            select: {
              nome: true,
              departamento: true,
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
    req.log.error("Erro ao registrar presença:", error);

    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";

    if (errorMessage === "Professor não encontrado") {
      return sendError(reply, 404, errorMessage);
    }

    if (errorMessage === "Já existe registro de presença para esta data") {
      return sendError(reply, 409, errorMessage);
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
      const dataPresenca = new Date(presenca.data);
      if (dataPresenca > hoje) {
        return sendError(
          reply,
          400,
          `Não é possível registrar presença para a data futura ${presenca.data}`
        );
      }
    }

    // Usar transação para garantir consistência
    const resultados = await prisma.$transaction(async (tx) => {
      const professoresIds = [...new Set(presencas.map((p) => p.professorId))];

      // Verificar se todos os professores existem
      const professores = await tx.professor.findMany({
        where: {
          professorId: {
            in: professoresIds as number[],
          },
        },
        select: {
          professorId: true,
          nome: true,
        },
      });

      if (professores.length !== professoresIds.length) {
        throw new Error("Um ou mais professores não encontrados");
      }

      // Verificar registros existentes
      const datasParaVerificar = presencas.map((p) => new Date(p.data));
      const presencasExistentes = await tx.presenca.findMany({
        where: {
          professorId: { in: professoresIds as number[] },
          data: { in: datasParaVerificar },
        },
      });

      if (presencasExistentes.length > 0) {
        const registrosDuplicados = presencasExistentes
          .map(
            (p) => `${p.professorId} - ${p.data.toISOString().split("T")[0]}`
          )
          .join(", ");
        throw new Error(`Já existem registros de presença para: ${registrosDuplicados}`);
      }

      // Criar todos os registros
      return await tx.presenca.createMany({
        data: presencas.map((p: CreatePresencaInput) => ({
          data: new Date(p.data),
          estado: p.estado as Estado,
          professorId: p.professorId,
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
    req.log.error("Erro ao registrar presenças em lote:", error);

    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";

    if (errorMessage === "Um ou mais professores não encontrados") {
      return sendError(reply, 404, errorMessage);
    }

    if (errorMessage.startsWith("Já existem registros de presença para:")) {
      return sendError(reply, 409, errorMessage);
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
            data: {
              ...(inicio && { gte: new Date(inicio) }),
              ...(fim && { lte: new Date(fim) }),
            },
          }
        : {}),
      ...(estado && { estado: estado }),
      ...(professorId && { professorId: parseInt(professorId) }),
    };

    // Buscar presenças
    const presencas = await prisma.presenca.findMany({
      where,
      include: {
        professor: {
          select: {
            nome: true,
            departamento: true,
          },
        },
      },
      orderBy: {
        data: "desc",
      },
    });

    // Calcular estatísticas usando findMany e reduce
    const estatisticasPorEstado = presencas.reduce(
      (acc, curr) => {
        if (!acc[curr.estado]) {
          acc[curr.estado] = 0;
        }
        acc[curr.estado]++;
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
    req.log.error("Erro ao listar presenças:", error);
    return sendError(reply, 500, "Erro interno ao listar presenças");
  }
}

export async function buscarPresencaPorId(
  req: FastifyRequest<{ Params: IdParam }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { id } = req.params;
    const registro = await prisma.presenca.findUnique({
      where: { presencaId: id },
    });

    if (!registro) {
      return sendError(reply, 404, "Presença não encontrada");
    }

    return reply.send({ data: registro });
  } catch (error) {
    req.log.error("Erro ao buscar presença por ID:", error);
    return sendError(reply, 500, "Erro interno ao buscar presença");
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
      where: { professorId: id },
      select: {
        nome: true,
        departamento: true,
      },
    });

    if (!professor) {
      return sendError(reply, 404, "Professor não encontrado");
    }

    // Construir filtros
    const where: Prisma.PresencaWhereInput = {
      professorId: id,
      ...(inicio || fim
        ? {
            data: {
              ...(inicio && { gte: new Date(inicio) }),
              ...(fim && { lte: new Date(fim) }),
            },
          }
        : {}),
      ...(estado && { estado: estado }),
    };

    // Buscar presenças
    const presencas = await prisma.presenca.findMany({
      where,
      include: {
        professor: {
          select: {
            nome: true,
            departamento: true,
          },
        },
      },
      orderBy: {
        data: "desc",
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
      estatisticasPorEstado[presenca.estado].count++;
    }

    // Calcular percentuais
    if (total > 0) {
      for (const estadoKey in estatisticasPorEstado) {
        estatisticasPorEstado[estadoKey as Estado].percentual = Number(
          (
            (estatisticasPorEstado[estadoKey as Estado].count / total) *
            100
          ).toFixed(2)
        );
      }
    }

    return reply.send({
      data: presencas,
      meta: {
        professor: {
          nome: professor.nome,
          departamento: professor.departamento,
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
    req.log.error("Erro ao buscar presenças do professor:", error);

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
    if (dados.data) {
      const dataPresenca = new Date(dados.data);
      const hoje = new Date();
      hoje.setHours(0, 0, 0, 0);

      if (dataPresenca > hoje) {
        return sendError(
          reply,
          400,
          "Não é possível registrar presença para datas futuras"
        );
      }
    }

    // Usar transação para garantir consistência
    const presenca = await prisma.$transaction(async (tx) => {
      // Verificar se a presença existe
      const presencaExiste = await tx.presenca.findUnique({
        where: { presencaId: id },
      });

      if (!presencaExiste) {
        throw new Error("Registro de presença não encontrado");
      }

      // Se a data está sendo alterada, verificar duplicidade
      if (dados.data) {
        const duplicada = await tx.presenca.findFirst({
          where: {
            data: new Date(dados.data),
            professorId: presencaExiste.professorId,
            NOT: {
              presencaId: id,
            },
          },
        });

        if (duplicada) {
          throw new Error("Já existe registro de presença para esta data");
        }
      }

      // Atualizar o registro
      return await tx.presenca.update({
        where: { presencaId: id },
        data: {
          estado: dados.estado as Estado,
          data: dados.data ? new Date(dados.data) : undefined,
        },
        include: {
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
      mensagem: "Presença atualizada com sucesso",
      data: presenca,
    });
  } catch (error) {
    req.log.error("Erro ao atualizar presença:", error);

    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";

    if (errorMessage === "Registro de presença não encontrado") {
      return sendError(reply, 404, errorMessage);
    }

    if (errorMessage === "Já existe registro de presença para esta data") {
      return sendError(reply, 409, errorMessage);
    }

    return sendError(reply, 500, "Erro interno ao atualizar presença");
  }
}

export async function deletarPresenca(
  req: FastifyRequest<{ Params: IdParam }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;
  try {
    const { id } = req.params;
    const presencaExiste = await prisma.presenca.findUnique({
      where: { presencaId: id },
    });

    if (!presencaExiste) {
      return sendError(reply, 404, "Presença não encontrada");
    }

    await prisma.presenca.delete({ where: { presencaId: id } });
    return reply.send({
      mensagem: "Presença removida com sucesso",
    });
  } catch (error) {
    req.log.error("Erro ao deletar presença:", error);
    return sendError(reply, 500, "Erro interno ao deletar presença");
  }
}
