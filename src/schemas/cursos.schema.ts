import { z } from 'zod';

const cursoBase = {
  Nome: z.string()
    .min(3, 'Nome do curso deve ter no mínimo 3 caracteres')
    .max(100, 'Nome do curso muito longo'),
  Descricao: z.string()
    .min(10, 'Descrição deve ter no mínimo 10 caracteres')
    .max(500, 'Descrição muito longa')
    .optional(),
  ProfessorID: z.number()
    .int('ID do professor deve ser um número inteiro')
    .positive('ID do professor deve ser positivo')
};

export const createCursoSchema = z.object({
  ...cursoBase
});

export const updateCursoSchema = z.object({
  ...cursoBase
}).partial();

export const idParamSchema = z.object({
  id: z.string().transform((val) => Number(val))
});

export type CreateCursoInput = z.infer<typeof createCursoSchema>;
export type UpdateCursoInput = z.infer<typeof updateCursoSchema>;
export type IdParam = z.infer<typeof idParamSchema>;