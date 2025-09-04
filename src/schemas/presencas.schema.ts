import { z } from "zod";
import { Estado } from "@prisma/client";

/**
 * Esquema de validação para criar uma nova presença
 * @param Data A data da presença
 * @param Estado O estado da presença (PRESENTE ou FALTA)
 * @param ProfessorID O identificador exclusivo do professor associado à presença
 */
export const presencaSchema = z.object({
  Data: z
    .string()
    .datetime("Data inválida")
    .describe("Data e hora da presença (ISO 8601)"),
  ProfessorID: z
    .number()
    .positive("ID do professor deve ser positivo")
    .describe("ID numérico do professor"),
  Estado: z
    .nativeEnum(Estado, {
      errorMap: () => ({ message: "Estado deve ser PRESENTE ou FALTA" }),
    })
    .describe("Estado da presença: PRESENTE ou FALTA"),
});

export const batchPresencaSchema = z.object({
  presencas: z
    .array(presencaSchema)
    .nonempty("Deve fornecer ao menos um registro de presença"),
});

export const updatePresencaSchema = z.object({
  Data: z.string().datetime("Data inválida").optional(),
  ProfessorID: z
    .number()
    .positive("ID do professor deve ser positivo")
    .optional(),
  Estado: z
    .nativeEnum(Estado, {
      errorMap: () => ({ message: "Estado deve ser PRESENTE ou FALTA" }),
    })
    .optional(),
});

export const idParamSchema = z.object({
  id: z
    .string()
    .regex(/^\d+$/, "ID inválido")
    .transform((val) => Number(val))
    .describe("Parâmetro id (número)"),
});

export const presencaResponseSchema = {
  type: "object",
  properties: {
    Data: { type: "string", format: "date-time" },
    Estado: { type: "string", enum: ["PRESENTE", "FALTA"] },
    ProfessorID: { type: "number" },
    Professor: {
      type: "object",
      properties: {
        Nome: { type: "string" },
        Departamento: { type: "string" },
      },
    },
  },
};

export type CreatePresencaInput = z.infer<typeof presencaSchema>;
export type CreateBatchPresencaInput = z.infer<typeof batchPresencaSchema>;
export type UpdatePresencaInput = z.infer<typeof updatePresencaSchema>;
export type IdParam = z.infer<typeof idParamSchema>;
