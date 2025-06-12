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

// Esquemas de resposta para a documentação do swagger
export const loginResponseSchema = {
  200: {
    type: 'object',
    properties: {
      accessToken: { type: 'string' },
      refreshToken: { type: 'string' },
      user: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          email: { type: 'string' },
          tipo: { type: 'string' },
          nome: { type: 'string' }
        }
      }
    }
  },
  401: {
    type: 'object',
    properties: {
      mensagem: { type: 'string' }
    }
  }
};

// Types
export type LoginInput = z.infer<typeof loginSchema>;
export type PasswordResetRequestInput = z.infer<typeof passwordResetRequestSchema>;
export type PasswordResetInput = z.infer<typeof passwordResetSchema>;
export type RefreshTokenInput = z.infer<typeof refreshTokenSchema>;