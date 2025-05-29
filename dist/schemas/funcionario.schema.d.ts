import { z } from 'zod';
export declare const criarFuncionarioSchema: z.ZodObject<{
    id: z.ZodString;
    Nome: z.ZodString;
    Email: z.ZodString;
    Senha: z.ZodString;
}, "strip", z.ZodTypeAny, {
    Nome: string;
    Email: string;
    id: string;
    Senha: string;
}, {
    Nome: string;
    Email: string;
    id: string;
    Senha: string;
}>;
export declare const atualizarFuncionarioSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    Nome: z.ZodOptional<z.ZodString>;
    Email: z.ZodOptional<z.ZodString>;
    Senha: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    Nome?: string | undefined;
    Email?: string | undefined;
    id?: string | undefined;
    Senha?: string | undefined;
}, {
    Nome?: string | undefined;
    Email?: string | undefined;
    id?: string | undefined;
    Senha?: string | undefined;
}>;
export declare const listarFuncionariosSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
}, {
    page?: number | undefined;
    limit?: number | undefined;
}>;
/**
* Esquema Zod para validar a exclusão de um funcionário
* Requer um UUID válido para identificar o funcionário específico a ser excluído
*/
export declare const deletarFuncionarioSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
