"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = cursosRoutes;
const cursos_schema_js_1 = require("../schemas/cursos.schema.js");
const authMiddleware_js_1 = require("../middlewares/authMiddleware.js");
const cursos_controller_js_1 = require("../controllers/cursos.controller.js");
async function cursosRoutes(app) {
    app.addHook('onRequest', authMiddleware_js_1.autenticar);
    app.post('/', { schema: { body: cursos_schema_js_1.createCursoSchema } }, cursos_controller_js_1.criarCurso);
    app.get('/', cursos_controller_js_1.listarCursos);
}
//# sourceMappingURL=cursos.routes.js.map