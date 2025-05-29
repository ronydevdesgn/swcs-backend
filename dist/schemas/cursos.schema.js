"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCursoSchema = exports.getCursoSchema = exports.updateCursoSchema = exports.createCursoSchema = void 0;
const zod_1 = require("zod");
exports.createCursoSchema = zod_1.z.object({
    Nome: zod_1.z.string().min(1),
    Descricao: zod_1.z.string().min(1),
});
exports.updateCursoSchema = exports.createCursoSchema.partial();
exports.getCursoSchema = zod_1.z.object({
    id: zod_1.z.string().min(1),
    Nome: zod_1.z.string().min(1).optional(),
    Descricao: zod_1.z.string().min(1).optional(),
});
exports.deleteCursoSchema = zod_1.z.object({
    id: zod_1.z.string().min(1),
});
//# sourceMappingURL=cursos.schema.js.map