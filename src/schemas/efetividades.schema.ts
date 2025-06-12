import { z } from 'zod';

export const efetividadeSchema = z.object({
  Data: z.string()
    .datetime('Data inválida'),
  HorasTrabalhadas: z.number()
    .int('Horas trabalhadas deve ser um número inteiro')
    .min(0, 'Horas trabalhadas não pode ser negativo')
    .max(24, 'Horas trabalhadas não pode exceder 24'),
  ProfessorID: z.number()
    .positive('ID do professor deve ser positivo')
});

export const updateEfetividadeSchema = efetividadeSchema.partial();

export const idParamSchema = z.object({
  id: z.string().transform((val) => Number(val))
});

// Schema para filtrar por período
export const periodoSchema = z.object({
  dataInicio: z.string().datetime('Data inicial inválida'),
  dataFim: z.string().datetime('Data final inválida')
});

export type CreateEfetividadeInput = z.infer<typeof efetividadeSchema>;
export type UpdateEfetividadeInput = z.infer<typeof updateEfetividadeSchema>;
export type IdParam = z.infer<typeof idParamSchema>;
export type PeriodoInput = z.infer<typeof periodoSchema>;