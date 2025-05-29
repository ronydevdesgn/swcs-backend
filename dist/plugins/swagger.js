"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
exports.default = (0, fastify_plugin_1.default)(async (fastify) => {
    await fastify.register(swagger_1.default, {
        swagger: {
            info: {
                title: 'SWCS de Professores e Funcionários',
                description: 'API documentada com Swagger',
                version: '1.0.0',
            },
            tags: [
                { name: 'auth' },
                { name: 'usuarios' },
                { name: 'professores' },
                { name: 'funcionarios' },
                { name: 'permissoes' },
                { name: 'cursos' },
                { name: 'sumarios' },
                { name: 'presencas' },
                { name: 'efetividades' }
            ],
            host: 'localhost:3306',
            schemes: ['http'],
            consumes: ['application/json'],
            produces: ['application/json'],
        },
    });
    await fastify.register(swagger_ui_1.default, {
        routePrefix: '/docs',
        uiConfig: {
            docExpansion: 'full'
        },
    });
    fastify.ready().then(() => {
        fastify.swagger();
    });
});
//# sourceMappingURL=swagger.js.map