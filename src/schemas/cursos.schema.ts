import { z } from 'zod';

export const createCursoSchema = z.object({
  Nome: z.string().min(1),
  Descricao: z.string().min(1),
});
export const updateCursoSchema = createCursoSchema.partial();
export const getCursoSchema = z.object({
  id: z.string().min(1),
  Nome: z.string().min(1).optional(),
  Descricao: z.string().min(1).optional(),
  
});
export const deleteCursoSchema = z.object({
  id: z.string().min(1),
});