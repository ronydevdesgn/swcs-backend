"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarUsuario = criarUsuario;
exports.listarUsuarios = listarUsuarios;
exports.atualizarUsuario = atualizarUsuario;
exports.deletarUsuario = deletarUsuario;
const usuario_schema_1 = require("../schemas/usuario.schema");
const hash_1 = require("../utils/hash");
async function criarUsuario(req, reply) {
    const prisma = req.server.prisma;
    const data = usuario_schema_1.createUsuarioSchema.parse(req.body);
    const SenhaHash = await (0, hash_1.hashSenha)(data.Senha);
    const { Senha, Tipo, ...restData } = data; // Destructuring to remove Senha and Tipo from data
    const usuario = await prisma.usuario.create({
        data: {
            ...restData,
            SenhaHash,
            Tipo: Tipo.toUpperCase() // Restoring Tipo to ensure correct user Type
        }
    });
    return reply.status(201).send(usuario);
}
async function listarUsuarios(req, reply) {
    const prisma = req.server.prisma;
    const data = usuario_schema_1.getUsuarioSchema.parse(req.query); // Uncommented to parse query
    const usuarios = await prisma.usuario.findMany({
        include: { Permissoes: true },
        where: { Tipo: data.Tipo }
    });
    return reply.send(usuarios);
}
async function atualizarUsuario(req, reply) {
    const prisma = req.server.prisma;
    const id = Number(req.params.id);
    const data = usuario_schema_1.updateUsuarioSchema.parse(req.body);
    const SenhaHash = data.Senha ? await (0, hash_1.hashSenha)(data.Senha) : undefined;
    const usuario = await prisma.usuario.update({
        where: { UsuarioID: id },
        data: { ...data, SenhaHash }
    });
    return reply.send(usuario);
}
async function deletarUsuario(req, reply) {
    const prisma = req.server.prisma;
    const data = usuario_schema_1.deleteUsuarioSchema.parse(req.body);
    const id = Number(req.params.id);
    const usuario = await prisma.usuario.findUnique({ where: { UsuarioID: id } });
    if (!usuario) {
        return reply.status(404).send({ message: 'Usuário não encontrado' });
    }
    console.log(`Deleting user with ID: ${id}`);
    await prisma.usuario.delete({ where: { UsuarioID: id } });
    return reply.status(204).send();
}
//# sourceMappingURL=usuario.controller.js.map