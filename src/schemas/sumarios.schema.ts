import { z } from 'zod';

/**
* Esquema para criar uma nova entrada Sumario (resumo)
* Data - Data do resumo (formato de data ISO recomendado)
* Conteudo - Conteúdo do resumo (mínimo de 5 caracteres)
* CursoID - Identificador do curso associado
* ProfessorID - Identificador do professor associado
*/
export const createSumarioSchema = z.object({
  Data: z.string(), // Considera ISO date ou validar com refine
  Conteudo: z.string().min(5),
  CursoID: z.number(),
  ProfessorID: z.number(),
}).partial();

// Script para criar um esquema para atualizar um sumário existente
export const updateSumarioSchema = createSumarioSchema.extend({
  id: z.number(),
}).partial();

// Esquema para listar sumários com paginação
// export const listSumarioSchema = z.object({
//   page: z.number().min(1).default(1),
//   limit: z.number().min(1).max(100).default(10),
// });

// Esquema para obter um sumário específico por ID
export const getSumarioSchema = z.object({
  id: z.number(),
});

export const deleteSumarioSchema = z.object({
  id: z.number(),
});