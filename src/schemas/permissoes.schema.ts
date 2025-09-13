import { z } from "zod";

// Esquema para criação de permissão
export const permissaoSchema = z.object({
  Descricao: z
    .string({
      required_error: "Descrição é obrigatória",
      invalid_type_error: "Descrição deve ser uma string",
    })
    .min(3, "Descrição deve ter no mínimo 3 caracteres")
    .max(100, "Descrição muito longa")
    .describe("Descrição da permissão (ex: READ_USERS, EDIT_COURSES)"),
});

// Esquema para atribuição/remoção de permissão a usuário
export const usuarioPermissaoSchema = z.object({
  UsuarioID: z
    .number({
      required_error: "ID do usuário é obrigatório",
      invalid_type_error: "ID do usuário deve ser um número",
    })
    .positive("ID do usuário deve ser positivo")
    .describe("ID único do usuário"),
  PermissaoID: z
    .number({
      required_error: "ID da permissão é obrigatório",
      invalid_type_error: "ID da permissão deve ser um número",
    })
    .positive("ID da permissão deve ser positivo")
    .describe("ID único da permissão"),
});

// Esquema para validação do parâmetro ID
export const idParamSchema = z.object({
  id: z
    .string()
    .transform((val) => Number(val))
    .describe("ID da permissão ou usuário"),
});

// Esquema de ID para Swagger (sem transformação)
export const idParamSchemaSwagger = z.object({
  id: z.string().describe("ID da permissão ou usuário"),
});

// Response schemas for swagger
export const permissaoResponseSchema = z.object({
  PermissaoID: z.number().describe("ID único da permissão"),
  Descricao: z.string().describe("Descrição da permissão"),
  Usuarios: z
    .array(
      z.object({
        UsuarioID: z.number().describe("ID do usuário"),
        PermissaoID: z.number().describe("ID da permissão"),
        Usuario: z
          .object({
            Nome: z.string().describe("Nome do usuário"),
            Email: z.string().email().describe("Email do usuário"),
            Tipo: z.string().describe("Tipo de usuário"),
          })
          .optional()
          .describe("Dados do usuário (opcional)"),
      })
    )
    .optional()
    .describe("Lista de usuários que possuem esta permissão"),
});

export const permissaoListResponseSchema = z.object({
  data: z.array(permissaoResponseSchema).describe("Lista de permissões"),
});

export const singlePermissaoResponseSchema = z.object({
  data: permissaoResponseSchema.describe("Detalhes da permissão"),
});

export const usuarioPermissaoResponseSchema = z.object({
  UsuarioID: z.number().describe("ID do usuário"),
  PermissaoID: z.number().describe("ID da permissão"),
  Permissao: z
    .object({
      PermissaoID: z.number().describe("ID da permissão"),
      Descricao: z.string().describe("Descrição da permissão"),
    })
    .describe("Detalhes da permissão"),
});

export const usuarioPermissaoListResponseSchema = z.object({
  data: z
    .array(usuarioPermissaoResponseSchema)
    .describe("Lista de permissões do usuário"),
});

export const createPermissaoResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
  data: permissaoResponseSchema.describe("Detalhes da permissão criada"),
});

export const atribuirPermissaoResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
});

// Esquemas de resposta genéricos para erros e sucesso
export const errorResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de erro"),
});

export const successResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
});

export type CreatePermissaoInput = z.infer<typeof permissaoSchema>;
export type UsuarioPermissaoInput = z.infer<typeof usuarioPermissaoSchema>;
export type IdParam = z.infer<typeof idParamSchema>;
