import { z } from "zod";
import { Cargo } from "@prisma/client";

// Esquema base para propriedades de funcionário
const funcionarioBase = {
  Nome: z
    .string({
      required_error: "Nome é obrigatório",
      invalid_type_error: "Nome deve ser uma string",
    })
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(100, "Nome muito longo")
    .describe("Nome completo do funcionário"),
  Email: z
    .string({
      required_error: "Email é obrigatório",
      invalid_type_error: "Email deve ser uma string",
    })
    .email("Email inválido")
    .max(100, "Email muito longo")
    .describe("Email do funcionário (único)"),
  Cargo: z
    .nativeEnum(Cargo, {
      required_error: "Cargo é obrigatório",
      invalid_type_error: "Cargo inválido",
    })
    .describe("Cargo do funcionário (ex: ADMINISTRADOR, DOCENTE, SECRETARIA)"),
};

// Esquema para criação de funcionário
export const createFuncionarioSchema = z.object({
  ...funcionarioBase,
  Senha: z
    .string({
      required_error: "Senha é obrigatória",
      invalid_type_error: "Senha deve ser uma string",
    })
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .max(100, "Senha muito longa")
    .describe("Senha para o novo funcionário"),
});

// Esquema para atualização de funcionário (todas as propriedades opcionais)
export const updateFuncionarioSchema = z
  .object({
    ...funcionarioBase,
  })
  .partial();

// Esquema para validação do parâmetro ID
export const idParamSchema = z.object({
  id: z
    .string()
    .transform((val) => Number(val))
    .describe("ID do funcionário"),
});

// Esquema de ID para Swagger (sem transformação)
export const idParamSchemaSwagger = z.object({
  id: z.string().describe("ID do funcionário"),
});

// Esquemas de resposta
export const funcionarioResponseSchema = z.object({
  FuncionarioID: z.number().describe("ID único do funcionário"),
  Nome: z.string().describe("Nome completo do funcionário"),
  Email: z.string().email().describe("Email do funcionário"),
  Cargo: z.nativeEnum(Cargo).describe("Cargo do funcionário"),
  UsuarioID: z.number().describe("ID do usuário associado"),
  Usuario: z
    .object({
      Email: z.string().email().describe("Email do usuário associado"),
      Tipo: z
        .nativeEnum(z.enum(["FUNCIONARIO", "PROFESSOR"]))
        .describe("Tipo de usuário (FUNCIONARIO ou PROFESSOR)"),
      Permissoes: z
        .array(
          z.object({
            Permissao: z.object({
              PermissaoID: z.number().describe("ID da permissão"),
              Descricao: z.string().describe("Descrição da permissão"),
            }),
          })
        )
        .describe("Lista de permissões do usuário"),
    })
    .optional()
    .describe("Informações do usuário associado"),
});

export const funcionarioListResponseSchema = z.object({
  data: z.array(funcionarioResponseSchema).describe("Lista de funcionários"),
  meta: z
    .object({
      total: z.number().describe("Número total de funcionários"),
      porCargo: z
        .record(z.string(), z.number())
        .describe("Contagem de funcionários por cargo"),
    })
    .describe("Metadados da lista"),
});

export const singleFuncionarioResponseSchema = z.object({
  data: funcionarioResponseSchema.describe("Detalhes do funcionário"),
});

export const createFuncionarioResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
  data: funcionarioResponseSchema.describe("Detalhes do funcionário criado"),
});

export const updateFuncionarioResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
  data: funcionarioResponseSchema.describe(
    "Detalhes do funcionário atualizado"
  ),
});

// Esquemas de resposta genéricos para erros e sucesso
export const errorResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de erro"),
});

export const successResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
});

// Tipos inferidos
export type CreateFuncionarioInput = z.infer<typeof createFuncionarioSchema>;
export type UpdateFuncionarioInput = z.infer<typeof updateFuncionarioSchema>;
export type IdParam = z.infer<typeof idParamSchema>;
