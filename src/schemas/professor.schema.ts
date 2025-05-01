import { z } from 'zod';

export const createProfessorSchema = z.object({
  Nome: z.string(),
  Departamento: z.string(),
  CargaHoraria: z.number().min(1),
});

export const updateProfessorSchema = createProfessorSchema.partial();

export const getProfessorSchema = z.object({
  id: z.string().uuid(),
});

export const listProfessorSchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(10),
});

export const deleteProfessorSchema = z.object({
  id: z.string().uuid(),
});