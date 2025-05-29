"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = funcionarioRoutes;
const funcionario_controller_js_1 = require("../controllers/funcionario.controller.js");
const authMiddleware_js_1 = require("../middlewares/authMiddleware.js");
async function funcionarioRoutes(fastify) {
    fastify.addHook("onRequest", authMiddleware_js_1.autenticar);
    fastify.get("/", funcionario_controller_js_1.listarFuncionarios);
    fastify.post("/", funcionario_controller_js_1.criarFuncionario);
    fastify.put("/:id", funcionario_controller_js_1.atualizarFuncionario);
    fastify.delete("/:id", funcionario_controller_js_1.deletarFuncionario);
}
//# sourceMappingURL=funcionario.routes.js.map