import { z } from 'zod';

export const permissaoSchema = z.object({
  Descricao: z.string()
    .min(3, 'Descrição deve ter no mínimo 3 caracteres')
    .max(100, 'Descrição muito longa')
});

export const usuarioPermissaoSchema = z.object({
  UsuarioID: z.number().positive('ID do usuário deve ser positivo'),
  PermissaoID: z.number().positive('ID da permissão deve ser positivo')
});

export const idParamSchema = z.object({
  id: z.string().transform((val) => Number(val))
});

// Response schemas for swagger
export const permissaoResponseSchema = {
  type: 'object',
  properties: {
    PermissaoID: { type: 'number' },
    Descricao: { type: 'string' },
    Usuarios: { 
      type: 'array',
      items: {
        type: 'object',
        properties: {
          UsuarioID: { type: 'number' },
          PermissaoID: { type: 'number' }
        }
      }
    }
  }
};

export type CreatePermissaoInput = z.infer<typeof permissaoSchema>;
export type UsuarioPermissaoInput = z.infer<typeof usuarioPermissaoSchema>;
export type IdParam = z.infer<typeof idParamSchema>;
