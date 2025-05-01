import { z } from 'zod'

export const criarFuncionarioSchema = z.object({
  id: z.string().uuid(),
  Nome: z.string(),
  Email: z.string().email(),
  Senha: z.string().min(6),
})

export const atualizarFuncionarioSchema = z.object({
  id: z.string().uuid().optional(),
  Nome: z.string().optional(),
  Email: z.string().email().optional(),
  Senha: z.string().min(6).optional(),
})
export const listarFuncionariosSchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(10),
})

/**
* Esquema Zod para validar a exclusão de um funcionário
* Requer um UUID válido para identificar o funcionário específico a ser excluído
*/
export const deletarFuncionarioSchema = z.object({
  id: z.string().uuid(),
  // Nome: z.string().optional(),
})
// export const pegarFuncionarioSchema = z.object({
//   id: z.string().uuid(),
//   Nome: z.string().optional(),
//   Email: z.string().email().optional(),
//   Senha: z.string().min(6).optional(),
// }).strict().refine(data => {

//   return true;
// }, {
//   message: "Custom validation failed",
//   path: ["custom"],
// }); // Custom error message for the entire