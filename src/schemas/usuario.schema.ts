import { z } from "zod";
import { TipoUsuario } from "@prisma/client";

// Schema definitions for validation
export const usuarioSchema = z.object({
  Nome: z
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(100, "Nome muito longo"),
  Email: z.string().email("Email inválido").max(100, "Email muito longo"),
  Senha: z
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .max(100, "Senha muito longa"),
  Tipo: z.nativeEnum(TipoUsuario, {
    errorMap: () => ({ message: "Tipo de usuário inválido" }),
  }),
});

export const updateUsuarioSchema = usuarioSchema.partial().omit({ Tipo: true });

export const updateSenhaSchema = z
  .object({
    senhaAtual: z.string(),
    novaSenha: z
      .string()
      .min(6, "Nova senha deve ter no mínimo 6 caracteres")
      .max(100, "Nova senha muito longa"),
    confirmarSenha: z.string(),
  })
  .refine((data) => data.novaSenha === data.confirmarSenha, {
    message: "Senhas não conferem",
    path: ["confirmarSenha"],
  });

export const idParamSchema = z.object({
  id: z.string().transform((val) => Number(val)),
});

// Type exports for TypeScript
export type CreateUsuarioInput = z.infer<typeof usuarioSchema>;
export type UpdateUsuarioInput = z.infer<typeof updateUsuarioSchema>;
export type UpdateSenhaInput = z.infer<typeof updateSenhaSchema>;
export type IdParam = z.infer<typeof idParamSchema>;
