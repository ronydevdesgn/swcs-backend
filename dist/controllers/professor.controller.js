"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarProfessor = criarProfessor;
exports.listarProfessores = listarProfessores;
exports.atualizarProfessor = atualizarProfessor;
exports.deletarProfessor = deletarProfessor;
const professor_schema_1 = require("../schemas/professor.schema");
async function criarProfessor(req, reply) {
    const prisma = req.server.prisma;
    const data = professor_schema_1.createProfessorSchema.parse(req.body);
    const novoProfessor = await prisma.professor.create({ data });
    return reply.status(201).send(novoProfessor);
}
async function listarProfessores(req, reply) {
    const prisma = req.server.prisma;
    const professores = await prisma.professor.findMany();
    return reply.send(professores);
}
async function atualizarProfessor(req, reply) {
    const prisma = req.server.prisma;
    const id = Number(req.params.id);
    const data = professor_schema_1.updateProfessorSchema.parse(req.body);
    const professor = await prisma.professor.update({ where: { ProfessorID: id }, data });
    return reply.send(professor);
}
async function deletarProfessor(req, reply) {
    const prisma = req.server.prisma;
    const id = Number(req.params.id);
    await prisma.professor.delete({ where: { ProfessorID: id } });
    return reply.status(204).send();
}
//# sourceMappingURL=professor.controller.js.map