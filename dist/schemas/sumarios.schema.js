"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSumarioSchema = exports.getSumarioSchema = exports.updateSumarioSchema = exports.createSumarioSchema = void 0;
const zod_1 = require("zod");
/**
* Esquema para criar uma nova entrada Sumario (resumo)
* Data - Data do resumo (formato de data ISO recomendado)
* Conteudo - Conteúdo do resumo (mínimo de 5 caracteres)
* CursoID - Identificador do curso associado
* ProfessorID - Identificador do professor associado
*/
exports.createSumarioSchema = zod_1.z.object({
    Data: zod_1.z.string(), // Considera ISO date ou validar com refine
    Conteudo: zod_1.z.string().min(5),
    CursoID: zod_1.z.number(),
    ProfessorID: zod_1.z.number(),
}).partial();
exports.updateSumarioSchema = exports.createSumarioSchema.partial();
exports.getSumarioSchema = zod_1.z.object({
    id: zod_1.z.number(),
});
exports.deleteSumarioSchema = exports.getSumarioSchema.partial();
//# sourceMappingURL=sumarios.schema.js.map