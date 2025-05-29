"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarEfetividade = criarEfetividade;
exports.listarEfetividades = listarEfetividades;
const efetividades_schema_js_1 = require("../schemas/efetividades.schema.js");
async function criarEfetividade(req, reply) {
    const prisma = req.server.prisma;
    const data = efetividades_schema_js_1.createEfetividadeSchema.parse(req.body);
    const efetividade = await prisma.efetividade.create({ data });
    return reply.status(201).send(efetividade);
}
async function listarEfetividades(req, reply) {
    const prisma = req.server.prisma;
    const efetividades = await prisma.efetividade.findMany();
    return reply.send(efetividades);
}
//# sourceMappingURL=efetividades.controller.js.map