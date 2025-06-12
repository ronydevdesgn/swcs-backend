import { z } from 'zod';

const funcionarioBase = {
  Nome: z.string()
    .min(3, 'Nome deve ter no mínimo 3 caracteres')
    .max(100, 'Nome muito longo'),
  Email: z.string()
    .email('Email inválido')
    .max(100, 'Email muito longo'),
  Cargo: z.string()
    .min(2, 'Cargo deve ter no mínimo 2 caracteres')
    .max(50, 'Cargo muito longo')
};

export const createFuncionarioSchema = z.object({
  ...funcionarioBase,
  Senha: z.string()
    .min(6, 'Senha deve ter no mínimo 6 caracteres')
    .max(100, 'Senha muito longa')
});

export const updateFuncionarioSchema = z.object({
  ...funcionarioBase
}).partial();

export const idParamSchema = z.object({
  id: z.string().transform((val) => Number(val))
});

export type CreateFuncionarioInput = z.infer<typeof createFuncionarioSchema>;
export type UpdateFuncionarioInput = z.infer<typeof updateFuncionarioSchema>;
export type IdParam = z.infer<typeof idParamSchema>;