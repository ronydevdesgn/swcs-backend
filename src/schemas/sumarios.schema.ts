import { z } from "zod";
import { Curso, Professor } from "@prisma/client";

// Esquema base para campos comuns de sumário
const sumarioBase = {
  Conteudo: z
    .string({
      required_error: "Conteúdo é obrigatório",
      invalid_type_error: "Conteúdo deve ser uma string",
    })
    .min(3, "Conteúdo deve ter no mínimo 3 caracteres")
    .max(2000, "Conteúdo muito longo")
    .describe("Conteúdo do sumário da aula"),
  Data: z
    .string({
      required_error: "Data é obrigatória",
      invalid_type_error: "Data deve ser uma string",
    })
    .datetime("Data inválida")
    .describe("Data do sumário (ISO 8601)"),
  CursoID: z
    .number({
      required_error: "ID do curso é obrigatório",
      invalid_type_error: "ID do curso deve ser um número",
    })
    .positive("ID do curso deve ser positivo")
    .describe("ID do curso associado ao sumário"),
  ProfessorID: z
    .number({
      required_error: "ID do professor é obrigatório",
      invalid_type_error: "ID do professor deve ser um número",
    })
    .positive("ID do professor deve ser positivo")
    .describe("ID do professor responsável pelo sumário"),
};

// Esquema para criar um novo sumário
export const createSumarioSchema = z.object({
  ...sumarioBase,
});

// Esquema para atualizar um sumário existente
export const updateSumarioSchema = z
  .object({
    ...sumarioBase,
  })
  .partial();

// Esquema para o parâmetro ID
export const idParamSchema = z.object({
  id: z
    .string()
    .transform((val) => Number(val))
    .describe("ID numérico do sumário"),
});

// Esquema de ID para Swagger (sem transformação)
export const idParamSchemaSwagger = z.object({
  id: z.string().describe("ID numérico do sumário"),
});

// Esquemas de Resposta
export const cursoDetailsSchema = z.object({
  CursoID: z.number().describe("ID do curso"),
  Nome: z.string().describe("Nome do curso"),
  Descricao: z.string().optional().describe("Descrição do curso"),
});

export const professorDetailsSchema = z.object({
  ProfessorID: z.number().describe("ID do professor"),
  Nome: z.string().describe("Nome do professor"),
  Departamento: z.string().optional().describe("Departamento do professor"),
  Usuario: z
    .object({
      Email: z.string().email().describe("Email do usuário associado"),
    })
    .optional()
    .describe("Informações de usuário do professor"),
});

export const sumarioResponseSchema = z.object({
  SumarioID: z.number().describe("ID único do sumário"),
  Conteudo: z.string().describe("Conteúdo do sumário"),
  Data: z.string().datetime().describe("Data do sumário"),
  CursoID: z.number().describe("ID do curso"),
  ProfessorID: z.number().describe("ID do professor"),
  Curso: cursoDetailsSchema.optional().describe("Detalhes do curso associado"),
  Professor: professorDetailsSchema
    .optional()
    .describe("Detalhes do professor associado"),
});

export const createSumarioResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
  data: z.any().describe("Dados do sumário criado"),
});

export const sumarioListResponseSchema = z.object({
  data: z.array(z.any()).describe("Lista de sumários"),
  meta: z
    .object({
      total: z.number().describe("Número total de sumários"),
      page: z.number().describe("Página atual"),
      limit: z.number().describe("Limite de itens por página"),
      totalPages: z.number().describe("Total de páginas disponíveis"),
      hasNext: z.boolean().describe("Indica se há próxima página"),
      hasPrev: z.boolean().describe("Indica se há página anterior"),
    })
    .describe("Metadados da lista de sumários"),
});

export const singleSumarioResponseSchema = z.object({
  data: z.any().describe("Detalhes do sumário"),
});

export const updateSumarioResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
  data: z.any().describe("Dados do sumário atualizado"),
});

// Esquemas de resposta genéricos para erros e sucesso
export const errorResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de erro"),
});
export const successResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
});

// Types inferidos
export type CreateSumarioInput = z.infer<typeof createSumarioSchema>;
export type UpdateSumarioInput = z.infer<typeof updateSumarioSchema>;
export type IdParam = z.infer<typeof idParamSchema>;
