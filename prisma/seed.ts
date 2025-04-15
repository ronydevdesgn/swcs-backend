import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Criar permissões iniciais
  const permissoes = await prisma.permissao.createMany({
    data: [
      { Descricao: "Registrar Sumário" },
      { Descricao: "Gerir Presenças" },
      { Descricao: "Visualizar Efetividades" },
    ],
  });

  // Criar funcionário (sumarista)
  const funcionario = await prisma.funcionario.create({
    data: {
      Nome: "Carlos Sumarista",
      Email: "sumarista@instituicao.com",
      Cargo: "Sumarista",
    },
  });

  // Criar usuário vinculado ao funcionário
  await prisma.usuario.create({
    data: {
      Nome: "Carlos Sumarista",
      Email: "sumarista@instituicao.com",
      SenhaHash: "senha_hash_fake",
      Tipo: "FUNCIONARIO",
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
}

main()
  .then(() => {
    console.log("Seed concluído com sucesso.");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });