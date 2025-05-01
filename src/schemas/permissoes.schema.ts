import { z } from 'zod';

export const createPermissaoSchema = z.object({
  Descricao: z.string().min(2),
});
export const updatePermissaoSchema = createPermissaoSchema.partial();
