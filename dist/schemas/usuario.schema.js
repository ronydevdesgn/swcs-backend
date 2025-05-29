"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuarioSchema = exports.getUsuarioSchema = exports.updateUsuarioSchema = exports.createUsuarioSchema = void 0;
const zod_1 = require("zod");
exports.createUsuarioSchema = zod_1.z.object({
    Nome: zod_1.z.string(),
    Email: zod_1.z.string().email(),
    Senha: zod_1.z.string().min(6),
    Tipo: zod_1.z.enum(['Professor', 'Sumarista']),
    ProfessorID: zod_1.z.number().optional().nullable(),
});
exports.updateUsuarioSchema = exports.createUsuarioSchema.partial();
/**
* Esquema para recuperar um usuário com campos opcionais
* Valida parâmetros de recuperação de usuário, incluindo detalhes de identificação opcionais
* Suporta consulta de ID baseada em UUID com filtragem opcional por atributos do usuário
*/
exports.getUsuarioSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    Nome: zod_1.z.string().optional(),
    Email: zod_1.z.string().email().optional(),
    Senha: zod_1.z.string().min(6).optional(),
    Tipo: zod_1.z.enum(['Professor', 'Sumarista']).optional(),
    ProfessorID: zod_1.z.number().optional().nullable(),
}).strict().refine(data => {
    return data.id !== '';
}, {
    message: "Custom validation failed",
    path: ["custom"],
});
// deleteUsuarioSchema
exports.deleteUsuarioSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
}).strict();
//# sourceMappingURL=usuario.schema.js.map