import { PrismaClient, Estado, TipoUsuario } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Criar permissões iniciais
  await prisma.permissao.createMany({
    data: [
      { Descricao: "Registrar Sumário" },
      { Descricao: "Gerir Presenças" },
      { Descricao: "Visualizar Efetividades" },
    ],
    skipDuplicates: true,
  });

  // Criar funcionário (sumarista)
  const funcionario = await prisma.funcionario.upsert({
    where: { Email: "sumarista@instituicao.com" },
    update: {},
    create: {
      Nome: "Carlos Sumarista",
      Email: "sumarista@instituicao.com",
      Cargo: "Sumarista",
    },
  });

  // Criar professor
  const professor = await prisma.professor.upsert({
    where: { ProfessorID: 1 },
    update: {},
    create: {
      Nome: "Ana Professora",
      Departamento: "Matemática",
      CargaHoraria: 20,
    },
  });

  // Criar curso
  const curso = await prisma.curso.upsert({
    where: { CursoID: 1 },
    update: {
      Professor: {
        connect: {
          ProfessorID: professor.ProfessorID,
        },
      },
    },
    create: {
      Nome: "Álgebra Linear",
      Descricao: "Curso introdutório de Álgebra Linear",
      Professor: {
        connect: {
          ProfessorID: professor.ProfessorID,
        },
      },
    },
  });

  // Criar usuário vinculado ao funcionário
  await prisma.usuario.upsert({
    where: { Email: "sumarista@instituicao.com" },
    update: {},
    create: {
      Nome: "Carlos Sumarista",
      Email: "sumarista@instituicao.com",
      SenhaHash: "senha_hash_fake",
      Tipo: TipoUsuario.FUNCIONARIO,
      Funcionario: {
        connect: {
          FuncionarioID: funcionario.FuncionarioID,
        },
      },
      Permissoes: {
        create: [{ PermissaoID: 1 }, { PermissaoID: 2 }],
      },
    },
  });

  // Criar usuário vinculado ao professor
  await prisma.usuario.upsert({
    where: { Email: "prof@instituicao.com" },
    update: {},
    create: {
      Nome: "Ana Professora",
      Email: "prof@instituicao.com",
      SenhaHash: "senha_hash_fake",
      Tipo: TipoUsuario.PROFESSOR,
      Professor: {
        connect: {
          ProfessorID: professor.ProfessorID,
        },
      },
    },
  });

  // Criar sumário
  await prisma.sumario.create({
    data: {
      Data: new Date(),
      Conteudo: "Introdução à Álgebra",
      CursoID: curso.CursoID,
      ProfessorID: professor.ProfessorID,
    },
  });

  // Criar presença
  await prisma.presenca.create({
    data: {
      Data: new Date(),
      Estado: Estado.PRESENTE,
      ProfessorID: professor.ProfessorID,
    },
  });

  // Criar efetividade
  await prisma.efetividade.create({
    data: {
      Data: new Date(),
      HorasTrabalhadas: 4,
      ProfessorID: professor.ProfessorID,
    },
  });

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
