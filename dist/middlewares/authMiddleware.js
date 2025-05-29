"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autenticar = autenticar;
const jwt_js_1 = require("../utils/jwt.js");
async function autenticar(req, reply) {
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return reply.status(401).send({ error: 'Token não fornecido' });
    const [, token] = authHeader.split(' ');
    try {
        const payload = (0, jwt_js_1.verificarToken)(token);
        req.usuario = payload;
    }
    catch (e) {
        return reply.status(401).send({ error: 'Token inválido' });
    }
}
//# sourceMappingURL=authMiddleware.js.map