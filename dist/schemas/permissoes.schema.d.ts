import { z } from 'zod';
export declare const createPermissaoSchema: z.ZodObject<{
    Descricao: z.ZodString;
}, "strip", z.ZodTypeAny, {
    Descricao: string;
}, {
    Descricao: string;
}>;
export declare const updatePermissaoSchema: z.ZodObject<{
    Descricao: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    Descricao?: string | undefined;
}, {
    Descricao?: string | undefined;
}>;
