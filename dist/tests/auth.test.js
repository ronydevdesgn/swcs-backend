"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const server_js_1 = require("../server.js");
// import request from 'supertest';
describe('Auth Routes', () => {
    let server;
    /**
    * Armazena o token de autenticação para uso em todos os casos de teste.
    * Usado para persistir credenciais de login entre diferentes cenários de teste.
    */
    let token;
    beforeAll(async () => {
        await server_js_1.app.ready();
        server = (0, fastify_1.default)();
        await server.register(server_js_1.app);
        await server.ready();
    });
    afterAll(() => server.close());
    it('should login with valid credentials', async () => {
        // Assumindo que já exista um usuário seed
        const res = await server.inject({
            method: 'POST',
            url: '/auth/login',
            payload: { email: 'admin@teste.com', senha: 'senha123' }
        });
        expect(res.statusCode).toBe(200);
        expect(JSON.parse(res.payload)).toHaveProperty('token');
    });
    it('should reject invalid credentials', async () => {
        const res = await server.inject({
            method: 'POST',
            url: '/auth/login',
            payload: { email: 'naoexistente@teste.com', senha: 'errada' }
        });
        expect(res.statusCode).toBe(401);
    });
});
//# sourceMappingURL=auth.test.js.map