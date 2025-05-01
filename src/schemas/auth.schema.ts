import { z } from 'zod'

// Esquema para efetuar o login
// Requer email, senha e tipo de usuário (Professor ou Sumarista)
export const loginSchema = z.object({
  email: z.string().email(),
  senha: z.string().min(6),
  tipo: z.enum(['Professor', 'Sumarista']),
})

export type LoginInput = z.infer<typeof loginSchema>
export type LoginOutput = z.infer<typeof loginSchema> & { token: string }
export type LoginError = { message: string; statusCode: number; error: string }
export type LoginResponse = LoginOutput | LoginError // Resposta de login com token JWT e informações do usuário
export type LoginResponseError = { message: string; statusCode: number; error: string } // Resposta de erro de login com mensagem de erro e código de status