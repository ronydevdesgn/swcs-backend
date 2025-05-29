"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashSenha = hashSenha;
exports.compararSenha = compararSenha;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
async function hashSenha(senha) {
    return await bcryptjs_1.default.hash(senha, 10);
}
async function compararSenha(senha, hash) {
    return await bcryptjs_1.default.compare(senha, hash);
}
//# sourceMappingURL=hash.js.map