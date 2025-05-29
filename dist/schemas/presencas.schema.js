"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPresencaByProfessorSchema = exports.updatePresencaSchema = exports.listPresencaSchema = exports.getPresencaSchema = exports.createPresencaSchema = void 0;
const zod_1 = require("zod");
/**
* Esquema de validação para criar uma nova presença
* @param Data A data da presença
* @param Status O status da presença (Presente, Faltou ou Justificado)
* @param ProfessorID O identificador exclusivo do professor associado à presença
*/
exports.createPresencaSchema = zod_1.z.object({
    Data: zod_1.z.string(),
    Status: zod_1.z.enum(['Presente', 'Faltou', 'Justificada']),
    ProfessorID: zod_1.z.number(),
});
exports.getPresencaSchema = zod_1.z.object({
    id: zod_1.z.number(),
});
exports.listPresencaSchema = zod_1.z.object({
    page: zod_1.z.number().min(1).default(1),
    limit: zod_1.z.number().min(1).max(100).default(10),
});
/**
* Esquema de validação para atualizar uma presença existente
* @param id O identificador único da presença a ser atualizada
* @param Data A nova data da presença (opcional)
* @param Status O novo status da presença (Presente, Faltou ou Justificado) (opcional)
* @param ProfessorID O novo identificador do professor associado à presença (opcional)
*/
exports.updatePresencaSchema = zod_1.z.object({
    id: zod_1.z.number(),
    Data: zod_1.z.string().optional(),
    Status: zod_1.z.enum(['Presente', 'Faltou', 'Justificada']).optional(),
    ProfessorID: zod_1.z.number().optional(),
});
/**
* Esquema para recuperar presenças de um professor específico com paginação
* @param ProfessorID O identificador único do professor
* @param page O número da página para resultados paginados (padrão: 1)
* @param limit O número máximo de resultados por página (padrão: 10, máx.: 100)
*/
exports.getPresencaByProfessorSchema = zod_1.z.object({
    ProfessorID: zod_1.z.number(),
    page: zod_1.z.number().min(1).default(1),
    limit: zod_1.z.number().min(1).max(100).default(10),
});
//# sourceMappingURL=presencas.schema.js.map