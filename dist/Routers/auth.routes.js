"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = authRoutes;
const auth_controller_js_1 = require("../controllers/auth.controller.js");
async function authRoutes(fastify) {
    fastify.post("/login", auth_controller_js_1.loginHandler);
}
//# sourceMappingURL=auth.routes.js.map