import { z } from 'zod';
/**
* Esquema para criar uma nova entrada Sumario (resumo)
* Data - Data do resumo (formato de data ISO recomendado)
* Conteudo - Conteúdo do resumo (mínimo de 5 caracteres)
* CursoID - Identificador do curso associado
* ProfessorID - Identificador do professor associado
*/
export declare const createSumarioSchema: z.ZodObject<{
    Data: z.ZodOptional<z.ZodString>;
    Conteudo: z.ZodOptional<z.ZodString>;
    CursoID: z.ZodOptional<z.ZodNumber>;
    ProfessorID: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    ProfessorID?: number | undefined;
    CursoID?: number | undefined;
    Data?: string | undefined;
    Conteudo?: string | undefined;
}, {
    ProfessorID?: number | undefined;
    CursoID?: number | undefined;
    Data?: string | undefined;
    Conteudo?: string | undefined;
}>;
export declare const updateSumarioSchema: z.ZodObject<{
    Data: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    Conteudo: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    CursoID: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    ProfessorID: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    ProfessorID?: number | undefined;
    CursoID?: number | undefined;
    Data?: string | undefined;
    Conteudo?: string | undefined;
}, {
    ProfessorID?: number | undefined;
    CursoID?: number | undefined;
    Data?: string | undefined;
    Conteudo?: string | undefined;
}>;
export declare const getSumarioSchema: z.ZodObject<{
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
}, {
    id: number;
}>;
export declare const deleteSumarioSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id?: number | undefined;
}, {
    id?: number | undefined;
}>;
