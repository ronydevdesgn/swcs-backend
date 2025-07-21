// Lista cursos filtrando pelo departamento do professor
export async function listarCursosPorDepartamento(
  req: FastifyRequest<{ Querystring: { departamento: string } }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;
  try {
    const { departamento } = req.query;
    if (!departamento) {
      return reply.status(400).send({ mensagem: "Departamento é obrigatório" });
    }

    // Validar se o departamento é válido
    if (!Object.values(Departamento).includes(departamento as Departamento)) {
      return reply.status(400).send({ mensagem: "Departamento inválido" });
    }

    // Buscar IDs dos professores do departamento
    const professores = await prisma.professor.findMany({
      where: { Departamento: departamento as Departamento },
      select: { ProfessorID: true },
    });
    const ids = professores.map((p) => p.ProfessorID);
    if (ids.length === 0) {
      return reply.send({ data: [], meta: { total: 0 } });
    }

    // Buscar cursos associados a esses professores
    const professorCursos = await prisma.professorCurso.findMany({
      where: { ProfessorID: { in: ids } },
      select: { CursoID: true },
    });
    const cursoIds = [...new Set(professorCursos.map((pc) => pc.CursoID))];
    if (cursoIds.length === 0) {
      return reply.send({ data: [], meta: { total: 0 } });
    }

    const cursos = await prisma.curso.findMany({
      where: { CursoID: { in: cursoIds } },
      include: {
        Professores: true,
        Sumarios: {
          take: 5,
          orderBy: { Data: "desc" },
        },
        _count: { select: { Sumarios: true } },
      },
      orderBy: { Nome: "asc" },
    });

    return reply.send({
      data: cursos.map((curso) => ({
        ...curso,
        Nome: curso.Nome.trim(),
        Descricao: curso.Descricao?.trim(),
      })),
      meta: { total: cursos.length },
    });
  } catch (error) {
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao listar cursos por departamento",
      detalhes:
        process.env.NODE_ENV === "development" && error instanceof Error
          ? error.message
          : undefined,
    });
  }
}
import { FastifyRequest, FastifyReply } from "fastify";
import {
  CreateCursoInput,
  UpdateCursoInput,
  IdParam,
} from "../schemas/cursos.schema";
import { isAppError } from "../types/errors";
import { Departamento } from "@prisma/client";

export async function criarCurso(
  req: FastifyRequest<{ Body: CreateCursoInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { Nome, Descricao = "", ProfessorID } = req.body;

    // Usar transação para garantir consistência
    const curso = await prisma.$transaction(async (tx) => {
      // Verificar se o professor existe
      const professor = await tx.professor.findUnique({
        where: { ProfessorID },
      });

      if (!professor) {
        throw { code: "NOT_FOUND", message: "Professor não encontrado" };
      }

      // Verificar se já existe um curso com o mesmo nome
      const cursoExistente = await tx.curso.findFirst({
        where: {
          Nome: {
            equals: Nome,
            // Handle case-insensitive search at application level
          },
        },
      });

      if (cursoExistente) {
        throw {
          code: "DUPLICATE",
          message: "Já existe um curso com este nome",
        };
      }

      // Criar o curso
      const novoCurso = await tx.curso.create({
        data: {
          Nome,
          Descricao,
        },
        include: {
          Professores: true,
        },
      });

      // Associar professor ao curso (tabela intermediária)
      await tx.professorCurso.create({
        data: {
          ProfessorID,
          CursoID: novoCurso.CursoID,
        },
      });

      // Retornar curso com professores
      const result = await tx.curso.findUnique({
        where: { CursoID: novoCurso.CursoID },
        include: { Professores: true },
      });
      if (!result) {
        throw { code: "NOT_FOUND", message: "Curso não encontrado" };
      }
      return result;
    });

    return reply.status(201).send({
      mensagem: "Curso criado com sucesso",
      data: {
        ...curso,
        Nome: curso.Nome.trim(),
        Descricao: curso.Descricao?.trim(),
      },
    });
  } catch (error) {
    req.log.error(error);

    if (isAppError(error)) {
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
    }

    return reply.status(500).send({
      mensagem: "Erro interno ao criar curso",
      detalhes:
        process.env.NODE_ENV === "development" && error instanceof Error
          ? error.message
          : undefined,
    });
  }
}

export async function listarCursos(req: FastifyRequest, reply: FastifyReply) {
  const prisma = req.server.prisma;

  try {
    const { search, departamento } = req.query as {
      search?: string;
      departamento?: string;
    };

    const cursos = await prisma.curso.findMany({
      where: {
        AND: [
          search
            ? {
                OR: [
                  {
                    Nome: {
                      contains: search,
                      // Handle case-insensitive search at application level if needed
                    },
                  },
                  {
                    Descricao: {
                      contains: search,
                      // Handle case-insensitive search at application level if needed
                    },
                  },
                ],
              }
            : {},
          // Não é possível filtrar diretamente por Departamento em Professores via relação N:N
          // Se necessário, filtrar após consulta ou via query separada
          {},
        ],
      },
      include: {
        Professores: true,
        Sumarios: {
          take: 5,
          orderBy: {
            Data: "desc",
          },
        },
        _count: {
          select: {
            Sumarios: true,
          },
        },
      },
      orderBy: {
        Nome: "asc",
      },
    });

    return reply.send({
      data: cursos.map((curso) => ({
        ...curso,
        Nome: curso.Nome.trim(),
        Descricao: curso.Descricao?.trim(),
      })),
      meta: {
        total: cursos.length,
      },
    });
  } catch (error) {
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao listar cursos",
      detalhes:
        process.env.NODE_ENV === "development" && error instanceof Error
          ? error.message
          : undefined,
    });
  }
}

export async function buscarCurso(
  req: FastifyRequest<{ Params: IdParam }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { id } = req.params;

    const curso = await prisma.curso.findUnique({
      where: { CursoID: id },
      include: {
        Professores: true,
        Sumarios: {
          orderBy: {
            Data: "desc",
          },
        },
        _count: {
          select: {
            Sumarios: true,
          },
        },
      },
    });

    if (!curso) {
      throw { code: "NOT_FOUND", message: "Curso não encontrado" };
    }

    return reply.send({
      data: {
        ...curso,
        Nome: curso.Nome.trim(),
        Descricao: curso.Descricao?.trim(),
      },
    });
  } catch (error) {
    req.log.error(error);

    if (isAppError(error) && error.code === "NOT_FOUND") {
      return reply.status(404).send({
        mensagem: error.message,
      });
    }

    return reply.status(500).send({
      mensagem: "Erro interno ao buscar curso",
      detalhes:
        process.env.NODE_ENV === "development" && error instanceof Error
          ? error.message
          : undefined,
    });
  }
}

export async function atualizarCurso(
  req: FastifyRequest<{ Params: IdParam; Body: UpdateCursoInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { id } = req.params;
    const dados = req.body;

    // Usar transação para garantir consistência
    const curso = await prisma.$transaction(async (tx) => {
      // Verificar se o curso existe
      const cursoExiste = await tx.curso.findUnique({
        where: { CursoID: id },
      });

      if (!cursoExiste) {
        throw { code: "NOT_FOUND", message: "Curso não encontrado" };
      }

      // Se o nome foi alterado, verificar duplicidade
      if (dados.Nome && dados.Nome !== cursoExiste.Nome) {
        const cursoNomeExiste = await tx.curso.findFirst({
          where: {
            Nome: {
              equals: dados.Nome,
              // Handle case-insensitive search at application level if needed
            },
            NOT: { CursoID: id },
          },
        });

        if (cursoNomeExiste) {
          throw {
            code: "DUPLICATE",
            message: "Já existe um curso com este nome",
          };
        }
      }

      // Se houver mudança de professor, verificar se existe
      if (dados.ProfessorID) {
        const professor = await tx.professor.findUnique({
          where: { ProfessorID: dados.ProfessorID },
        });

        if (!professor) {
          throw { code: "NOT_FOUND", message: "Professor não encontrado" };
        }
      }

      // Atualizar o curso
      const cursoAtualizado = await tx.curso.update({
        where: { CursoID: id },
        data: {
          Nome: dados.Nome,
          Descricao: dados.Descricao,
        },
        include: {
          Professores: true,
        },
      });

      // Atualizar associação de professor (se informado)
      if (dados.ProfessorID) {
        // Remove todas as associações anteriores
        await tx.professorCurso.deleteMany({ where: { CursoID: id } });
        // Adiciona nova associação
        await tx.professorCurso.create({
          data: {
            ProfessorID: dados.ProfessorID,
            CursoID: id,
          },
        });
      }

      // Retornar curso com professores
      const result = await tx.curso.findUnique({
        where: { CursoID: id },
        include: { Professores: true },
      });
      if (!result) {
        throw { code: "NOT_FOUND", message: "Curso não encontrado" };
      }
      return result;
    });

    return reply.send({
      mensagem: "Curso atualizado com sucesso",
      data: {
        ...curso,
        Nome: curso.Nome.trim(),
        Descricao: curso.Descricao?.trim(),
      },
    });
  } catch (error) {
    req.log.error(error);

    if (isAppError(error)) {
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
    }

    return reply.status(500).send({
      mensagem: "Erro interno ao atualizar curso",
      detalhes:
        process.env.NODE_ENV === "development" && error instanceof Error
          ? error.message
          : undefined,
    });
  }
}
