import { FastifyRequest, FastifyReply } from "fastify";
import {
  CreatePresencaInput,
  UpdatePresencaInput,
  IdParam,
  CreateBatchPresencaInput,
} from "../schemas/presencas.schema";
import { Estado } from "@prisma/client";

export async function registrarPresenca(
  req: FastifyRequest<{ Body: CreatePresencaInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { Data, ProfessorID, Estado: estado } = req.body;

    // Validar data
    const dataPresenca = new Date(Data);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    if (dataPresenca > hoje) {
      return reply.status(400).send({
        mensagem: "Não é possível registrar presença para datas futuras",
      });
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
        throw { code: "NOT_FOUND", message: "Professor não encontrado" };
      }

      // Verificar se já existe registro para esta data
      const presencaExistente = await tx.presenca.findFirst({
        where: {
          Data: dataPresenca,
          ProfessorID,
        },
      });

      if (presencaExistente) {
        throw {
          code: "DUPLICATE",
          message: "Já existe registro de presença para esta data",
        };
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
      mensagem: "Erro interno ao registrar presença",
      detalhes:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
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
        return reply.status(400).send({
          mensagem: `Não é possível registrar presença para a data futura ${presenca.Data}`,
        });
      }
    }

    // Usar transação para garantir consistência
    const resultados = await prisma.$transaction(async (tx) => {
      const professoresIds = [...new Set(presencas.map((p) => p.ProfessorID))];

      // Verificar se todos os professores existem
      const professores = await tx.professor.findMany({
        where: {
          ProfessorID: {
            in: professoresIds,
          },
        },
        select: {
          ProfessorID: true,
          Nome: true,
        },
      });

      if (professores.length !== professoresIds.length) {
        throw {
          code: "NOT_FOUND",
          message: "Um ou mais professores não encontrados",
        };
      }

      // Verificar registros existentes
      const datasParaVerificar = presencas.map((p) => new Date(p.Data));
      const presencasExistentes = await tx.presenca.findMany({
        where: {
          ProfessorID: { in: professoresIds },
          Data: { in: datasParaVerificar },
        },
      });

      if (presencasExistentes.length > 0) {
        const registrosDuplicados = presencasExistentes
          .map(
            (p) => `${p.ProfessorID} - ${p.Data.toISOString().split("T")[0]}`
          )
          .join(", ");
        throw {
          code: "DUPLICATE",
          message: `Já existem registros de presença para: ${registrosDuplicados}`,
        };
      }

      // Criar todos os registros
      return await tx.presenca.createMany({
        data: presencas.map((p) => ({
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
      mensagem: "Erro interno ao registrar presenças em lote",
      detalhes:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}

export async function listarPresencas(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { inicio, fim, estado, professorId } = req.query as {
      inicio?: string;
      fim?: string;
      estado?: Estado;
      professorId?: string;
    };

    // Construir filtros
    const where: any = {};

    if (inicio || fim) {
      where.Data = {};
      if (inicio) where.Data.gte = new Date(inicio);
      if (fim) where.Data.lte = new Date(fim);
    }

    if (estado) {
      where.Estado = estado;
    }

    if (professorId) {
      where.ProfessorID = parseInt(professorId);
    }

    // Buscar presenças e calcular estatísticas
    const [presencas, estatisticas] = await prisma.$transaction([
      prisma.presenca.findMany({
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
      }),
      prisma.presenca.groupBy({
        by: ["Estado"],
        where,
        _count: true,
      }),
    ]);

    // Processar estatísticas
    const estatisticasPorEstado = estatisticas.reduce((acc, curr) => {
      acc[curr.Estado] = curr._count;
      return acc;
    }, {} as Record<Estado, number>);

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
    return reply.status(500).send({
      mensagem: "Erro interno ao listar presenças",
      detalhes:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}

export async function buscarPresencasProfessor(
  req: FastifyRequest<{ Params: IdParam }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { id } = req.params;
    const { inicio, fim, estado } = req.query as {
      inicio?: string;
      fim?: string;
      estado?: Estado;
    };

    // Verificar se o professor existe
    const professor = await prisma.professor.findUnique({
      where: { ProfessorID: id },
      select: {
        Nome: true,
        Departamento: true,
      },
    });

    if (!professor) {
      return reply.status(404).send({
        mensagem: "Professor não encontrado",
      });
    }

    // Construir filtros
    const where: any = { ProfessorID: id };

    if (inicio || fim) {
      where.Data = {};
      if (inicio) where.Data.gte = new Date(inicio);
      if (fim) where.Data.lte = new Date(fim);
    }

    if (estado) {
      where.Estado = estado;
    }

    // Buscar presenças e calcular estatísticas
    const [presencas, estatisticas] = await prisma.$transaction([
      prisma.presenca.findMany({
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
      }),
      prisma.presenca.groupBy({
        by: ["Estado"],
        where,
        _count: true,
      }),
    ]);

    // Calcular percentuais
    const total = presencas.length;
    const estatisticasPorEstado = estatisticas.reduce((acc, curr) => {
      acc[curr.Estado] = {
        count: curr._count,
        percentual: Number(((curr._count / total) * 100).toFixed(2)),
      };
      return acc;
    }, {} as Record<Estado, { count: number; percentual: number }>);

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
    return reply.status(500).send({
      mensagem: "Erro interno ao buscar presenças do professor",
      detalhes:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
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
        return reply.status(400).send({
          mensagem: "Não é possível registrar presença para datas futuras",
        });
      }
    }

    // Usar transação para garantir consistência
    const presenca = await prisma.$transaction(async (tx) => {
      // Verificar se a presença existe
      const presencaExiste = await tx.presenca.findUnique({
        where: { PresencaID: id },
      });

      if (!presencaExiste) {
        throw {
          code: "NOT_FOUND",
          message: "Registro de presença não encontrado",
        };
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
          throw {
            code: "DUPLICATE",
            message: "Já existe registro de presença para esta data",
          };
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
      mensagem: "Erro interno ao atualizar presença",
      detalhes:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}
