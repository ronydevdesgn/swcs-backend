import { z } from 'zod';

export const createUsuarioSchema = z.object({
  Nome: z.string(),
  Email: z.string().email(),
  Senha: z.string().min(6),
  Tipo: z.enum(['Professor', 'Sumarista']),
  ProfessorID: z.number().optional().nullable(),
});

export const updateUsuarioSchema = createUsuarioSchema.partial();
/**
* Esquema para recuperar um usuário com campos opcionais
* Valida parâmetros de recuperação de usuário, incluindo detalhes de identificação opcionais
* Suporta consulta de ID baseada em UUID com filtragem opcional por atributos do usuário
*/
export const getUsuarioSchema = z.object({
  id: z.string().uuid(),
  Nome: z.string().optional(),
  Email: z.string().email().optional(),
  Senha: z.string().min(6).optional(),
}).strict().refine(data => {
  return data.id !== '';
}, {
  message: "Custom validation failed",
  path: ["custom"],
});

// deleteUsuarioSchema
export const deleteUsuarioSchema = z.object({
  id: z.string().uuid(),
}).strict();