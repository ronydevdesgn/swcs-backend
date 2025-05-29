"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginHandler = loginHandler;
const auth_schema_js_1 = require("../schemas/auth.schema.js");
const hash_js_1 = require("../utils/hash.js");
const jwt_js_1 = require("../utils/jwt.js");
async function loginHandler(req, reply) {
    const prisma = req.server.prisma;
    const { email, senha } = auth_schema_js_1.loginSchema.parse(req.body);
    const usuario = await prisma.usuario.findUnique({ where: { Email: email } });
    if (!usuario || !(await (0, hash_js_1.compararSenha)(senha, usuario.SenhaHash))) {
        return reply.status(401).send({ message: 'Credenciais inválidas' });
    }
    const token = (0, jwt_js_1.gerarToken)({ id: usuario.UsuarioID, tipo: usuario.Tipo });
    return reply.send({ token });
}
//# sourceMappingURL=auth.controller.js.map