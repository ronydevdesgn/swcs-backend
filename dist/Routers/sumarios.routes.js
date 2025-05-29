"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sumariosRoutes;
const sumarios_schema_js_1 = require("../schemas/sumarios.schema.js");
const authMiddleware_js_1 = require("../middlewares/authMiddleware.js");
const sumarios_controller_js_1 = require("../controllers/sumarios.controller.js");
async function sumariosRoutes(app) {
    app.addHook('onRequest', authMiddleware_js_1.autenticar);
    app.post('/', { schema: { body: sumarios_schema_js_1.createSumarioSchema } }, sumarios_controller_js_1.criarSumario);
    app.get('/', sumarios_controller_js_1.listarSumarios);
}
//# sourceMappingURL=sumarios.routes.js.map