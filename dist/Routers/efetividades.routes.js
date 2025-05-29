"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = efetividadesRoutes;
const efetividades_schema_js_1 = require("../schemas/efetividades.schema.js");
const authMiddleware_js_1 = require("../middlewares/authMiddleware.js");
const efetividades_controller_js_1 = require("../controllers/efetividades.controller.js");
async function efetividadesRoutes(app) {
    app.addHook('onRequest', authMiddleware_js_1.autenticar);
    app.post('/', { schema: { body: efetividades_schema_js_1.createEfetividadeSchema } }, efetividades_controller_js_1.criarEfetividade);
    app.get('/', efetividades_controller_js_1.listarEfetividades);
}
//# sourceMappingURL=efetividades.routes.js.map