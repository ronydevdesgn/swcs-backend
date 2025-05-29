import { z } from 'zod';
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    senha: z.ZodString;
    tipo: z.ZodEnum<["Professor", "Sumarista"]>;
}, "strip", z.ZodTypeAny, {
    email: string;
    senha: string;
    tipo: "Professor" | "Sumarista";
}, {
    email: string;
    senha: string;
    tipo: "Professor" | "Sumarista";
}>;
export type LoginInput = z.infer<typeof loginSchema>;
export type LoginOutput = z.infer<typeof loginSchema> & {
    token: string;
};
export type LoginError = {
    message: string;
    statusCode: number;
    error: string;
};
export type LoginResponse = LoginOutput | LoginError;
export type LoginResponseError = {
    message: string;
    statusCode: number;
    error: string;
};
