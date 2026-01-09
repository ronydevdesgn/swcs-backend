import {
  PrismaClient,
  Estado,
  TipoUsuario,
  Departamento,
  Cargo,
} from "@prisma/client";
import bcrypt from "bcryptjs";
import { faker } from "@faker-js/faker";
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
    data: permissoes.map((p) => ({ Descricao: p })),
  });

  // Buscar as permissões criadas para associar aos usuários
  const permissaoDashboard = await prisma.permissao.findFirst({
    where: { Descricao: "Visualizar Dashboard" },
  });
  const permissaoRegistrarSumario = await prisma.permissao.findFirst({
    where: { Descricao: "Registrar Sumário" },
  });
  const permissaoAcessoTotal = await prisma.permissao.findFirst({
    where: { Descricao: "Acesso total ao sistema" },
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
          Nome: faker.internet.domainWord() + " " + faker.word.adjective(),
          Descricao: faker.lorem.sentence(),
        },
      })
    );
  }

  const professores = [] as any[];
  for (let i = 0; i < NUM_PROFESSORES; i++) {
    professores.push(
      await prisma.professor.create({
        data: {
          Nome: faker.person.fullName(),
          Departamento: faker.helpers.arrayElement(Object.values(Departamento)),
          CargaHoraria: faker.number.int({ min: 10, max: 40 }),
        },
      })
    );
  }

  const funcionarios = [] as any[];
  for (let i = 0; i < NUM_FUNCIONARIOS; i++) {
    funcionarios.push(
      await prisma.funcionario.create({
        data: {
          Nome: faker.person.fullName(),
          Email: faker.internet.email().toLowerCase(),
          Cargo: faker.helpers.arrayElement(Object.values(Cargo)),      
        },
      })
    );
  }

  // Criar usuários para alguns funcionários e professores
  for (const f of funcionarios) {
    const funcionarioUser = await prisma.usuario.create({
      data: {
        Nome: f.Nome,
        Email: f.Email,
        SenhaHash: await bcrypt.hash("funcionario123", 5),
        Tipo: TipoUsuario.FUNCIONARIO,
        Funcionario: { connect: { FuncionarioID: f.FuncionarioID } },
      },
    });

    // Funcionários têm acesso total ao sistema
    if (permissaoAcessoTotal) {
      await prisma.usuarioPermissao.create({
        data: {
          UsuarioID: funcionarioUser.UsuarioID,
          PermissaoID: permissaoAcessoTotal.PermissaoID,
        },
      });
    }
  }

  for (const p of professores.slice(0, 6)) {
    const profUser = await prisma.usuario.create({
      data: {
        Nome: p.Nome,
        Email: faker.internet.email().toLowerCase(),
        SenhaHash: await bcrypt.hash("professor123", 5),
        Tipo: TipoUsuario.PROFESSOR,
        Professor: { connect: { ProfessorID: p.ProfessorID } },
      },
    });

    // Professores têm permissão para visualizar dashboard e registrar sumário
    if (permissaoDashboard) {
      await prisma.usuarioPermissao.create({
        data: {
          UsuarioID: profUser.UsuarioID,
          PermissaoID: permissaoDashboard.PermissaoID,
        },
      });
    }
    if (permissaoRegistrarSumario) {
      await prisma.usuarioPermissao.create({
        data: {
          UsuarioID: profUser.UsuarioID,
          PermissaoID: permissaoRegistrarSumario.PermissaoID,
        },
      });
    }

    // Associar professor a um curso aleatório
    await prisma.professorCurso.createMany({
      data: [
        {
          ProfessorID: p.ProfessorID,
          CursoID: faker.helpers.arrayElement(cursos).CursoID,
        },
      ],
    });
  }

  // Criar sumários, presenças e efetividades aleatórias
  for (const p of professores) {
    const curso = faker.helpers.arrayElement(cursos);
    await prisma.sumario.create({
      data: {
        Data: faker.date.recent(),
        Conteudo: faker.lorem.paragraph(),
        CursoID: curso.CursoID,
        ProfessorID: p.ProfessorID,
      },
    });

    await prisma.presenca.create({
      data: {
        Data: faker.date.recent(),
        Estado: faker.helpers.arrayElement(Object.values(Estado)),
        ProfessorID: p.ProfessorID,
        CursoID: curso.CursoID,
      },
    });

    await prisma.efetividade.create({
      data: {
        Data: faker.date.recent(),
        HorasTrabalhadas: faker.number.int({ min: 1, max: 6 }),
        ProfessorID: p.ProfessorID,
        CursoID: curso.CursoID,
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
