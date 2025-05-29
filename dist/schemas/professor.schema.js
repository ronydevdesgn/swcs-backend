"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProfessorSchema = exports.listProfessorSchema = exports.getProfessorSchema = exports.updateProfessorSchema = exports.createProfessorSchema = void 0;
const zod_1 = require("zod");
exports.createProfessorSchema = zod_1.z.object({
    Nome: zod_1.z.string(),
    Departamento: zod_1.z.string(),
    CargaHoraria: zod_1.z.number().min(1),
});
exports.updateProfessorSchema = exports.createProfessorSchema.partial();
exports.getProfessorSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
});
exports.listProfessorSchema = zod_1.z.object({
    page: zod_1.z.number().min(1).default(1),
    limit: zod_1.z.number().min(1).max(100).default(10),
});
exports.deleteProfessorSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
});
//# sourceMappingURL=professor.schema.js.map