"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = permissoesRoutes;
const permissoes_schema_js_1 = require("../schemas/permissoes.schema.js");
const authMiddleware_js_1 = require("../middlewares/authMiddleware.js");
const permissoes_controller_js_1 = require("../controllers/permissoes.controller.js");
async function permissoesRoutes(app) {
    app.addHook('onRequest', authMiddleware_js_1.autenticar);
    app.post('/', { schema: { body: permissoes_schema_js_1.createPermissaoSchema } }, permissoes_controller_js_1.criarPermissao);
    app.get('/', permissoes_controller_js_1.listarPermissoes);
}
//# sourceMappingURL=permissoes.routes.js.map