"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const fastify_1 = __importDefault(require("fastify"));
const dotenv_1 = __importDefault(require("dotenv"));
const swagger_1 = __importDefault(require("./plugins/swagger"));
const prisma_1 = __importDefault(require("./plugins/prisma"));
// import do type-provider-zod
const fastify_type_provider_zod_1 = require("fastify-type-provider-zod");
const auth_routes_1 = __importDefault(require("./Routers/auth.routes"));
const professor_routes_1 = __importDefault(require("./Routers/professor.routes"));
const funcionario_routes_1 = __importDefault(require("./Routers/funcionario.routes"));
const usuario_routes_1 = __importDefault(require("./Routers/usuario.routes"));
const permissoes_routes_1 = __importDefault(require("./Routers/permissoes.routes"));
const cursos_routes_1 = __importDefault(require("./Routers/cursos.routes"));
const sumarios_routes_1 = __importDefault(require("./Routers/sumarios.routes"));
const presencas_routes_1 = __importDefault(require("./Routers/presencas.routes"));
const efetividades_routes_1 = __importDefault(require("./Routers/efetividades.routes"));
dotenv_1.default.config();
exports.app = (0, fastify_1.default)({ logger: true })
    // adiciona os compilers do Zod
    .setValidatorCompiler(fastify_type_provider_zod_1.validatorCompiler)
    .setSerializerCompiler(fastify_type_provider_zod_1.serializerCompiler)
    // habilita o TypeProvider que faz converter Zod→JSONSchema
    .withTypeProvider();
// ROTA PADRÃO
exports.app.get('/', async (request, reply) => {
    return {
        message: 'SWCS BACKEND API IS RUNNING',
        status: 'server running',
        docs: '/docs',
        version: '1.0.1',
        endpoints: {
            auth: '/auth',
            professores: '/professores',
            funcionarios: '/funcionarios',
            usuarios: '/usuarios',
            permissoes: '/permissoes',
            cursos: '/cursos',
            sumarios: '/sumarios',
            presencas: '/presencas',
            efetividades: '/efetividades'
        }
    };
});
exports.app.register(prisma_1.default);
exports.app.register(swagger_1.default);
exports.app.register(auth_routes_1.default, { prefix: '/auth' });
exports.app.register(professor_routes_1.default, { prefix: '/professores' });
exports.app.register(funcionario_routes_1.default, { prefix: '/funcionarios' });
exports.app.register(usuario_routes_1.default, { prefix: '/usuarios' });
exports.app.register(permissoes_routes_1.default, { prefix: '/permissoes' });
exports.app.register(cursos_routes_1.default, { prefix: '/cursos' });
exports.app.register(sumarios_routes_1.default, { prefix: '/sumarios' });
exports.app.register(presencas_routes_1.default, { prefix: '/presencas' });
exports.app.register(efetividades_routes_1.default, { prefix: '/efetividades' });
/** Configuração do CORS */
exports.app.addHook('onRequest', (request, reply, done) => {
    reply.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Removido a barra final
    reply.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    reply.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    done();
});
/** Tratamento de erros 404 do Fastify
 Isso é necessário para que o Fastify retorne um erro 404 personalizado
 quando uma rota não for encontrada.
*/
exports.app.setNotFoundHandler((request, reply) => {
    reply.status(404).send({
        statusCode: 404,
        error: 'Not Found',
        message: `Rota ${request.method} ${request.url} não encontrada`,
    });
});
exports.app.setErrorHandler((error, request, reply) => {
    exports.app.log.error(error);
    reply.status(error.statusCode || 500).send({
        statusCode: error.statusCode || 500,
        error: error.name,
        message: error.message || 'Erro interno do servidor',
    });
});
const start = async () => {
    try {
        await exports.app.listen({
            port: 3000,
            host: '0.0.0.0' // Permite conexões de qualquer IP
        });
        console.log(`Servidor está agora ouvindo na rota http://localhost:3000`);
        console.log(`Documentação Swagger disponível em http://localhost:3000/docs`);
    }
    catch (err) {
        exports.app.log.error(err);
        console.error('Erro ao iniciar o servidor:', err);
        if (err instanceof Error) {
            console.error('Mensagem de erro:', err.message);
            console.error('Stack trace:', err.stack);
        }
        else {
            console.error('Erro desconhecido:', err);
        }
        await exports.app.close(); // Aguarda o fechamento do servidor
        process.exit(1);
    }
};
start();
exports.default = exports.app;
//# sourceMappingURL=server.js.map