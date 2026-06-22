import { faker } from "@faker-js/faker";
import {
    Cargo,
    Departamento,
    Estado,
    PrismaClient,
    TipoUsuario,
} from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Criar permissões iniciais
  // Limpar dados existentes (ordem para respeitar FK)
  await prisma.refreshToken.deleteMany();
  await prisma.passwordReset.deleteMany();
  await prisma.usuarioPermissao.deleteMany();
  await prisma.permissao.deleteMany();
  await prisma.presenca.deleteMany();
  await prisma.efetividade.deleteMany();
  await prisma.sumario.deleteMany();
  await prisma.professorCurso.deleteMany();
  await prisma.usuario.deleteMany();
  await prisma.professor.deleteMany();
  await prisma.funcionario.deleteMany();
  await prisma.curso.deleteMany();

  // Criar permissões base
  const permissoes = [
    "Visualizar Dashboard",
    "Registrar Sumário",
    "Gerir Presenças",
    "Visualizar Efetividades",
    "Acesso total ao sistema",
  ];

  await prisma.permissao.createMany({
    data: permissoes.map((p) => ({ descricao: p })),
  });

  // Buscar as permissões criadas para associar aos usuários
  const permissaoDashboard = await prisma.permissao.findFirst({
    where: { descricao: "Visualizar Dashboard" },
  });
  const permissaoRegistrarSumario = await prisma.permissao.findFirst({
    where: { descricao: "Registrar Sumário" },
  });
  const permissaoAcessoTotal = await prisma.permissao.findFirst({
    where: { descricao: "Acesso total ao sistema" },
  });

  // Gerar dados falsos com faker
  const NUM_CURSOS = 5;
  const NUM_PROFESSORES = 5;
  const NUM_FUNCIONARIOS = 5;

  const cursos = [] as any[];
  for (let i = 0; i < NUM_CURSOS; i++) {
    cursos.push(
      await prisma.curso.create({
        data: {
          nome: faker.internet.domainWord() + " " + faker.word.adjective(),
          descricao: faker.lorem.sentence(),
        },
      })
    );
  }

  const professores = [] as any[];
  for (let i = 0; i < NUM_PROFESSORES; i++) {
    professores.push(
      await prisma.professor.create({
        data: {
          nome: faker.person.fullName(),
          departamento: faker.helpers.arrayElement(Object.values(Departamento)),
          cargaHoraria: faker.number.int({ min: 10, max: 40 }),
        },
      })
    );
  }

  const funcionarios = [] as any[];
  for (let i = 0; i < NUM_FUNCIONARIOS; i++) {
    funcionarios.push(
      await prisma.funcionario.create({
        data: {
          nome: faker.person.fullName(),
          email: faker.internet.email().toLowerCase(),
          cargo: faker.helpers.arrayElement(Object.values(Cargo)),      
        },
      })
    );
  }

  // Criar usuários para alguns funcionários e professores
  for (const f of funcionarios) {
    const funcionarioUser = await prisma.usuario.create({
      data: {
        nome: f.nome,
        email: f.email,
        senhaHash: await bcrypt.hash("funcionario123", 5),
        tipo: TipoUsuario.FUNCIONARIO,
        funcionario: { connect: { funcionarioId: f.funcionarioId } },
      },
    });

    // Funcionários têm acesso total ao sistema
    if (permissaoAcessoTotal) {
      await prisma.usuarioPermissao.create({
        data: {
          usuarioId: funcionarioUser.usuarioId,
          permissaoId: permissaoAcessoTotal.permissaoId,
        },
      });
    }
  }

  for (const p of professores.slice(0, 6)) {
    const profUser = await prisma.usuario.create({
      data: {
        nome: p.nome,
        email: faker.internet.email().toLowerCase(),
        senhaHash: await bcrypt.hash("professor123", 5),
        tipo: TipoUsuario.PROFESSOR,
        professor: { connect: { professorId: p.professorId } },
      },
    });

    // Professores têm permissão para visualizar dashboard e registrar sumário
    if (permissaoDashboard) {
      await prisma.usuarioPermissao.create({
        data: {
          usuarioId: profUser.usuarioId,
          permissaoId: permissaoDashboard.permissaoId,
        },
      });
    }
    if (permissaoRegistrarSumario) {
      await prisma.usuarioPermissao.create({
        data: {
          usuarioId: profUser.usuarioId,
          permissaoId: permissaoRegistrarSumario.permissaoId,
        },
      });
    }

    // Associar professor a um curso aleatório
    await prisma.professorCurso.createMany({
      data: [
        {
          professorId: p.professorId,
          cursoId: faker.helpers.arrayElement(cursos).cursoId,
        },
      ],
    });
  }

  // Criar sumários, presenças e efetividades aleatórias
  for (const p of professores) {
    const curso = faker.helpers.arrayElement(cursos);
    await prisma.sumario.create({
      data: {
        data: faker.date.recent(),
        conteudo: faker.lorem.paragraph(),
        cursoId: curso.cursoId,
        professorId: p.professorId,
      },
    });

    await prisma.presenca.create({
      data: {
        data: faker.date.recent(),
        estado: faker.helpers.arrayElement(Object.values(Estado)),
        professorId: p.professorId,
        cursoId: curso.cursoId,
      },
    });

    await prisma.efetividade.create({
      data: {
        data: faker.date.recent(),
        horasTrabalhadas: faker.number.int({ min: 1, max: 6 }),
        professorId: p.professorId,
        cursoId: curso.cursoId,
      },
    });
  }

  console.log("Seed concluído com sucesso.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
