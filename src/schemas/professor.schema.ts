import { z } from 'zod';

const professorBase = {
  Nome: z.string()
    .min(3, 'Nome deve ter no mínimo 3 caracteres')
    .max(100, 'Nome muito longo'),
  Departamento: z.string()
    .min(2, 'Departamento deve ter no mínimo 2 caracteres')
    .max(100, 'Departamento muito longo'),
  CargaHoraria: z.number()
    .int('Carga horária deve ser um número inteiro')
    .min(1, 'Carga horária deve ser maior que 0')
    .max(40, 'Carga horária não pode exceder 40 horas'),
  Email: z.string()
    .email('Email inválido')
    .max(100, 'Email muito longo'),
};

export const createProfessorSchema = z.object({
  ...professorBase,
  Senha: z.string()
    .min(6, 'Senha deve ter no mínimo 6 caracteres')
    .max(100, 'Senha muito longa'),
});

export const updateProfessorSchema = z.object({
  ...professorBase,
}).partial();

export const idParamSchema = z.object({
  id: z.string().transform((val) => Number(val))
});

export type CreateProfessorInput = z.infer<typeof createProfessorSchema>;
export type UpdateProfessorInput = z.infer<typeof updateProfessorSchema>;
export type IdParam = z.infer<typeof idParamSchema>;