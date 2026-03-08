// src/tests/testHelpers.ts
import { PrismaClient, TipoUsuario } from "@prisma/client";
import jwt from "jsonwebtoken";
import { app } from "../server";

let prismaInstance: PrismaClient;

function getPrisma() {
  if (!prismaInstance) {
    prismaInstance = new PrismaClient();
  }
  return prismaInstance;
}


// Token de teste fixo para autenticação
const JWT_SECRET = process.env.JWT_SECRET || "minhasecretachave";

export function generateTestToken(userId: number, email: string, tipo: string, permissions: string[] = []) {
  return jwt.sign(
    {
      id: userId,
      tipo,
      email,
      nome: "Usuário Teste",
      permissoes: permissions,
    },
    JWT_SECRET,
    { expiresIn: "1d" }
  );
}

export async function createTestProfessor() {
  const uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(7);
  const professor = await getPrisma().professor.create({
    data: {
      nome: `Professor Teste ${uniqueId}`,
      departamento: "INFORMATICA",
      cargaHoraria: 20,
    },
  });
  return { professor };
}

export async function createTestCurso() {
  const uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(7);
  const curso = await getPrisma().curso.create({
    data: {
      nome: `Curso Teste ${uniqueId}`,
      descricao: "Curso para testes",
    },
  });
  return curso;
}

export async function createTestFuncionario() {
  const uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(7);
  const funcionario = await getPrisma().funcionario.create({
    data: {
      nome: `Funcionário Teste ${uniqueId}`,
      email: `funcionario${uniqueId}@test.com`,
      cargo: "SECRETARIO",
    },
  });
  return { funcionario };
}

export async function makeAuthenticatedRequest(
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  payload?: any
) {
  let token;
  const uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(7);
  const usuarioInfo = {
     email: `test-default-${uniqueId}@example.com`,
     tipo: "FUNCIONARIO" as TipoUsuario
   }

  // Verificar se já existe um usuário de teste padrão, senão criar
  // NOTE: For parallel tests, we almost always want a NEW user to avoid collisions.
  let user = await getPrisma().usuario.create({
      data: {
        nome: "Usuário Teste Padrão",
        email: usuarioInfo.email,
        senhaHash: "hashvalidoparateste",
        tipo: usuarioInfo.tipo,
      }
    });
  
  // Assign standard permissions to test user so they can access protected routes
  const permissionsToAssign = ["Registrar Sumário", "Gerir Presenças", "Visualizar Efetividades"];
  const assignedPermissions = [];
  
  for (const pDesc of permissionsToAssign) {
     let perm = await getPrisma().permissao.findFirst({ where: { descricao: pDesc } });
     if (!perm) {
       perm = await getPrisma().permissao.create({ data: { descricao: pDesc } });
     }
     await getPrisma().usuarioPermissao.create({
       data: {
         usuarioId: user.usuarioId,
         permissaoId: perm.permissaoId
       }
     });
     assignedPermissions.push(pDesc);
  }

  token = generateTestToken(user.usuarioId, user.email, user.tipo, assignedPermissions);

  return app.inject({
    method,
    url,
    payload,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function createTestUser(opts: { permissions?: string[], tipo?: TipoUsuario } = {}) {
  const uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(7);
  const email = `testuser${uniqueId}@test.com`;
  const tipo = opts.tipo || "FUNCIONARIO";
  
  const user = await getPrisma().usuario.create({
    data: {
      nome: "Usuário Teste com Permissões",
      email: email,
      senhaHash: "hash123",
      tipo: tipo,
    }
  });

  if (opts.permissions && opts.permissions.length > 0) {
    // Ensure permissions exist or find them by description
    for (const pDesc of opts.permissions) {
      let perm = await getPrisma().permissao.findFirst({ where: { descricao: pDesc } });
      if (!perm) {
        perm = await getPrisma().permissao.create({ data: { descricao: pDesc } });
      }
      await getPrisma().usuarioPermissao.create({
        data: {
          usuarioId: user.usuarioId,
          permissaoId: perm.permissaoId
        }
      });
    }
  }
  
  // Return user object compatible with generateTestToken
  return {
    ...user,
    permissions: opts.permissions || []
  };
}

export async function createProfessorCurso(professorId: number, cursoId: number) {
  return await getPrisma().professorCurso.create({
    data: {
      professorId: professorId,
      cursoId: cursoId,
    }
  });
}

export async function cleanupTestData() {
  // Disable global cleanup for parallel testing
  // await getPrisma().usuarioPermissao.deleteMany({});
  // ...
  console.log("Skipping global cleanup to allow parallel execution");
}

export async function seedTestPermissions() {
  // Garantir que permissões 1 e 2 existem para o controller de professor
  const permissoes = [
    { permissaoId: 1, descricao: "Registrar Sumário" },
    { permissaoId: 2, descricao: "Gerir Presenças" },
    { permissaoId: 3, descricao: "Visualizar Efetividades" }, // Opcional
  ];

  for (const p of permissoes) {
    const exists = await getPrisma().permissao.findUnique({ where: { permissaoId: p.permissaoId } });
    if (!exists) {
        // Tenta criar com ID específico. Se o banco rejeitar (autoincrement), pode ser um problema,
        // mas MySQL permite se nao houver conflito.
        // A previous clear makes it likely safe or we might need reset auto-increment.
        try {
            await getPrisma().permissao.create({ data: p });
        } catch (e) {
            console.warn(`Failed to seed permission ${p.permissaoId}, trying without ID`, e);
            await getPrisma().permissao.create({ data: { descricao: p.descricao } });
        }
    }
  }
}
