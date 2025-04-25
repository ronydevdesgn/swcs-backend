import { z } from 'zod'

export const criarFuncionarioSchema = z.object({
  Nome: z.string(),
  Email: z.string().email(),
  Senha: z.string().min(6),
})

export const atualizarFuncionarioSchema = z.object({
  Nome: z.string().optional(),
  Email: z.string().email().optional(),
  Senha: z.string().min(6).optional(),
})