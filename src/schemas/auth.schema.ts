import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email(),
  senha: z.string().min(6),
})

export type LoginInput = z.infer<typeof loginSchema>