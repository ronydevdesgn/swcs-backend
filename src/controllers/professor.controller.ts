import { FastifyRequest, FastifyReply } from "fastify";
import {
  CreateProfessorInput,
  UpdateProfessorInput,
  IdParam,
} from "../schemas/professor.schema";
import { hashSenha } from "../utils/hash";
import { TipoUsuario, Departamento } from "@prisma/client";

interface ProfessorData {
  Nome: string;
  Email: string;
  Departamento: string;
  CargaHoraria: number;
}

export async function criarProfessor(
  req: FastifyRequest<{ Body: CreateProfessorInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { Nome, Email, Senha, Departamento, CargaHoraria } = req.body;

    // Verificar email único
    const emailExiste = await prisma.usuario.findUnique({
      where: { Email },
    });

    if (emailExiste) {
      return reply.status(409).send({
        mensagem: "Email já está em uso",
      });
    }

    // Criar professor e usuário em uma transação
    const result = await prisma.$transaction(async (tx) => {
      // Criar professor
      // Validar Departamento
      if (!Object.values(Departamento).includes(Departamento as Departamento)) {
        throw new Error("Departamento inválido");
      }
      const professor = await tx.professor.create({
        data: {
          Nome,
          Departamento: Departamento as Departamento,
          CargaHoraria,
        },
      });

      // Hash da senha
      const senhaHash = await hashSenha(Senha);

      // Criar usuário associado
      await tx.usuario.create({
        data: {
          Nome,
          Email,
          SenhaHash: senhaHash,
          Tipo: TipoUsuario.PROFESSOR,
          Professor: {
            connect: {
              ProfessorID: professor.ProfessorID,
            },
          },
          Permissoes: {
            create: [
              { PermissaoID: 1 }, // Registrar Sumário
              { PermissaoID: 2 }, // Gerir Presenças
            ],
          },
        },
      });

      return professor;
    });

    return reply.status(201).send({
      mensagem: "Professor criado com sucesso",
      data: result,
    });
  } catch (error) {
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao criar professor",
    });
  }
}

export async function listarProfessores(
  req: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const professores = await req.server.prisma.professor.findMany({
      include: {
        Usuario: {
          select: {
            Email: true,
            Permissoes: {
              include: {
                Permissao: true,
              },
            },
          },
        },
        Cursos: {
          select: {
            CursoID: true,
            Curso: {
              select: {
                Nome: true,
              },
            },
          },
        },
        Sumarios: {
          select: {
            SumarioID: true,
            Data: true,
            Conteudo: true,
          },
          orderBy: {
            Data: "desc",
          },
          take: 5, // Últimos 5 sumários
        },
      },
    });

    return reply.send({ data: professores });
  } catch (error) {
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao listar professores",
    });
  }
}

export async function buscarProfessor(
  req: FastifyRequest<{ Params: IdParam }>,
  reply: FastifyReply
) {
  try {
    const { id } = req.params;

    const professor = await req.server.prisma.professor.findUnique({
      where: { ProfessorID: id },
      include: {
        Usuario: {
          select: {
            Email: true,
            Permissoes: {
              include: {
                Permissao: true,
              },
            },
          },
        },
        Cursos: true,
        Sumarios: {
          orderBy: {
            Data: "desc",
          },
        },
        Presencas: {
          orderBy: {
            Data: "desc",
          },
          take: 30, // Últimos 30 dias
        },
        Efetividades: {
          orderBy: {
            Data: "desc",
          },
          take: 30, // Últimos 30 dias
        },
      },
    });

    if (!professor) {
      return reply.status(404).send({
        mensagem: "Professor não encontrado",
      });
    }

    return reply.send({ data: professor });
  } catch (error) {
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao buscar professor",
    });
  }
}

export async function atualizarProfessor(
  req: FastifyRequest<{ Params: IdParam; Body: UpdateProfessorInput }>,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const { id } = req.params;
    const dados = req.body;

    // Verificar se o professor existe
    const professorExiste = await prisma.professor.findUnique({
      where: { ProfessorID: id },
      include: {
        Usuario: true,
      },
    });

    if (!professorExiste) {
      return reply.status(404).send({
        mensagem: "Professor não encontrado",
      });
    }

    // Verificar email único se estiver sendo atualizado
    if (dados.Email && dados.Email !== professorExiste.Usuario?.Email) {
      const emailExiste = await prisma.usuario.findUnique({
        where: { Email: dados.Email },
      });

      if (emailExiste) {
        return reply.status(409).send({
          mensagem: "Email já está em uso",
        });
      }
    }

    // Atualizar professor e usuário em uma transação
    const result = await prisma.$transaction(async (tx) => {
      const professor = await tx.professor.update({
        where: { ProfessorID: id },
        data: {
          Nome: dados.Nome,
          Departamento: dados.Departamento
            ? Object.values(Departamento).includes(
                dados.Departamento as Departamento
              )
              ? (dados.Departamento as Departamento)
              : undefined
            : undefined,
          CargaHoraria: dados.CargaHoraria,
        },
      });

      if (dados.Email && professorExiste.Usuario) {
        await tx.usuario.update({
          where: { UsuarioID: professorExiste.Usuario.UsuarioID },
          data: {
            Email: dados.Email,
            Nome: dados.Nome,
          },
        });
      }

      return professor;
    });

    return reply.send({
      mensagem: "Professor atualizado com sucesso",
      data: result,
    });
  } catch (error) {
    req.log.error(error);
    return reply.status(500).send({
      mensagem: "Erro interno ao atualizar professor",
    });
  }
}
