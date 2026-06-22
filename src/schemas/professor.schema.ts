import { Departamento } from "@prisma/client";
import { z } from "zod";

// Esquema base para propriedades de professor
const professorBase = {
  nome: z
    .string({
      required_error: "Nome é obrigatório",
      invalid_type_error: "Nome deve ser uma string",
    })
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(100, "Nome muito longo")
    .describe("Nome completo do professor"),
  departamento: z
    .nativeEnum(Departamento, {
      required_error: "Departamento é obrigatório",
      invalid_type_error: "Departamento inválido",
    })
    .describe(
      "Departamento do professor (ex: CIENCIAS_DA_COMPUTACAO, MATEMATICA)"
    ),
  cargaHoraria: z
    .number({
      required_error: "Carga horária é obrigatória",
      invalid_type_error: "Carga horária deve ser um número",
    })
    .int("Carga horária deve ser um número inteiro")
    .min(1, "Carga horária deve ser maior que 0")
    .max(40, "Carga horária não pode exceder 40 horas")
    .describe("Carga horária semanal do professor"),
  email: z
    .string({
      required_error: "Email é obrigatório",
      invalid_type_error: "Email deve ser uma string",
    })
    .email("Email inválido")
    .max(100, "Email muito longo")
    .describe("Email do professor (único)"),
};

// Esquema para criação de professor
export const createProfessorSchema = z.object({
  ...professorBase,
  senha: z
    .string({
      required_error: "Senha é obrigatória",
      invalid_type_error: "Senha deve ser uma string",
    })
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .max(100, "Senha muito longa")
    .describe("Senha para o novo professor"),
});

// Esquema para atualização de professor (todas as propriedades opcionais)
export const updateProfessorSchema = z
  .object({
    ...professorBase,
  })
  .partial();

// Esquema para validação do parâmetro ID
export const idParamSchema = z.object({
  id: z
    .string()
    .transform((val) => Number(val))
    .describe("ID numérico do professor"),
});

// Esquema de ID para Swagger (sem transformação)
export const idParamSchemaSwagger = z.object({
  id: z.string().describe("ID numérico do professor"),
});

// Esquemas de resposta
export const cursoDetailsSchema = z.object({
  cursoId: z.number().describe("ID do curso"),
  nome: z.string().describe("Nome do curso"),
});

export const sumarioDetailsSchema = z.object({
  sumarioId: z.number().describe("ID do sumário"),
  data: z.string().datetime().describe("Data do sumário"),
  conteudo: z.string().describe("Conteúdo do sumário"),
});

export const presencaDetailsSchema = z.object({
  presencaId: z.number().describe("ID da presença"),
  data: z.string().datetime().describe("Data da presença"),
  estado: z.string().describe("Estado da presença (PRESENTE/FALTA)"),
});

export const efetividadeDetailsSchema = z.object({
  efetividadeId: z.number().describe("ID da efetividade"),
  data: z.string().datetime().describe("Data da efetividade"),
  horas: z.number().describe("Horas de efetividade"),
});

export const usuarioDetailsSchema = z.object({
  email: z.string().email().describe("Email do usuário associado"),
  permissoes: z
    .array(
      z.object({
        permissao: z.object({
          descricao: z.string().describe("Descrição da permissão"),
        }),
      })
    )
    .describe("Permissões do usuário"),
});

export const professorResponseSchema = z.object({
  professorId: z.number().describe("ID único do professor"),
  nome: z.string().describe("Nome completo do professor"),
  departamento: z
    .nativeEnum(Departamento)
    .describe("Departamento do professor"),
  cargaHoraria: z.number().describe("Carga horária semanal do professor"),
  usuario: usuarioDetailsSchema
    .optional()
    .describe("Informações do usuário associado"),
  cursos: z
    .array(
      z.object({
        curso: cursoDetailsSchema,
      })
    )
    .optional()
    .describe("Cursos associados ao professor"),
  sumarios: z
    .array(sumarioDetailsSchema)
    .optional()
    .describe("Últimos sumários do professor"),
  presencas: z
    .array(presencaDetailsSchema)
    .optional()
    .describe("Últimas presenças do professor"),
  efetividades: z
    .array(efetividadeDetailsSchema)
    .optional()
    .describe("Últimas efetividades do professor"),
});

export const createProfessorResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
  data: z.any().describe("Dados do professor criado"),
});

export const professorListResponseSchema = z.object({
  data: z.array(z.any()).describe("Lista de professores"),
});

export const singleProfessorResponseSchema = z.object({
  data: z.any().describe("Detalhes do professor"),
});

export const updateProfessorResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
  data: z.any().describe("Dados do professor atualizado"),
});

// Esquemas de resposta genéricos para erros e sucesso
export const errorResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de erro"),
});
export const successResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
});

// Types inferidos
export type CreateProfessorInput = z.infer<typeof createProfessorSchema>;
export type UpdateProfessorInput = z.infer<typeof updateProfessorSchema>;
export type IdParam = z.infer<typeof idParamSchema>;
