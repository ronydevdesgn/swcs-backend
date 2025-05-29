"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePermissaoSchema = exports.createPermissaoSchema = void 0;
const zod_1 = require("zod");
exports.createPermissaoSchema = zod_1.z.object({
    Descricao: zod_1.z.string().min(2),
});
exports.updatePermissaoSchema = exports.createPermissaoSchema.partial();
//# sourceMappingURL=permissoes.schema.js.map