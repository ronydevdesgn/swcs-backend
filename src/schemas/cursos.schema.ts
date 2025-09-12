import { z } from "zod";

const cursoBaseSchema = {
  Nome: z
    .string({
      required_error: "Nome do curso é obrigatório",
      invalid_type_error: "Nome deve ser uma string",
    })
    .min(3, "Nome do curso deve ter no mínimo 3 caracteres")
    .max(100, "Nome do curso muito longo")
    .describe("Nome do curso"),
  Descricao: z
    .string({
      invalid_type_error: "Descrição deve ser uma string",
    })
    .min(10, "Descrição deve ter no mínimo 10 caracteres")
    .max(500, "Descrição muito longa")
    .optional()
    .describe("Descrição opcional do curso"),
  ProfessorID: z
    .number({
      required_error: "ID do professor é obrigatório",
      invalid_type_error: "ID do professor deve ser um número",
    })
    .int("ID do professor deve ser um número inteiro")
    .positive("ID do professor deve ser positivo")
    .describe("ID do professor responsável pelo curso"),
};

// Schema para criar curso
export const createCursoSchema = z.object(cursoBaseSchema);

// Schema para atualizar curso (todos os campos opcionais)
export const updateCursoSchema = z.object({
  Nome: cursoBaseSchema.Nome.optional(),
  Descricao: cursoBaseSchema.Descricao,
  ProfessorID: cursoBaseSchema.ProfessorID.optional(),
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
    .describe("ID único do curso"),
});

// Schema para query parameters de listagem
export const listarCursosQuerySchema = z.object({
  search: z
    .string()
    .optional()
    .describe("Termo de busca para filtrar cursos por nome ou descrição"),
  departamento: z
    .string()
    .optional()
    .describe("Departamento para filtrar cursos"),
});

// Schema para query de departamento
export const departamentoQuerySchema = z.object({
  departamento: z
    .string({
      required_error: "Departamento é obrigatório",
      invalid_type_error: "Departamento deve ser uma string",
    })
    .min(1, "Departamento não pode estar vazio")
    .describe("Departamento para filtrar cursos"),
});

// Schemas de resposta
export const professorResponseSchema = z.object({
  ProfessorID: z.number().describe("ID único do professor"),
  Nome: z.string().describe("Nome completo do professor"),
  Email: z.string().email().describe("Email do professor"),
  Departamento: z.string().describe("Departamento do professor"),
});

export const sumarioResponseSchema = z.object({
  SumarioID: z.number().describe("ID único do sumário"),
  Data: z.string().describe("Data do sumário"),
  Conteudo: z.string().describe("Conteúdo do sumário"),
});

export const cursoResponseSchema = z.object({
  CursoID: z.number().describe("ID único do curso"),
  Nome: z.string().describe("Nome do curso"),
  Descricao: z.string().nullable().describe("Descrição do curso"),
  Professores: z
    .array(professorResponseSchema)
    .describe("Lista de professores do curso"),
  Sumarios: z
    .array(sumarioResponseSchema)
    .optional()
    .describe("Lista de sumários do curso"),
  _count: z
    .object({
      Sumarios: z.number().describe("Total de sumários do curso"),
    })
    .optional(),
});

export const createCursoResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
  data: cursoResponseSchema,
});

export const listCursosResponseSchema = z.object({
  data: z.array(cursoResponseSchema).describe("Lista de cursos"),
  meta: z
    .object({
      total: z.number().describe("Total de cursos encontrados"),
    })
    .describe("Metadados da consulta"),
});

export const singleCursoResponseSchema = z.object({
  data: cursoResponseSchema,
});

export const updateCursoResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
  data: cursoResponseSchema,
});

export const deleteCursoResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
});

export const errorResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de erro"),
  detalhes: z
    .string()
    .optional()
    .describe("Detalhes adicionais do erro (apenas em desenvolvimento)"),
});

// Types exportados
export type CreateCursoInput = z.infer<typeof createCursoSchema>;
export type UpdateCursoInput = z.infer<typeof updateCursoSchema>;
export type IdParam = z.infer<typeof idParamSchema>;
export type ListarCursosQuery = z.infer<typeof listarCursosQuerySchema>;
export type DepartamentoQuery = z.infer<typeof departamentoQuerySchema>;
export type CursoResponse = z.infer<typeof cursoResponseSchema>;
export type CreateCursoResponse = z.infer<typeof createCursoResponseSchema>;
export type ListCursosResponse = z.infer<typeof listCursosResponseSchema>;
export type SingleCursoResponse = z.infer<typeof singleCursoResponseSchema>;
export type UpdateCursoResponse = z.infer<typeof updateCursoResponseSchema>;
export type DeleteCursoResponse = z.infer<typeof deleteCursoResponseSchema>;
export type ErrorResponse = z.infer<typeof errorResponseSchema>;
