"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEfetividadeSchema = exports.getEfetividadeByProfessorSchema = exports.listEfetividadeSchema = exports.getEfetividadeSchema = exports.updateEfetividadeSchema = exports.createEfetividadeSchema = void 0;
const zod_1 = require("zod");
exports.createEfetividadeSchema = zod_1.z.object({
    Data: zod_1.z.string(),
    HorasTrabalhadas: zod_1.z.number().positive(),
    ProfessorID: zod_1.z.number(),
});
exports.updateEfetividadeSchema = exports.createEfetividadeSchema.partial();
// Esquema para obter uma efetividade por ID
exports.getEfetividadeSchema = zod_1.z.object({
    id: zod_1.z.number(),
    Data: zod_1.z.string(),
    HorasTrabalhadas: zod_1.z.number().positive(),
    ProfessorID: zod_1.z.number(),
});
// Listar efetividades com paginação
// page: número da página (mínimo 1, padrão 1)
exports.listEfetividadeSchema = zod_1.z.object({
    page: zod_1.z.number().min(1).default(1),
    limit: zod_1.z.number().min(1).max(100).default(10),
});
// Listar efetividades por professor
exports.getEfetividadeByProfessorSchema = zod_1.z.object({
    id: zod_1.z.number(),
});
/**
* Esquema para deletar uma efetividade
* @param id O identificador único da efetividade a ser deletada
* @param Data A nova data da efetividade (opcional)
* @param HorasTrabalhadas O novo número de horas trabalhadas (opcional)
* @param ProfessorID O novo identificador do professor associado à efetividade (opcional)
*/
exports.deleteEfetividadeSchema = zod_1.z.object({
    id: zod_1.z.number(),
    Data: zod_1.z.string().optional(),
    HorasTrabalhadas: zod_1.z.number().positive().optional(),
    ProfessorID: zod_1.z.number().optional(),
});
//# sourceMappingURL=efetividades.schema.js.map