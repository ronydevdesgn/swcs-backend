"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletarFuncionarioSchema = exports.listarFuncionariosSchema = exports.atualizarFuncionarioSchema = exports.criarFuncionarioSchema = void 0;
const zod_1 = require("zod");
exports.criarFuncionarioSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    Nome: zod_1.z.string(),
    Email: zod_1.z.string().email(),
    Senha: zod_1.z.string().min(6),
});
exports.atualizarFuncionarioSchema = zod_1.z.object({
    id: zod_1.z.string().uuid().optional(),
    Nome: zod_1.z.string().optional(),
    Email: zod_1.z.string().email().optional(),
    Senha: zod_1.z.string().min(6).optional(),
});
exports.listarFuncionariosSchema = zod_1.z.object({
    page: zod_1.z.number().min(1).default(1),
    limit: zod_1.z.number().min(1).max(100).default(10),
});
/**
* Esquema Zod para validar a exclusão de um funcionário
* Requer um UUID válido para identificar o funcionário específico a ser excluído
*/
exports.deletarFuncionarioSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    // Nome: z.string().optional(),
});
// export const pegarFuncionarioSchema = z.object({
//   id: z.string().uuid(),
//   Nome: z.string().optional(),
//   Email: z.string().email().optional(),
//   Senha: z.string().min(6).optional(),
// }).strict().refine(data => {
//   return true;
// }, {
//   message: "Custom validation failed",
//   path: ["custom"],
// }); // Custom error message for the entire
//# sourceMappingURL=funcionario.schema.js.map