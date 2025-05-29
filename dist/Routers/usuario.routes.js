"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = usuarioRoutes;
const usuario_schema_js_1 = require("../schemas/usuario.schema.js");
const authMiddleware_js_1 = require("../middlewares/authMiddleware.js");
const usuario_controller_js_1 = require("../controllers/usuario.controller.js");
async function usuarioRoutes(app) {
    app.addHook('onRequest', authMiddleware_js_1.autenticar);
    app.post('/', { schema: { body: usuario_schema_js_1.createUsuarioSchema } }, usuario_controller_js_1.criarUsuario);
    app.get('/', usuario_controller_js_1.listarUsuarios);
    app.put('/:id', { schema: { body: usuario_schema_js_1.updateUsuarioSchema } }, usuario_controller_js_1.atualizarUsuario);
    app.delete('/:id', usuario_controller_js_1.deletarUsuario);
}
//# sourceMappingURL=usuario.routes.js.map