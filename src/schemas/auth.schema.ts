import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { TipoUsuario } from '@prisma/client';

// Esquema de login básico
export const loginSchema = z.object({
  email: z
    .string()
    .email('Email inválido')
    .min(1, 'Email é obrigatório'),
  senha: z
    .string()
    .min(6, 'Senha deve ter no mínimo 6 caracteres')
    .max(100, 'Senha muito longa'),
  tipo: z.nativeEnum(TipoUsuario)
});

// Esquema de pedido de redefinição de palavra-passe
export const passwordResetRequestSchema = z.object({
  email: z.string().email('Email inválido')
});

// Esquema de redefinição de palavra-passe
export const passwordResetSchema = z.object({
  token: z.string(),
  novaSenha: z
    .string()
    .min(6, 'Nova senha deve ter no mínimo 6 caracteres')
    .max(100, 'Nova senha muito longa'),
  confirmarSenha: z
    .string()
    .min(6, 'Confirmação de senha deve ter no mínimo 6 caracteres')
}).refine((data) => data.novaSenha === data.confirmarSenha, {
  message: 'Senhas não conferem',
  path: ['confirmarSenha']
});

//Atualiza o esquema do token
export const refreshTokenSchema = z.object({
  refreshToken: z.string()
});

// Esquemas de resposta usando Zod
export const loginResponseSchema = z.object({
  usuario: z.object({
    id: z.number(),
    nome: z.string(),
    email: z.string(),
    tipo: z.nativeEnum(TipoUsuario),
    permissoes: z.array(z.string())
  }),
  accessToken: z.string(),
  refreshToken: z.string()
});

export const errorResponseSchema = z.object({
  mensagem: z.string()
});

// Types
export type LoginInput = z.infer<typeof loginSchema>;
export type PasswordResetRequestInput = z.infer<typeof passwordResetRequestSchema>;
export type PasswordResetInput = z.infer<typeof passwordResetSchema>;
export type RefreshTokenInput = z.infer<typeof refreshTokenSchema>;
export type LoginResponse = z.infer<typeof loginResponseSchema>;
export type ErrorResponse = z.infer<typeof errorResponseSchema>;