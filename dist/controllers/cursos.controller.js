"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarCurso = criarCurso;
exports.listarCursos = listarCursos;
const cursos_schema_js_1 = require("../schemas/cursos.schema.js");
// Função para criar um novo curso
async function criarCurso(req, reply) {
    // Importando o Prisma Client para interagir com o banco de dados
    const prisma = req.server.prisma;
    const data = cursos_schema_js_1.createCursoSchema.parse(req.body);
    const curso = await prisma.curso.create({ data });
    return reply.status(201).send(curso);
}
async function listarCursos(req, reply) {
    const prisma = req.server.prisma;
    const cursos = await prisma.curso.findMany();
    return reply.send(cursos);
}
//# sourceMappingURL=cursos.controller.js.map