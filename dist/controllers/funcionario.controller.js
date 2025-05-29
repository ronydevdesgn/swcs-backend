"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarFuncionario = criarFuncionario;
exports.listarFuncionarios = listarFuncionarios;
exports.atualizarFuncionario = atualizarFuncionario;
exports.deletarFuncionario = deletarFuncionario;
const funcionario_schema_1 = require("../schemas/funcionario.schema");
async function criarFuncionario(req, reply) {
    const prisma = req.server.prisma;
    // Valida o body
    const data = funcionario_schema_1.criarFuncionarioSchema.parse(req.body);
    // Cria o funcionário
    const funcionario = await prisma.funcionario.create({ data });
    return reply.status(201).send(funcionario);
}
async function listarFuncionarios(req, reply) {
    const prisma = req.server.prisma;
    const funcionarios = await prisma.funcionario.findMany();
    return reply.send(funcionarios);
}
async function atualizarFuncionario(req, reply) {
    const prisma = req.server.prisma;
    const id = Number(req.params.id);
    const data = funcionario_schema_1.atualizarFuncionarioSchema.parse(req.body);
    const funcionario = await prisma.funcionario.update({
        where: { FuncionarioID: id },
        data,
    });
    return reply.send(funcionario);
}
async function deletarFuncionario(req, reply) {
    const prisma = req.server.prisma;
    const id = Number(req.params.id);
    await prisma.funcionario.delete({ where: { FuncionarioID: id } });
    return reply.status(204).send();
}
//# sourceMappingURL=funcionario.controller.js.map