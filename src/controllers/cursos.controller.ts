import { FastifyRequest, FastifyReply } from "fastify";
import {
  CreateCursoInput,
  UpdateCursoInput,
  IdParam,
  ListarCursosQuery,
  DepartamentoQuery,
} from "../schemas/cursos.schema";
import { Departamento } from "@prisma/client";

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

export async function criarCurso(
  req: FastifyRequest<{ Body: CreateCursoInput }>,
  reply: FastifyReply
) {
  try {
    const { Nome, Descricao = "", ProfessorID } = req.body;
    const prisma = req.server.prisma;

    // Usar transação para garantir consistência
    const curso = await prisma.$transaction(async (tx) => {
      // Verificar se o professor existe
      const professor = await tx.professor.findUnique({
        where: { ProfessorID },
      });

      if (!professor) {
        throw new Error("Professor não encontrado");
      }

      // Verificar se já existe um curso com o mesmo nome
      const cursoExistente = await tx.curso.findFirst({
        where: {
          Nome: {
            equals: Nome,
            // mode: "insensitive",
          },
        },
      });

      if (cursoExistente) {
        throw new Error("Já existe um curso com este nome");
      }

      // Criar o curso
      const novoCurso = await tx.curso.create({
        data: {
          Nome,
          Descricao,
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
      return await tx.curso.findUnique({
        where: { CursoID: novoCurso.CursoID },
        include: {
          Professores: true,
          _count: { select: { Sumarios: true } },
        },
      });
    });

    if (!curso) {
      return sendError(reply, 500, "Erro ao criar curso");
    }

    req.log.info(
      `Curso criado com sucesso: ${curso.Nome} (ID: ${curso.CursoID})`
    );

    return reply.status(201).send({
      mensagem: "Curso criado com sucesso",
      data: {
        ...curso,
        Nome: curso.Nome.trim(),
        Descricao: curso.Descricao?.trim(),
      },
    });
  } catch (error) {
    req.log.error("Erro ao criar curso:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido";

    if (errorMessage === "Professor não encontrado") {
      return sendError(reply, 404, errorMessage);
    }

    if (errorMessage === "Já existe um curso com este nome") {
      return sendError(reply, 409, errorMessage);
    }

    return sendError(reply, 500, "Erro interno ao criar curso", errorMessage);
  }
}

export async function listarCursos(
  req: FastifyRequest<{ Querystring: ListarCursosQuery }>,
  reply: FastifyReply
) {
  try {
    const { search, departamento } = req.query;
    const prisma = req.server.prisma;

    const whereCondition: any = {
      AND: [],
    };

    // Filtro de busca por nome ou descrição
    if (search) {
      whereCondition.AND.push({
        OR: [
          {
            Nome: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            Descricao: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      });
    }

    // Filtro por departamento (através dos professores)
    if (departamento) {
      if (!Object.values(Departamento).includes(departamento as Departamento)) {
        return sendError(reply, 400, "Departamento inválido");
      }

      whereCondition.AND.push({
        Professores: {
          some: {
            Professor: {
              Departamento: departamento as Departamento,
            },
          },
        },
      });
    }

    const cursos = await prisma.curso.findMany({
      where: whereCondition.AND.length > 0 ? whereCondition : {},
      include: {
        Professores: true,
        Sumarios: {
          take: 5,
          orderBy: { Data: "desc" },
        },
        _count: {
          select: { Sumarios: true },
        },
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
    req.log.error("Erro ao listar cursos:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido";
    return sendError(reply, 500, "Erro interno ao listar cursos", errorMessage);
  }
}

export async function listarCursosPorDepartamento(
  req: FastifyRequest<{ Querystring: DepartamentoQuery }>,
  reply: FastifyReply
) {
  try {
    const { departamento } = req.query;
    const prisma = req.server.prisma;

    // Validar se o departamento é válido
    if (!Object.values(Departamento).includes(departamento as Departamento)) {
      return sendError(reply, 400, "Departamento inválido");
    }

    // Buscar cursos associados ao departamento através dos professores (contem erro ao buscar o curso por departamento)
    // const cursos = await prisma.curso.findMany({
    //   where: {
    //     Professores: {
    //       some: {
    //         Departamento: departamento as Departamento,
    //       },
    //     },
    //   },
    //   include: {
    //     Professores: true,
    //     Sumarios: {
    //       take: 5,
    //       orderBy: { Data: "desc" },
    //     },
    //     _count: { select: { Sumarios: true } },
    //   },
    //   orderBy: { Nome: "asc" },
    // });

    // return reply.send({
    //   data: cursos.map((curso) => ({
    //     ...curso,
    //     Nome: curso.Nome.trim(),
    //     Descricao: curso.Descricao?.trim(),
    //   })),
    //   meta: { total: cursos.length },
    // });

  } catch (error) {
    req.log.error("Erro ao listar cursos por departamento:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido";
    return sendError(
      reply,
      500,
      "Erro interno ao listar cursos por departamento",
      errorMessage
    );
  }
}

export async function buscarCurso(
  req: FastifyRequest<{ Params: IdParam }>,
  reply: FastifyReply
) {
  try {
    const { id } = req.params;
    const prisma = req.server.prisma;

    const curso = await prisma.curso.findUnique({
      where: { CursoID: id },
      include: {
        Professores: true,
        Sumarios: {
          orderBy: { Data: "desc" },
        },
        _count: {
          select: { Sumarios: true },
        },
      },
    });

    if (!curso) {
      return sendError(reply, 404, "Curso não encontrado");
    }

    return reply.send({
      data: {
        ...curso,
        Nome: curso.Nome.trim(),
        Descricao: curso.Descricao?.trim(),
      },
    });
  } catch (error) {
    req.log.error("Erro ao buscar curso:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido";
    return sendError(reply, 500, "Erro interno ao buscar curso", errorMessage);
  }
}

export async function atualizarCurso(
  req: FastifyRequest<{ Params: IdParam; Body: UpdateCursoInput }>,
  reply: FastifyReply
) {
  try {
    const { id } = req.params;
    const dados = req.body;
    const prisma = req.server.prisma;

    // Usar transação para garantir consistência
    const curso = await prisma.$transaction(async (tx) => {
      // Verificar se o curso existe
      const cursoExiste = await tx.curso.findUnique({
        where: { CursoID: id },
      });

      if (!cursoExiste) {
        throw new Error("Curso não encontrado");
      }

      // Se o nome foi alterado, verificar duplicidade
      if (dados.Nome && dados.Nome !== cursoExiste.Nome) {
        const cursoNomeExiste = await tx.curso.findFirst({
          where: {
            Nome: {
              equals: dados.Nome,
            },
            NOT: { CursoID: id },
          },
        });

        if (cursoNomeExiste) {
          throw new Error("Já existe um curso com este nome");
        }
      }

      // Se houver mudança de professor, verificar se existe
      if (dados.ProfessorID) {
        const professor = await tx.professor.findUnique({
          where: { ProfessorID: dados.ProfessorID },
        });

        if (!professor) {
          throw new Error("Professor não encontrado");
        }
      }

      // Atualizar o curso
      const cursoAtualizado = await tx.curso.update({
        where: { CursoID: id },
        data: {
          ...(dados.Nome && { Nome: dados.Nome }),
          ...(dados.Descricao !== undefined && { Descricao: dados.Descricao }),
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
      return await tx.curso.findUnique({
        where: { CursoID: id },
        include: {
          Professores: true,
          _count: { select: { Sumarios: true } },
        },
      });
    });

    if (!curso) {
      return sendError(reply, 500, "Erro ao atualizar curso");
    }

    req.log.info(
      `Curso atualizado com sucesso: ${curso.Nome} (ID: ${curso.CursoID})`
    );

    return reply.send({
      mensagem: "Curso atualizado com sucesso",
      data: {
        ...curso,
        Nome: curso.Nome.trim(),
        Descricao: curso.Descricao?.trim(),
      },
    });
  } catch (error) {
    req.log.error("Erro ao atualizar curso:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido";

    if (
      errorMessage === "Curso não encontrado" ||
      errorMessage === "Professor não encontrado"
    ) {
      return sendError(reply, 404, errorMessage);
    }

    if (errorMessage === "Já existe um curso com este nome") {
      return sendError(reply, 409, errorMessage);
    }

    return sendError(
      reply,
      500,
      "Erro interno ao atualizar curso",
      errorMessage
    );
  }
}

export async function deletarCurso(
  req: FastifyRequest<{ Params: IdParam }>,
  reply: FastifyReply
) {
  try {
    const { id } = req.params;
    const prisma = req.server.prisma;

    // Usar transação para garantir consistência
    await prisma.$transaction(async (tx) => {
      // Verificar se o curso existe
      const curso = await tx.curso.findUnique({
        where: { CursoID: id },
      });

      if (!curso) {
        throw new Error("Curso não encontrado");
      }

      // Remover todas as associações professor-curso
      await tx.professorCurso.deleteMany({
        where: { CursoID: id },
      });

      // Remover o curso
      await tx.curso.delete({ where: { CursoID: id } });
    });

    req.log.info(`Curso deletado com sucesso (ID: ${id})`);

    return reply.send({
      mensagem: "Curso removido com sucesso",
    });
  } catch (error) {
    req.log.error("Erro ao deletar curso:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido";

    if (errorMessage === "Curso não encontrado") {
      return sendError(reply, 404, errorMessage);
    }

    return sendError(reply, 500, "Erro interno ao remover curso", errorMessage);
  }
}
