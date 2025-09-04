import { z } from 'zod';
import { TipoUsuario } from '@prisma/client';

// Esquema de login básico
export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email é obrigatório",
      invalid_type_error: "Email deve ser uma string"
    })
    .email('Email inválido')
    .min(1, 'Email é obrigatório')
    .describe('Email do usuário'),
  senha: z
    .string({
      required_error: "Senha é obrigatória",
      invalid_type_error: "Senha deve ser uma string"
    })
    .min(6, 'Senha deve ter no mínimo 6 caracteres')
    .max(100, 'Senha muito longa')
    .describe('Senha do usuário'),
  tipo: z
    .nativeEnum(TipoUsuario, {
      required_error: "Tipo de usuário é obrigatório",
      invalid_type_error: "Tipo de usuário inválido"
    })
    .describe('Tipo do usuário (PROFESSOR ou FUNCIONARIO)')
});

// Esquema de pedido de redefinição de palavra-passe
export const passwordResetRequestSchema = z.object({
  email: z
    .string({
      required_error: "Email é obrigatório",
      invalid_type_error: "Email deve ser uma string"
    })
    .email('Email inválido')
    .describe('Email para recuperação de senha')
});

// Esquema de redefinição de palavra-passe
export const passwordResetSchema = z.object({
  token: z
    .string({
      required_error: "Token é obrigatório",
      invalid_type_error: "Token deve ser uma string"
    })
    .describe('Token de recuperação de senha'),
  novaSenha: z
    .string({
      required_error: "Nova senha é obrigatória",
      invalid_type_error: "Nova senha deve ser uma string"
    })
    .min(6, 'Nova senha deve ter no mínimo 6 caracteres')
    .max(100, 'Nova senha muito longa')
    .describe('Nova senha do usuário'),
  confirmarSenha: z
    .string({
      required_error: "Confirmação de senha é obrigatória",
      invalid_type_error: "Confirmação deve ser uma string"
    })
    .min(6, 'Confirmação de senha deve ter no mínimo 6 caracteres')
    .describe('Confirmação da nova senha')
}).refine((data) => data.novaSenha === data.confirmarSenha, {
  message: 'Senhas não conferem',
  path: ['confirmarSenha']
});

// Schema do refresh token
export const refreshTokenSchema = z.object({
  refreshToken: z
    .string({
      required_error: "Refresh token é obrigatório",
      invalid_type_error: "Refresh token deve ser uma string"
    })
    .min(1, 'Refresh token não pode estar vazio')
    .describe('Token de atualização')
});

// Esquemas de resposta usando Zod
export const usuarioResponseSchema = z.object({
  id: z.number().describe('ID único do usuário'),
  nome: z.string().describe('Nome completo do usuário'),
  email: z.string().email().describe('Email do usuário'),
  tipo: z.nativeEnum(TipoUsuario).describe('Tipo do usuário'),
  permissoes: z.array(z.string()).describe('Lista de permissões do usuário')
});

export const loginResponseSchema = z.object({
  usuario: usuarioResponseSchema,
  accessToken: z.string().describe('Token de acesso JWT'),
  refreshToken: z.string().describe('Token para renovação de acesso')
});

export const errorResponseSchema = z.object({
  mensagem: z.string().describe('Mensagem de erro')
});

export const successResponseSchema = z.object({
  mensagem: z.string().describe('Mensagem de sucesso')
});

// Schemas para validação Swagger específicos (sem refine)
export const passwordResetSchemaSwagger = z.object({
  token: z
    .string({
      required_error: "Token é obrigatório",
      invalid_type_error: "Token deve ser uma string"
    })
    .describe('Token de recuperação de senha'),
  novaSenha: z
    .string({
      required_error: "Nova senha é obrigatória",
      invalid_type_error: "Nova senha deve ser uma string"
    })
    .min(6, 'Nova senha deve ter no mínimo 6 caracteres')
    .max(100, 'Nova senha muito longa')
    .describe('Nova senha do usuário'),
  confirmarSenha: z
    .string({
      required_error: "Confirmação de senha é obrigatória",
      invalid_type_error: "Confirmação deve ser uma string"
    })
    .min(6, 'Confirmação de senha deve ter no mínimo 6 caracteres')
    .describe('Confirmação da nova senha (deve ser igual à nova senha)')
});

// Types exportados
export type LoginInput = z.infer<typeof loginSchema>;
export type PasswordResetRequestInput = z.infer<typeof passwordResetRequestSchema>;
export type PasswordResetInput = z.infer<typeof passwordResetSchema>;
export type RefreshTokenInput = z.infer<typeof refreshTokenSchema>;
export type LoginResponse = z.infer<typeof loginResponseSchema>;
export type ErrorResponse = z.infer<typeof errorResponseSchema>;
export type SuccessResponse = z.infer<typeof successResponseSchema>;
export type UsuarioResponse = z.infer<typeof usuarioResponseSchema>;