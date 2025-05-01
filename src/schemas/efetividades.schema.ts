import { z } from 'zod';

export const createEfetividadeSchema = z.object({
  Data: z.string(),
  HorasTrabalhadas: z.number().positive(),
  ProfessorID: z.number(),
});

export const updateEfetividadeSchema = createEfetividadeSchema.partial();

// Esquema para obter uma efetividade por ID
export const getEfetividadeSchema = z.object({
  id: z.number(),
  Data: z.string(),
  HorasTrabalhadas: z.number().positive(),
  ProfessorID: z.number(),
});

// Listar efetividades com paginação
// page: número da página (mínimo 1, padrão 1)
export const listEfetividadeSchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(10),
});

// Listar efetividades por professor
export const getEfetividadeByProfessorSchema = z.object({
  id: z.number(),
});

/**
* Esquema para deletar uma efetividade
* @param id O identificador único da efetividade a ser deletada
* @param Data A nova data da efetividade (opcional)
* @param HorasTrabalhadas O novo número de horas trabalhadas (opcional)
* @param ProfessorID O novo identificador do professor associado à efetividade (opcional)
*/
export const deleteEfetividadeSchema = z.object({
  id: z.number(),
  Data: z.string().optional(),
  HorasTrabalhadas: z.number().positive().optional(),
  ProfessorID: z.number().optional(),
});