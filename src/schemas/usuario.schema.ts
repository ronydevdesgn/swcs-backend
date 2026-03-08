import { Cargo, Departamento, TipoUsuario } from "@prisma/client";
import { z } from "zod";

// Esquema base para propriedades do usuário
const usuarioBase = {
  nome: z
    .string({
      required_error: "Nome é obrigatório",
      invalid_type_error: "Nome deve ser uma string",
    })
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(100, "Nome muito longo")
    .describe("Nome completo do usuário"),
  email: z
    .string({
      required_error: "Email é obrigatório",
      invalid_type_error: "Email deve ser uma string",
    })
    .email("Email inválido")
    .max(100, "Email muito longo")
    .describe("Email do usuário (único)"),
};

// Esquema para criação de um novo usuário
export const usuarioSchema = z.object({
  ...usuarioBase,
  senha: z
    .string({
      required_error: "Senha é obrigatória",
      invalid_type_error: "Senha deve ser uma string",
    })
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .max(100, "Senha muito longa")
    .describe("Senha do usuário"),
  tipo: z
    .nativeEnum(TipoUsuario, {
      required_error: "Tipo de usuário é obrigatório",
      invalid_type_error: "Tipo de usuário inválido",
    })
    .describe("Tipo do usuário (PROFESSOR ou FUNCIONARIO)"),
});

// Esquema para atualização de usuário (todas as propriedades opcionais, exceto Tipo)
export const updateUsuarioSchema = z.object({
  nome: usuarioBase.nome.optional(),
  email: usuarioBase.email.optional(),
});

// Esquema para atualização de senha
export const updateSenhaSchema = z
  .object({
    senhaAtual: z
      .string({
        required_error: "Senha atual é obrigatória",
        invalid_type_error: "Senha atual deve ser uma string",
      })
      .describe("Senha atual do usuário"),
    novaSenha: z
      .string({
        required_error: "Nova senha é obrigatória",
        invalid_type_error: "Nova senha deve ser uma string",
      })
      .min(6, "Nova senha deve ter no mínimo 6 caracteres")
      .max(100, "Nova senha muito longa")
      .describe("Nova senha para o usuário"),
    confirmarSenha: z
      .string({
        required_error: "Confirmação de senha é obrigatória",
        invalid_type_error: "Confirmação deve ser uma string",
      })
      .describe("Confirmação da nova senha (deve ser igual à nova senha)"),
  })
  .refine((data) => data.novaSenha === data.confirmarSenha, {
    message: "Senhas não conferem",
    path: ["confirmarSenha"],
  });

// Esquema para atualização de senha (versão para Swagger, sem refine)
export const updateSenhaSchemaSwagger = z.object({
  senhaAtual: z.string().describe("Senha atual do usuário"),
  novaSenha: z
    .string()
    .min(6, "Nova senha deve ter no mínimo 6 caracteres")
    .max(100, "Nova senha muito longa")
    .describe("Nova senha para o usuário"),
  confirmarSenha: z
    .string()
    .describe("Confirmação da nova senha (deve ser igual à nova senha)"),
});

// Esquema para validação do parâmetro ID
export const idParamSchema = z.object({
  id: z
    .string()
    .transform((val) => Number(val))
    .describe("ID numérico do usuário"),
});

// Esquema de ID para Swagger (sem transformação)
export const idParamSchemaSwagger = z.object({
  id: z.string().describe("ID numérico do usuário"),
});

// Esquemas de resposta
export const permissaoDetailsSchema = z.object({
  permissaoId: z.number().describe("ID da permissão"),
  descricao: z.string().describe("Descrição da permissão"),
});

export const usuarioPermissaoSchemaResponse = z.object({
  permissao: permissaoDetailsSchema.describe("Detalhes da permissão"),
});

export const professorDetailsResponseSchema = z.object({
  departamento: z
    .nativeEnum(Departamento)
    .describe("Departamento do professor"),
});

export const funcionarioDetailsResponseSchema = z.object({
  cargo: z.nativeEnum(Cargo).describe("Cargo do funcionário"),
});

export const usuarioResponseSchema = z.object({
  usuarioId: z.number().describe("ID único do usuário"),
  nome: z.string().describe("Nome completo do usuário"),
  email: z.string().email().describe("Email do usuário"),
  tipo: z.nativeEnum(TipoUsuario).describe("Tipo do usuário"),
  permissoes: z
    .array(usuarioPermissaoSchemaResponse)
    .describe("Lista de permissões do usuário"),
  professor: professorDetailsResponseSchema
    .optional()
    .describe("Detalhes do professor (se aplicável)"),
  funcionario: funcionarioDetailsResponseSchema
    .optional()
    .describe("Detalhes do funcionário (se aplicável)"),
});

export const createUsuarioResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
  data: z.any().describe("Dados do usuário criado"),
});

export const usuarioListResponseSchema = z.object({
  data: z.array(z.any()).describe("Lista de usuários"),
});

export const singleUsuarioResponseSchema = z.object({
  data: z.any().describe("Detalhes do usuário"),
});

export const updateUsuarioResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
  data: z.any().describe("Dados do usuário atualizado"),
});

export const updateSenhaResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
});

export const deleteUsuarioResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
});

// Esquemas de resposta genéricos para erros e sucesso
export const errorResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de erro"),
});
export const successResponseSchema = z.object({
  mensagem: z.string().describe("Mensagem de sucesso"),
});

// Types inferidos
export type CreateUsuarioInput = z.infer<typeof usuarioSchema>;
export type UpdateUsuarioInput = z.infer<typeof updateUsuarioSchema>;
export type UpdateSenhaInput = z.infer<typeof updateSenhaSchema>;
export type IdParam = z.infer<typeof idParamSchema>;
