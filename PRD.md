## SWCS Backend — Documento de Requisitos do Produto (PRD)

> Versão: 1.0.1 | Última atualização: 2026-03-15

---

### 1) Visão Geral

Sistema web para gestão académica focado no controlo de sumários, presenças e efetividades de professores, com autenticação JWT, autorização baseada em permissões e documentação via Swagger.

---

### 2) Objetivos

- Facilitar o registo e a consulta de sumários por curso e professor
- Controlar presenças e horas efetivas trabalhadas
- Garantir acesso seguro com perfis (`PROFESSOR`, `FUNCIONARIO`) e permissões granulares

---

### 3) Tecnologias e Ferramentas

| Ferramenta | Versão/Detalhe |
|---|---|
| **Runtime** | Node.js + TypeScript |
| **Framework** | Fastify 5 |
| **ORM** | Prisma 6 + PostgreSQL (`pg` adapter) |
| **Validação** | Zod 3 + `fastify-type-provider-zod` |
| **Autenticação** | `jsonwebtoken` + `bcryptjs` |
| **Documentação** | `@fastify/swagger` + `@fastify/swagger-ui` |
| **CORS** | `@fastify/cors` |
| **Testes** | Jest + ts-jest |
| **Build** | tsup (ESM) + tsx (dev) |
| **Relatórios** | jspdf + jspdf-autotable (instalado, não exposto) |
| **Email** | nodemailer (instalado, stub — não funcional) |
| **Agendamento** | node-cron (`scheduler-cron.ts`) |

---

### 4) Arquitetura e Componentes

```
src/
├── Routers/          ← Definição de rotas + schemas Zod (11 ficheiros)
├── controllers/      ← Lógica de negócio (11 ficheiros)
├── schemas/          ← Zod schemas de request/response (11 ficheiros)
├── middlewares/      ← authMiddleware.ts, errorHandler.ts
├── plugins/          ← prisma.ts (singleton), swagger.ts (OpenAPI)
├── services/         ← email.service.ts (stub)
├── types/            ← tipos TS partilhados
├── utils/            ← jwt.ts, hash.ts
├── tests/            ← Jest (auth + utils; outros domínios por cobrir)
├── consts/           ← constantes
├── templates/        ← templates de email (HTML)
├── scheduler-cron.ts ← jobs cron
└── server.ts         ← bootstrap (plugins, rotas, error handler)
```

**Plugins:**
- `prisma.ts`: Singleton `PrismaClient`, `decorate('prisma', ...)`, lifecycle `onClose`
- `swagger.ts`: OpenAPI 3, tags por domínio, UI em `/docs`; ativado via `SWAGGER_ENABLED=true`

**Middleware:**
- `authMiddleware.ts`: valida Bearer JWT, popula `req.user` com `{ id, tipo, permissions }`

**Error handler:**
- `errorHandler.ts`: captura `AppError` (status, mensagem) e erros Zod (400), 404 e 500 genéricos

---

### 5) Modelo de Dados (Prisma + PostgreSQL)

**Enums:**
- `Estado`: `PRESENTE | FALTA`
- `TipoUsuario`: `FUNCIONARIO | PROFESSOR | SUMARISTA`
- `Departamento`: `INFORMATICA | OUTROS`
- `Cargo`: `SUMARISTA | SECRETARIO | ADMINISTRATIVO | OUTROS`

**Modelos:**

| Modelo | Campos principais |
|---|---|
| `Usuario` | `usuarioId`, `nome`, `email`, `senhaHash`, `tipo` |
| `Professor` | `professorId`, `nome`, `departamento`, `cargaHoraria`, `usuarioId?` |
| `Funcionario` | `funcionarioId`, `nome`, `email`, `cargo`, `usuarioId?` |
| `Curso` | `cursoId`, `nome`, `descricao` |
| `ProfessorCurso` | pivot N:N professor ↔ curso |
| `Sumario` | `sumarioId`, `data`, `conteudo`, `cursoId`, `professorId` |
| `Presenca` | `presencaId`, `data`, `estado`, `professorId`, `cursoId` |
| `Efetividade` | `efetividadeId`, `data`, `horasTrabalhadas`, `professorId`, `cursoId` |
| `Permissao` | `permissaoId`, `descricao` |
| `UsuarioPermissao` | pivot N:N usuario ↔ permissao |
| `RefreshToken` | `tokenId`, `token`, `usuarioId`, `expiresAt` |
| `PasswordReset` | `passwordResetId`, `token`, `usuarioId`, `expiresAt`, `used` |

> **Nota:** campos internos da DB usam PascalCase via `@map()`. O código e a API usam sempre **camelCase**.

---

### 6) Contrato da API — Convenções

- **Todos os payloads (request e response) usam camelCase** sem exceção
- Autenticação via `Authorization: Bearer <accessToken>` em todas as rotas exceto `/auth/*`
- Erros retornam `{ statusCode, error, message, details? }`
- Respostas de lista incluem `{ data: [...], meta: { total, ... } }`
- Datas em formato **ISO 8601** (`YYYY-MM-DDTHH:mm:ss.sssZ`)

---

### 7) Regras de Negócio Principais

- **Auth:** login exige `email + senha`; `tipo` é opcional (detetado automaticamente). Retorna `accessToken` (1d) + `refreshToken` (7d, persistido). Refresh por rotação (apaga o anterior). Logout invalida todos os refresh tokens do utilizador.
- **Professores:** email único. `departamento` deve ser enum válido. `cargaHoraria` entre 1 e 40h.
- **Funcionários:** email único. `cargo` deve ser enum válido.
- **Cursos:** nome único. `professorId` deve existir. Associação em `ProfessorCurso` dentro de transação.
- **Sumários:** `conteudo` entre 3 e 2000 chars. `data` não pode ser futura. Professor deve estar associado ao curso. Um sumário por curso/data.
- **Presenças:** `data` não pode ser futura. Um registo por professor/data. Suporte a criação em lote (`batch`).
- **Efetividades:** `data` não pode ser futura. Um registo por professor/data. `horasTrabalhadas` não pode exceder `cargaHoraria` do professor.

---

### 8) Endpoints (alto nível)

| Prefixo | Rotas disponíveis |
|---|---|
| `/auth` | `POST /login`, `POST /refresh`, `POST /logout`, `POST /forgot-password`, `POST /reset-password` |
| `/professores` | `GET /`, `POST /`, `GET /:id`, `PUT /:id` |
| `/funcionarios` | `GET /`, `POST /`, `GET /:id`, `PUT /:id` |
| `/usuarios` | `GET /`, `GET /:id`, `PUT /:id`, `PUT /:id/senha` |
| `/permissoes` | `GET /`, `POST /`, `GET /usuario/:id`, `POST /atribuir` |
| `/cursos` | `GET /`, `POST /`, `GET /:id`, `PUT /:id`, `DELETE /:id`, `GET /departamento` |
| `/sumarios` | `GET /`, `POST /`, `GET /:id`, `PUT /:id`, `DELETE /:id` |
| `/presencas` | `GET /`, `POST /`, `GET /:id`, `PUT /:id`, `DELETE /:id`, `GET /professor/:id`, `POST /batch` |
| `/efetividades` | `GET /`, `POST /`, `GET /:id`, `PUT /:id`, `DELETE /:id`, `GET /periodo`, `GET /professor/:id` |
| `/dashboard` | `GET /stats` |
| `/reports` | `GET /presencas-por-mes` |

> Consultar `readme-endpoint-backend.md` ou Swagger UI (`/docs`) para o contrato completo.

---

### 9) Setup e Execução

**Variáveis de ambiente (`.env`):**
```env
DATABASE_URL="postgresql://user:password@localhost:5432/swcs_database"
JWT_SECRET="<segredo-access-token>"
REFRESH_TOKEN_SECRET="<segredo-refresh-token>"   # TODO: separar do JWT_SECRET
PORT=3333
SWAGGER_ENABLED=false
```

**Comandos:**
```bash
npm install
npm run db:generate      # gera Prisma client
npm run db:migrate       # aplica migrações
npm run db:seed          # seed inicial (obrigatório antes dos testes)
npm run dev              # servidor dev (tsx watch) + scheduler
npm run build && npm start  # produção
npm test                 # jest
```

---

### 10) Status Atual

**✅ Implementado:**
- Autenticação completa (login, refresh, logout, forgot/reset password)
- CRUD completo: Professores, Funcionários, Usuários, Cursos, Sumários, Presenças, Efetividades, Permissões
- Todas as validações de regras de negócio via Zod
- Estatísticas: presenças por estado, efetividades por período/professor
- Swagger completo + integração Zod → OpenAPI
- Seed com dados iniciais
- Docker Compose para a base de dados

**⚠️ Parcialmente implementado:**
- Testes: apenas auth + utils; 9 domínios sem cobertura
- Email: template HTML existe em `src/templates/`, `nodemailer` instalado, mas `email.service.ts` é stub
- RBAC: permissões carregadas em `req.user.permissions` mas não verificadas por rota

**❌ Por implementar:**
- `REFRESH_TOKEN_SECRET` separado do `JWT_SECRET`
- Guards RBAC por rota (`requirePermission(req, 'PERM')`)
- Endpoint `/health` (healthcheck)
- Exportação PDF/Excel via as libs já instaladas

---

### 11) Riscos e Pontos de Atenção

| Risco | Severidade | Mitigação |
|---|---|---|
| JWT_SECRET único para access + refresh | 🔴 Alta | Adicionar `REFRESH_TOKEN_SECRET` ao `.env` e `utils/jwt.ts` |
| RBAC não aplicado por rota | 🟠 Média | Implementar helper `requirePermission()` |
| Email service é stub | 🟠 Média | Integrar Nodemailer com template existente |
| CORS fixo em `localhost:5173` | 🟡 Baixa | Ler `ALLOWED_ORIGINS` do `.env` |
| Cobertura de testes baixa | 🟡 Baixa | Expandir suite por domínio |

---

### 12) Próximas Tarefas (priorizadas)

**Fase 1 — Segurança:**
1. Separar `REFRESH_TOKEN_SECRET` em `utils/jwt.ts` + `.env`
2. Implementar RBAC por rota/ação
3. Ativar email real via Nodemailer
4. Parametrizar CORS por `ALLOWED_ORIGINS`

**Fase 2 — Qualidade:**
5. Expandir testes: cursos, sumários, presenças, efetividades, permissões
6. Adicionar `/health` endpoint
7. Logging com `requestId` por pedido

**Fase 3 — Produto:**
8. Exportação PDF/Excel via endpoints REST (libs já instaladas)
9. Regras de janela de edição de sumário/presença
10. Relatórios consolidados por período/curso/departamento
