"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = professorRoutes;
const authMiddleware_js_1 = require("../middlewares/authMiddleware.js");
const professor_controller_js_1 = require("../controllers/professor.controller.js");
const professor_schema_js_1 = require("../schemas/professor.schema.js");
async function professorRoutes(app) {
    app.addHook('onRequest', authMiddleware_js_1.autenticar);
    app.post('/', { schema: { body: professor_schema_js_1.createProfessorSchema } }, professor_controller_js_1.criarProfessor);
    app.get('/', professor_controller_js_1.listarProfessores);
    app.put('/:id', { schema: { body: professor_schema_js_1.updateProfessorSchema } }, professor_controller_js_1.atualizarProfessor);
    app.delete('/:id', professor_controller_js_1.deletarProfessor);
}
//# sourceMappingURL=professor.routes.js.map