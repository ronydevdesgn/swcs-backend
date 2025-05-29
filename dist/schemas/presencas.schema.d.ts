import { z } from 'zod';
/**
* Esquema de validação para criar uma nova presença
* @param Data A data da presença
* @param Status O status da presença (Presente, Faltou ou Justificado)
* @param ProfessorID O identificador exclusivo do professor associado à presença
*/
export declare const createPresencaSchema: z.ZodObject<{
    Data: z.ZodString;
    Status: z.ZodEnum<["Presente", "Faltou", "Justificada"]>;
    ProfessorID: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    ProfessorID: number;
    Data: string;
    Status: "Presente" | "Faltou" | "Justificada";
}, {
    ProfessorID: number;
    Data: string;
    Status: "Presente" | "Faltou" | "Justificada";
}>;
export declare const getPresencaSchema: z.ZodObject<{
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
}, {
    id: number;
}>;
export declare const listPresencaSchema: z.ZodObject<{
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
* Esquema de validação para atualizar uma presença existente
* @param id O identificador único da presença a ser atualizada
* @param Data A nova data da presença (opcional)
* @param Status O novo status da presença (Presente, Faltou ou Justificado) (opcional)
* @param ProfessorID O novo identificador do professor associado à presença (opcional)
*/
export declare const updatePresencaSchema: z.ZodObject<{
    id: z.ZodNumber;
    Data: z.ZodOptional<z.ZodString>;
    Status: z.ZodOptional<z.ZodEnum<["Presente", "Faltou", "Justificada"]>>;
    ProfessorID: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: number;
    ProfessorID?: number | undefined;
    Data?: string | undefined;
    Status?: "Presente" | "Faltou" | "Justificada" | undefined;
}, {
    id: number;
    ProfessorID?: number | undefined;
    Data?: string | undefined;
    Status?: "Presente" | "Faltou" | "Justificada" | undefined;
}>;
/**
* Esquema para recuperar presenças de um professor específico com paginação
* @param ProfessorID O identificador único do professor
* @param page O número da página para resultados paginados (padrão: 1)
* @param limit O número máximo de resultados por página (padrão: 10, máx.: 100)
*/
export declare const getPresencaByProfessorSchema: z.ZodObject<{
    ProfessorID: z.ZodNumber;
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    ProfessorID: number;
}, {
    ProfessorID: number;
    page?: number | undefined;
    limit?: number | undefined;
}>;
