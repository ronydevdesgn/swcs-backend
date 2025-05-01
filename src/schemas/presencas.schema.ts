import { z } from 'zod';

/** 
* Esquema de validação para criar uma nova presença 
* @param Data A data da presença 
* @param Status O status da presença (Presente, Faltou ou Justificado) 
* @param ProfessorID O identificador exclusivo do professor associado à presença 
*/
export const createPresencaSchema = z.object({
  Data: z.string(),
  Status: z.enum(['Presente', 'Faltou', 'Justificada']),
  ProfessorID: z.number(),
});

export const getPresencaSchema = z.object({
  id: z.number(),
});

export const listPresencaSchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(10),
});

/** 
* Esquema de validação para atualizar uma presença existente
* @param id O identificador único da presença a ser atualizada
* @param Data A nova data da presença (opcional)
* @param Status O novo status da presença (Presente, Faltou ou Justificado) (opcional)
* @param ProfessorID O novo identificador do professor associado à presença (opcional)
*/
export const updatePresencaSchema = z.object({
  id: z.number(),
  Data: z.string().optional(),
  Status: z.enum(['Presente', 'Faltou', 'Justificada']).optional(),
  ProfessorID: z.number().optional(),
});

/**
* Esquema para recuperar presenças de um professor específico com paginação
* @param ProfessorID O identificador único do professor
* @param page O número da página para resultados paginados (padrão: 1)
* @param limit O número máximo de resultados por página (padrão: 10, máx.: 100)
*/
export const getPresencaByProfessorSchema = z.object({
  ProfessorID: z.number(),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(10),
});