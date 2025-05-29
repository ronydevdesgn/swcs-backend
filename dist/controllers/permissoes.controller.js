"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarPermissao = criarPermissao;
exports.listarPermissoes = listarPermissoes;
const permissoes_schema_js_1 = require("../schemas/permissoes.schema.js");
async function criarPermissao(req, reply) {
    const prisma = req.server.prisma;
    // Verifica se o usuário tem permissão para criar permissões
    const data = permissoes_schema_js_1.createPermissaoSchema.parse(req.body);
    const permissao = await prisma.permissao.create({ data });
    return reply.status(201).send(permissao);
}
async function listarPermissoes(req, reply) {
    const prisma = req.server.prisma;
    const permissoes = await prisma.permissao.findMany();
    return reply.send(permissoes);
}
//# sourceMappingURL=permissoes.controller.js.map