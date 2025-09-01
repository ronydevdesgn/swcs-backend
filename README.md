# SWCS — Sistema de Gestão Escolar (Backend)

## Descrição

API backend para gestão escolar — controle de professores, cursos, sumários, presenças e efetividades. Projetado com Fastify, Prisma e Zod para validação e testes automatizados com Jest.

## Status

Projeto de exemplo / não pronto para produção sem ajustes de segurança e configuração.

## Principais tecnologias

- Fastify (servidor) — [`app`](src/server.ts)
- Prisma (ORM) — [src/plugins/prisma.ts](src/plugins/prisma.ts)
- Zod (validação de schemas)
- JWT (autenticação) — [src/utils/jwt.ts](src/utils/jwt.ts)
- Swagger (documentação) — [src/plugins/swagger.ts](src/plugins/swagger.ts)
- Jest (testes)

## Estrutura resumida

- Rotas: [src/Routers](src/Routers)
- Controladores: [src/controllers](src/controllers)
- Schemas (Zod/JSON Schema): [src/schemas](src/schemas)
- Middlewares: [src/middlewares](src/middlewares)
- Plugins: [src/plugins](src/plugins)
- Utilitários: [src/utils](src/utils)
- Testes: [src/tests](src/tests)

## Pré-requisitos

- Node.js (>= 18 recomendado)
- npm
- Banco de dados compatível (CONFIGURAR via DATABASE_URL)

## Instalação

1. Clone:
   git clone https://github.com/seu-usuario/swcs-backend.git
   cd swcs-backend

2. Instale dependências:
   npm install

## Configuração de ambiente

Copie e ajuste variáveis:
cp .env.example .env

Variáveis essenciais:

- DATABASE_URL (prisma)
- JWT_SECRET
- REFRESH_TOKEN_SECRET
  Outras variáveis opcionais: SWAGGER_ENABLED, TEST_DATABASE_URL, NODE_ENV.

## Banco de dados

Gerar client e aplicar migrations:
npx prisma generate
npx prisma migrate dev

(Seed opcional)
npx prisma db seed

## Executando

- Desenvolvimento:
  npm run dev
- Produção:
  npm run build
  npm start

Ao iniciar, o servidor expõe `http://localhost:3333` por padrão. A constante exportada [`app`](src/server.ts) é usada nos testes de integração.

## Documentação da API

- Swagger UI: http://localhost:3333/docs (se habilitado via SWAGGER_ENABLED)
- JSON OpenAPI: http://localhost:3333/docs/json

## Principais endpoints

Autenticação

- POST /auth/login
- POST /auth/refresh
- POST /auth/logout
- POST /auth/reset-password

Professores

- GET /professores
- POST /professores
- GET /professores/:id
- PUT /professores/:id

Cursos

- GET /cursos
- POST /cursos — cria curso via controller [`criarCurso`](src/controllers/cursos.controller.ts)
- GET /cursos/:id
- PUT /cursos/:id

Sumários

- GET /sumarios
- POST /sumarios
- GET /sumarios/:id
- PUT /sumarios/:id
- DELETE /sumarios/:id

Presenças

- POST /presencas
- POST /presencas/batch
- GET /presencas
- GET /presencas/:id
- GET /presencas/professor/:id
- PUT /presencas/:id
- DELETE /presencas/:id
- Gerenciamento em controller: [`registrarPresenca`](src/controllers/presencas.controller.ts)

Efetividades

- POST /efetividades
- GET /efetividades
- GET /efetividades/:id
- PUT /efetividades/:id
- DELETE /efetividades/:id
- GET /efetividades/periodo (filtros e estatísticas)

## Validação e normalizações

- Os endpoints usam Zod para validação nos schemas em [src/schemas](src/schemas).
- O servidor normaliza campos de entrada (por exemplo, campos em caixa baixa → propriedades do modelo) em [src/server.ts].

## Tratamento de erros

O projeto centraliza erros com uma estrutura tipo AppError (código, mensagem, status). O Fastify também tem handler de erro global em [src/server.ts]. Respostas padronizadas ajudam a diferenciar erros de validação, conflito, não encontrado e servidor.

## Testes

- Testes unitários/integrados: [src/tests](src/tests)
- Configuração Jest: [jest.config.js](jest.config.js)
- Executar:
  npm test

## Práticas de segurança / produção

- Definir segredos robustos (JWT_SECRET / REFRESH_TOKEN_SECRET) no ambiente.
- Habilitar HTTPS/Proxy em produção.
- Revisar CORS e allowed origins em [src/server.ts].
- Auditar dependências e remover dados de seed público antes de produção.

## Notas e recomendações

- A documentação Swagger pode ser habilitada via variável SWAGGER_ENABLED.
- Ajustar políticas de log e níveis para ambientes de produção (Fastify logger).
- Revisar e endurecer a geração e verificação de tokens em [src/utils/jwt.ts].

## Contribuição

1. Fork → nova branch feature/
2. Commit claro e testes
3. Pull request com descrição

## Licença

MIT — ver [LICENSE](LICENSE).

## Autor

<a href="https://github.com/ronydevdesgn">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/82418215?v=4" width="100px;" alt=""/>
 </a>
