import { z } from 'zod';
export declare const createCursoSchema: z.ZodObject<{
    Nome: z.ZodString;
    Descricao: z.ZodString;
}, "strip", z.ZodTypeAny, {
    Nome: string;
    Descricao: string;
}, {
    Nome: string;
    Descricao: string;
}>;
export declare const updateCursoSchema: z.ZodObject<{
    Nome: z.ZodOptional<z.ZodString>;
    Descricao: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    Nome?: string | undefined;
    Descricao?: string | undefined;
}, {
    Nome?: string | undefined;
    Descricao?: string | undefined;
}>;
export declare const getCursoSchema: z.ZodObject<{
    id: z.ZodString;
    Nome: z.ZodOptional<z.ZodString>;
    Descricao: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    Nome?: string | undefined;
    Descricao?: string | undefined;
}, {
    id: string;
    Nome?: string | undefined;
    Descricao?: string | undefined;
}>;
export declare const deleteCursoSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
