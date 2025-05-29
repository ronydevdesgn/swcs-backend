import { z } from 'zod';
export declare const createProfessorSchema: z.ZodObject<{
    Nome: z.ZodString;
    Departamento: z.ZodString;
    CargaHoraria: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    Nome: string;
    Departamento: string;
    CargaHoraria: number;
}, {
    Nome: string;
    Departamento: string;
    CargaHoraria: number;
}>;
export declare const updateProfessorSchema: z.ZodObject<{
    Nome: z.ZodOptional<z.ZodString>;
    Departamento: z.ZodOptional<z.ZodString>;
    CargaHoraria: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    Nome?: string | undefined;
    Departamento?: string | undefined;
    CargaHoraria?: number | undefined;
}, {
    Nome?: string | undefined;
    Departamento?: string | undefined;
    CargaHoraria?: number | undefined;
}>;
export declare const getProfessorSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export declare const listProfessorSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
}, {
    page?: number | undefined;
    limit?: number | undefined;
}>;
export declare const deleteProfessorSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
