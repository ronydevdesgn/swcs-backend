"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = presencasRoutes;
const presencas_schema_js_1 = require("../schemas/presencas.schema.js");
const authMiddleware_js_1 = require("../middlewares/authMiddleware.js");
const presencas_controller_js_1 = require("../controllers/presencas.controller.js");
async function presencasRoutes(app) {
    app.addHook('onRequest', authMiddleware_js_1.autenticar);
    app.post('/', { schema: { body: presencas_schema_js_1.createPresencaSchema } }, presencas_controller_js_1.criarPresenca);
    app.get('/', presencas_controller_js_1.listarPresencas);
}
// Compare(ração) este trecho de src/controllers/presencas.controller.ts:
// #src\Routers\turmas.routes.ts(app: FastifyInstance) {
//   app.addHook('onRequest', autenticar);
//   app.post('/', { schema: { body: createTurmaSchema } }, criarTurma);
//   app.get('/', listarTurmas);
//   app.get('/:id', getTurmaById);
//   app.put('/:id', { schema: { body: createTurmaSchema } }, atualizarTurma);
//   app.delete('/:id', deletarTurma);
// }
//# sourceMappingURL=presencas.routes.js.map