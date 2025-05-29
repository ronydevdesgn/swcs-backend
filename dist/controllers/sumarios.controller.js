"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarSumario = criarSumario;
exports.listarSumarios = listarSumarios;
const sumarios_schema_1 = require("../schemas/sumarios.schema");
async function criarSumario(req, reply) {
    const prisma = req.server.prisma;
    const data = sumarios_schema_1.createSumarioSchema.parse(req.body);
    const sumario = await prisma.sumario.create({ data });
    return reply.status(201).send(sumario);
}
async function listarSumarios(req, reply) {
    const prisma = req.server.prisma;
    const sumarios = await prisma.sumario.findMany();
    return reply.send(sumarios);
}
//# sourceMappingURL=sumarios.controller.js.map