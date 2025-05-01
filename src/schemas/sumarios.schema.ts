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
export const updateSumarioSchema = createSumarioSchema.partial();
export const getSumarioSchema = z.object({
  id: z.number(),
});
export const deleteSumarioSchema = getSumarioSchema.partial();