import { z } from 'zod';
export declare const createEfetividadeSchema: z.ZodObject<{
    Data: z.ZodString;
    HorasTrabalhadas: z.ZodNumber;
    ProfessorID: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    ProfessorID: number;
    Data: string;
    HorasTrabalhadas: number;
}, {
    ProfessorID: number;
    Data: string;
    HorasTrabalhadas: number;
}>;
export declare const updateEfetividadeSchema: z.ZodObject<{
    Data: z.ZodOptional<z.ZodString>;
    HorasTrabalhadas: z.ZodOptional<z.ZodNumber>;
    ProfessorID: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    ProfessorID?: number | undefined;
    Data?: string | undefined;
    HorasTrabalhadas?: number | undefined;
}, {
    ProfessorID?: number | undefined;
    Data?: string | undefined;
    HorasTrabalhadas?: number | undefined;
}>;
export declare const getEfetividadeSchema: z.ZodObject<{
    id: z.ZodNumber;
    Data: z.ZodString;
    HorasTrabalhadas: z.ZodNumber;
    ProfessorID: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
    ProfessorID: number;
    Data: string;
    HorasTrabalhadas: number;
}, {
    id: number;
    ProfessorID: number;
    Data: string;
    HorasTrabalhadas: number;
}>;
export declare const listEfetividadeSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
}, {
    page?: number | undefined;
    limit?: number | undefined;
}>;
export declare const getEfetividadeByProfessorSchema: z.ZodObject<{
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
}, {
    id: number;
}>;
/**
* Esquema para deletar uma efetividade
* @param id O identificador único da efetividade a ser deletada
* @param Data A nova data da efetividade (opcional)
* @param HorasTrabalhadas O novo número de horas trabalhadas (opcional)
* @param ProfessorID O novo identificador do professor associado à efetividade (opcional)
*/
export declare const deleteEfetividadeSchema: z.ZodObject<{
    id: z.ZodNumber;
    Data: z.ZodOptional<z.ZodString>;
    HorasTrabalhadas: z.ZodOptional<z.ZodNumber>;
    ProfessorID: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: number;
    ProfessorID?: number | undefined;
    Data?: string | undefined;
    HorasTrabalhadas?: number | undefined;
}, {
    id: number;
    ProfessorID?: number | undefined;
    Data?: string | undefined;
    HorasTrabalhadas?: number | undefined;
}>;
