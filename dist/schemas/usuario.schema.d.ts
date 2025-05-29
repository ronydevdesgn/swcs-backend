import { z } from 'zod';
export declare const createUsuarioSchema: z.ZodObject<{
    Nome: z.ZodString;
    Email: z.ZodString;
    Senha: z.ZodString;
    Tipo: z.ZodEnum<["Professor", "Sumarista"]>;
    ProfessorID: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    Nome: string;
    Email: string;
    Tipo: "Professor" | "Sumarista";
    Senha: string;
    ProfessorID?: number | null | undefined;
}, {
    Nome: string;
    Email: string;
    Tipo: "Professor" | "Sumarista";
    Senha: string;
    ProfessorID?: number | null | undefined;
}>;
export declare const updateUsuarioSchema: z.ZodObject<{
    Nome: z.ZodOptional<z.ZodString>;
    Email: z.ZodOptional<z.ZodString>;
    Senha: z.ZodOptional<z.ZodString>;
    Tipo: z.ZodOptional<z.ZodEnum<["Professor", "Sumarista"]>>;
    ProfessorID: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodNumber>>>;
}, "strip", z.ZodTypeAny, {
    Nome?: string | undefined;
    Email?: string | undefined;
    Tipo?: "Professor" | "Sumarista" | undefined;
    ProfessorID?: number | null | undefined;
    Senha?: string | undefined;
}, {
    Nome?: string | undefined;
    Email?: string | undefined;
    Tipo?: "Professor" | "Sumarista" | undefined;
    ProfessorID?: number | null | undefined;
    Senha?: string | undefined;
}>;
/**
* Esquema para recuperar um usuário com campos opcionais
* Valida parâmetros de recuperação de usuário, incluindo detalhes de identificação opcionais
* Suporta consulta de ID baseada em UUID com filtragem opcional por atributos do usuário
*/
export declare const getUsuarioSchema: z.ZodEffects<z.ZodObject<{
    id: z.ZodString;
    Nome: z.ZodOptional<z.ZodString>;
    Email: z.ZodOptional<z.ZodString>;
    Senha: z.ZodOptional<z.ZodString>;
    Tipo: z.ZodOptional<z.ZodEnum<["Professor", "Sumarista"]>>;
    ProfessorID: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, "strict", z.ZodTypeAny, {
    id: string;
    Nome?: string | undefined;
    Email?: string | undefined;
    Tipo?: "Professor" | "Sumarista" | undefined;
    ProfessorID?: number | null | undefined;
    Senha?: string | undefined;
}, {
    id: string;
    Nome?: string | undefined;
    Email?: string | undefined;
    Tipo?: "Professor" | "Sumarista" | undefined;
    ProfessorID?: number | null | undefined;
    Senha?: string | undefined;
}>, {
    id: string;
    Nome?: string | undefined;
    Email?: string | undefined;
    Tipo?: "Professor" | "Sumarista" | undefined;
    ProfessorID?: number | null | undefined;
    Senha?: string | undefined;
}, {
    id: string;
    Nome?: string | undefined;
    Email?: string | undefined;
    Tipo?: "Professor" | "Sumarista" | undefined;
    ProfessorID?: number | null | undefined;
    Senha?: string | undefined;
}>;
export declare const deleteUsuarioSchema: z.ZodObject<{
    id: z.ZodString;
}, "strict", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
