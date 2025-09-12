import { z } from "zod";

// Schema base para efetividade com descrições detalhadas
export const efetividadeSchema = z.object({
  Data: z
    .string({
      required_error: "Data é obrigatória",
      invalid_type_error: "Data deve ser uma string",
    })
    .datetime("Data deve estar no formato ISO 8601 (YYYY-MM-DDTHH:mm:ss.sssZ)")
    .describe("Data do registro de efetividade"),
  HorasTrabalhadas: z
    .number({
      required_error: "Horas trabalhadas é obrigatório",
      invalid_type_error: "Horas trabalhadas deve ser um número",
    })
    .min(0, "Horas trabalhadas não pode ser negativo")
    .max(24, "Horas trabalhadas não pode exceder 24")
    .describe("Número de horas trabalhadas pelo professor"),
  ProfessorID: z
    .number({
      required_error: "ID do professor é obrigatório",
      invalid_type_error: "ID do professor deve ser um número",
    })
    .int("ID do professor deve ser um número inteiro")
    .positive("ID do professor deve ser positivo")
    .describe("ID do professor que registrou a efetividade"),
});

// Schema para atualizar efetividade (todos os campos opcionais)
export const updateEfetividadeSchema = z.object({
  Data: efetividadeSchema.shape.Data.optional(),
  HorasTrabalhadas: efetividadeSchema.shape.HorasTrabalhadas.optional(),
  ProfessorID: efetividadeSchema.shape.ProfessorID.optional(),
});

// Schema para parâmetro ID
export const idParamSchema = z.object({
  id: z
    .string({
      required_error: "ID é obrigatório",
      invalid_type_error: "ID deve ser uma string",
    })
    .regex(/^\d+$/, "ID deve conter apenas números")
    .transform((val) => Number(val))
    .describe("ID único da efetividade"),
});

// Schema para filtrar por período
export const periodoSchema = z.object({
  dataInicio: z
    .string({
      required_error: "Data inicial é obrigatória",
      invalid_type_error: "Data inicial deve ser uma string",
    })
    .datetime("Data inicial deve estar no formato ISO 8601")
    .describe("Data de início do período para consulta"),
  dataFim: z
    .string({
      required_error: "Data final é obrigatória",
      invalid_type_error: "Data final deve ser uma string",
    })
    .datetime("Data final deve estar no formato ISO 8601")
    .describe("Data de fim do período para consulta"),
});

// Schema para consulta de efetividades de professor com período opcional
export const professorEfetividadeQuerySchema = z.object({
  inicio: z
    .string()
    .datetime("Data inicial deve estar no formato ISO 8601")
    .optional()
    .describe("Data de início do período (opcional)"),
  fim: z
    .string()
    .datetime("Data final deve estar no formato ISO 8601")
    .optional()
    .describe("Data de fim do período (opcional)"),
});

// Schemas de resposta
export const professorResponseSchema = z.object({
  ProfessorID: z.number().describe("ID único do professor"),
  Nome: z.string().describe("Nome completo do professor"),
  Departamento: z.string().describe("Departamento do professor"),
  CargaHoraria: z.number().describe("Carga horária do professor"),
  Usuario: z
    .object({
      Email: z.string().email().describe("Email do professor"),
    })
    .optional(),
});

export const efetividadeResponseSchema = z.object({
  EfetividadeID: z.number().describe("ID único da efetividade"),
  Data: z.string().describe("Data do registro"),
  HorasTrabalhadas: z.number().describe("Horas trabalhadas registradas"),
  ProfessorID: z.number().describe("ID do professor"),
  Professor: professorResponseSchema.optional(),
});

export const estatisticasProfessorSchema = z.object({
  professorID: z.number().describe("ID do professor"),
  totalHoras: z.number().describe("Total de horas trabalhadas"),
  totalDias: z.number().describe("Total de dias registrados"),
  mediaDiaria: z.number().describe("Média de horas por dia"),
  professor: z.object({
    Nome: z.string().describe("Nome do professor"),
    Departamento: z.string().describe("Departamento do professor"),
    CargaHoraria: z.number().describe("Carga horária do professor"),
  }),
});

export const createEfetividadeResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
  data: efetividadeResponseSchema,
});

export const listEfetividadesResponseSchema = z.object({
  data: z.array(efetividadeResponseSchema).describe("Lista de efetividades"),
});

export const singleEfetividadeResponseSchema = z.object({
  data: efetividadeResponseSchema,
});

export const updateEfetividadeResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
  data: efetividadeResponseSchema,
});

export const deleteEfetividadeResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
});

export const efetividadesPorPeriodoResponseSchema = z.object({
  data: z
    .array(efetividadeResponseSchema)
    .describe("Lista de efetividades do período"),
  meta: z.object({
    periodo: z.object({
      inicio: z.string().describe("Data de início"),
      fim: z.string().describe("Data de fim"),
    }),
    total: z.number().describe("Total de registros encontrados"),
    estatisticas: z
      .array(estatisticasProfessorSchema)
      .describe("Estatísticas por professor"),
  }),
});

export const efetividadesProfessorResponseSchema = z.object({
  data: z
    .array(efetividadeResponseSchema)
    .describe("Lista de efetividades do professor"),
  meta: z.object({
    professor: z.object({
      nome: z.string().describe("Nome do professor"),
      departamento: z.string().describe("Departamento do professor"),
      cargaHoraria: z.number().describe("Carga horária do professor"),
    }),
    estatisticas: z.object({
      totalHoras: z.number().describe("Total de horas trabalhadas"),
      mediaDiaria: z.number().describe("Média de horas por dia"),
      totalDias: z.number().describe("Total de dias registrados"),
    }),
  }),
});

export const errorResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de erro"),
  detalhes: z
    .string()
    .optional()
    .describe("Detalhes adicionais do erro (apenas em desenvolvimento)"),
});

// Types exportados
export type CreateEfetividadeInput = z.infer<typeof efetividadeSchema>;
export type UpdateEfetividadeInput = z.infer<typeof updateEfetividadeSchema>;
export type IdParam = z.infer<typeof idParamSchema>;
export type PeriodoInput = z.infer<typeof periodoSchema>;
export type ProfessorEfetividadeQuery = z.infer<
  typeof professorEfetividadeQuerySchema
>;
export type EfetividadeResponse = z.infer<typeof efetividadeResponseSchema>;
export type CreateEfetividadeResponse = z.infer<
  typeof createEfetividadeResponseSchema
>;
export type ListEfetividadesResponse = z.infer<
  typeof listEfetividadesResponseSchema
>;
export type SingleEfetividadeResponse = z.infer<
  typeof singleEfetividadeResponseSchema
>;
export type UpdateEfetividadeResponse = z.infer<
  typeof updateEfetividadeResponseSchema
>;
export type DeleteEfetividadeResponse = z.infer<
  typeof deleteEfetividadeResponseSchema
>;
export type EfetividadesPorPeriodoResponse = z.infer<
  typeof efetividadesPorPeriodoResponseSchema
>;
export type EfetividadesProfessorResponse = z.infer<
  typeof efetividadesProfessorResponseSchema
>;
export type ErrorResponse = z.infer<typeof errorResponseSchema>;
