import { z } from "zod";
import { Departamento, Estado } from "@prisma/client";

/**
 * Esquema de validação para criar uma nova presença
 */

export const reportSchema = z.object({
  startDate: z
    .string({
      required_error: "Data é obrigatória",
      invalid_type_error: "Data deve ser uma string",
    })
    .datetime("Data inválida")
    .describe("Data e hora da presença (ISO 8601)"),
  endDate: z
    .string({
      required_error: "Data é obrigatória",
      invalid_type_error: "Data deve ser uma string",
    })
    .datetime("Data inválida")
    .describe("Data e hora da presença (ISO 8601)"),
  departamento: z
    .nativeEnum(Departamento, {
      invalid_type_error: "Estado inválido",
    })
    .optional()
    .describe("Novo estado da presença: PRESENTE ou FALTA")
});

export const presencaSchema = z.object({
  Data: z
    .string({
      required_error: "Data é obrigatória",
      invalid_type_error: "Data deve ser uma string",
    })
    .datetime("Data inválida")
    .describe("Data e hora da presença (ISO 8601)"),
  ProfessorID: z
    .number({
      required_error: "ID do professor é obrigatório",
      invalid_type_error: "ID do professor deve ser um número",
    })
    .positive("ID do professor deve ser positivo")
    .describe("ID numérico do professor"),
  CursoID: z
    .number({
      required_error: "ID do curso é obrigatório",
      invalid_type_error: "ID do curso deve ser um número",
    })
    .positive("ID do curso deve ser positivo")
    .describe("ID numérico do curso"),
  Estado: z
    .nativeEnum(Estado, {
      required_error: "Estado é obrigatório",
      invalid_type_error: "Estado inválido",
    })
    .describe("Estado da presença: PRESENTE ou FALTA"),
});

// Esquema para registro de presenças em lote
export const batchPresencaSchema = z.object({
  presencas: z
    .array(presencaSchema)
    .nonempty("Deve fornecer ao menos um registro de presença")
    .describe("Array de objetos de presença para registro em lote"),
});

// Esquema para atualização de presença (todas as propriedades opcionais)
export const updatePresencaSchema = z.object({
  Data: z
    .string()
    .datetime("Data inválida")
    .optional()
    .describe("Nova data e hora da presença (ISO 8601)"),
  ProfessorID: z
    .number()
    .positive("ID do professor deve ser positivo")
    .optional()
    .describe("Novo ID numérico do professor"),
  CursoID: z
    .number()
    .positive("ID do curso deve ser positivo")
    .optional()
    .describe("Novo ID numérico do curso"),
  Estado: z
    .nativeEnum(Estado, {
      invalid_type_error: "Estado inválido",
    })
    .optional()
    .describe("Novo estado da presença: PRESENTE ou FALTA"),
});

// Esquema para validação do parâmetro ID
export const idParamSchema = z.object({
  id: z
    .string()
    .regex(/^\d+$/, "ID inválido")
    .transform((val) => Number(val))
    .describe("ID numérico da presença"),
});

// Esquema de ID para Swagger (sem transformação)
export const idParamSchemaSwagger = z.object({
  id: z.string().describe("ID numérico da presença"),
});

// Esquemas de resposta
export const professorDetailsSchema = z.object({
  Nome: z.string().describe("Nome do professor"),
  Departamento: z.string().describe("Departamento do professor"),
});

export const presencaResponseSchema = z.object({
  PresencaID: z.number().describe("ID único da presença"),
  Data: z.string().datetime().describe("Data e hora da presença"),
  Estado: z.nativeEnum(Estado).describe("Estado da presença"),
  ProfessorID: z.number().describe("ID do professor"),
  Professor: professorDetailsSchema
    .optional()
    .describe("Detalhes do professor associado"),
});

export const createPresencaResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
  data: z.any().describe("Dados da presença registrada"),
});

export const batchPresencaResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
  data: z
    .object({
      registrosCriados: z
        .number()
        .describe("Número de registros de presença criados"),
    })
    .describe("Resultados do registro em lote"),
});

export const presencaListResponseSchema = z.object({
  data: z.array(z.any()).describe("Lista de presenças"),
  meta: z
    .object({
      total: z.number().describe("Número total de presenças"),
      porEstado: z
        .record(z.nativeEnum(Estado), z.number())
        .describe("Contagem de presenças por estado"),
      periodo: z
        .object({
          inicio: z.string().describe("Data de início do período"),
          fim: z.string().describe("Data de fim do período"),
        })
        .optional()
        .describe("Período de filtro utilizado"),
    })
    .describe("Metadados da lista de presenças"),
});

export const singlePresencaResponseSchema = z.object({
  data: z.any().describe("Detalhes da presença"),
});

export const updatePresencaResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
  data: z.any().describe("Dados da presença atualizada"),
});

export const deletePresencaResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
});

// Esquemas de resposta genéricos (já definidos em shared-schema ou auth.schema)
export const errorResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de erro"),
});
export const successResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
});

// Tipos inferidos
export type CreatePresencaInput = z.infer<typeof presencaSchema>;
export type CreateBatchPresencaInput = z.infer<typeof batchPresencaSchema>;
export type UpdatePresencaInput = z.infer<typeof updatePresencaSchema>;
export type IdParam = z.infer<typeof idParamSchema>;
