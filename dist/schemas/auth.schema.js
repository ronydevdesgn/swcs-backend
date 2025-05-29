"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = void 0;
const zod_1 = require("zod");
// Esquema para efetuar o login
// Requer email, senha e tipo de usuário (Professor ou Sumarista)
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    senha: zod_1.z.string().min(6),
    tipo: zod_1.z.enum(['Professor', 'Sumarista']),
});
//# sourceMappingURL=auth.schema.js.map