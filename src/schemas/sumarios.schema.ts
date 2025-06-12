import { z } from "zod";

// Base schema for common fields
const sumarioBase = {
  Conteudo: z.string().min(3, "Conteúdo deve ter no mínimo 3 caracteres"),
  Data: z.string().datetime("Data inválida"),
  CursoID: z.number().positive("ID do curso deve ser positivo"),
  ProfessorID: z.number().positive("ID do professor deve ser positivo"),
};

// Schema for creating a new sumário
export const createSumarioSchema = z.object({
  ...sumarioBase,
});

// Schema for updating an existing sumário
export const updateSumarioSchema = z
  .object({
    ...sumarioBase,
  })
  .partial();

// Schema for ID parameter
export const idParamSchema = z.object({
  id: z.string().transform((val) => Number(val)),
});

// Types based on the schemas
export type CreateSumarioInput = z.infer<typeof createSumarioSchema>;
export type UpdateSumarioInput = z.infer<typeof updateSumarioSchema>;
export type IdParam = z.infer<typeof idParamSchema>;
