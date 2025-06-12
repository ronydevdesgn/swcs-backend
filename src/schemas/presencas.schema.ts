import { z } from 'zod';

/** 
* Esquema de validação para criar uma nova presença 
* @param Data A data da presença 
* @param Status O status da presença (Presente, Faltou ou Justificado) 
* @param ProfessorID O identificador exclusivo do professor associado à presença 
*/
export const presencaSchema = z.object({
  Data: z.string()
    .datetime('Data inválida'),
  ProfessorID: z.number()
    .positive('ID do professor deve ser positivo'),
  Estado: z.enum(['PRESENTE', 'FALTA'], {
    errorMap: () => ({ message: 'Estado deve ser PRESENTE ou FALTA' })
  })
});

export const updatePresencaSchema = presencaSchema.partial();

export const idParamSchema = z.object({
  id: z.string().transform((val) => Number(val))
});

export const presencaResponseSchema = {
  type: 'object',
  properties: {
    Data: { type: 'string', format: 'date-time' },
    Estado: { type: 'string', enum: ['PRESENTE', 'FALTA'] },
    ProfessorID: { type: 'number' },
    Professor: {
      type: 'object',
      properties: {
        Nome: { type: 'string' },
        Departamento: { type: 'string' }
      }
    }
  }
};

export type CreatePresencaInput = z.infer<typeof presencaSchema>;
export type UpdatePresencaInput = z.infer<typeof updatePresencaSchema>;
export type IdParam = z.infer<typeof idParamSchema>;