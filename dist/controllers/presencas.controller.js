"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarPresenca = criarPresenca;
exports.listarPresencas = listarPresencas;
const presencas_schema_1 = require("../schemas/presencas.schema");
async function criarPresenca(req, reply) {
    const prisma = req.server.prisma;
    const data = presencas_schema_1.createPresencaSchema.parse(req.body);
    const presenca = await prisma.presenca.create({ data });
    return reply.status(201).send(presenca);
}
async function listarPresencas(req, reply) {
    const prisma = req.server.prisma;
    const presencas = await prisma.presenca.findMany();
    return reply.send(presencas);
}
//# sourceMappingURL=presencas.controller.js.map