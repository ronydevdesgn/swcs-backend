# SWCS — Backend API

> **Sistema Web para Controlo de Sumário Universitário**  
> API RESTful construída com Fastify, Prisma e MySQL para gerir professores, funcionários, cursos, sumários, presenças, efetividades e autenticação com JWT.

---

## 🚀 Stack Tecnológica

| Tecnologia | Função |
|---|---|
| **Node.js + TypeScript** | Runtime e tipagem estática |
| **Fastify 5** | Framework HTTP de alta performance |
| **Prisma 5** | ORM para MySQL |
| **MySQL** | Base de dados relacional |
| **Zod** | Validação de schemas (`fastify-type-provider-zod`) |
| **JWT + bcryptjs** | Autenticação e hash de senhas |
| **node-cron** | Agendador de tarefas periódicas |
| **nodemailer** | Envio de emails (ex: recuperação de senha) |
| **jsPDF + autotable** | Geração de relatórios PDF no servidor |
| **Jest + ts-jest** | Testes unitários e de integração |
| **Docker Compose** | Infraestrutura de desenvolvimento local |
| **Swagger UI** | Documentação interativa da API (opcional) |

---

## 📂 Estrutura do Projeto

```
swcs-backend/
├── prisma/
│   ├── schema.prisma        # Modelos e relações da base de dados
│   ├── seed.ts              # Script para popular a BD com dados de teste
│   └── migrations/          # Histórico de migrações
├── src/
│   ├── server.ts            # Ponto de entrada, registo de plugins e rotas
│   ├── scheduler-cron.ts    # Agendador de tarefas com node-cron
│   ├── Routers/             # Definição das rotas por recurso
│   │   ├── auth.routes.ts
│   │   ├── professor.routes.ts
│   │   ├── funcionario.routes.ts
│   │   ├── usuario.routes.ts
│   │   ├── permissoes.routes.ts
│   │   ├── cursos.routes.ts
│   │   ├── sumarios.routes.ts
│   │   ├── presencas.routes.ts
│   │   ├── efetividades.routes.ts
│   │   ├── dashboard.routes.ts
│   │   └── report.routes.ts
│   ├── controllers/         # Lógica de negócio por recurso
│   ├── schemas/             # Schemas Zod para validação de entrada e saída
│   ├── middlewares/         # Autenticação JWT e tratamento de erros
│   ├── plugins/             # Plugins Fastify (Prisma, Swagger)
│   ├── services/            # Camada de serviços (lógica reutilizável)
│   ├── templates/           # Templates de email
│   ├── types/               # Tipos e interfaces TypeScript partilhados
│   ├── utils/               # Utilitários (jwt, hash, etc.)
│   └── tests/               # Testes de integração (Jest)
│       ├── auth.test.ts
│       ├── professor.test.ts
│       ├── funcionario.test.ts
│       ├── presencas.test.ts
│       ├── sumarios.test.ts
│       ├── rbac.test.ts
│       ├── testHelpers.ts
│       ├── env-setup.ts
│       └── setup.ts
```

---

## 🗄️ Modelo de Dados (Prisma Schema)

### Entidades Principais

| Modelo | Descrição |
|---|---|
| `Usuario` | Utilizadores do sistema com tipo (`FUNCIONARIO`, `PROFESSOR`, `SUMARISTA`) |
| `Professor` | Professores com departamento (`INFORMATICA`, `OUTROS`) e carga horária |
| `Funcionario` | Funcionários com cargo (`SUMARISTA`, `SECRETARIO`, `ADMINISTRATIVO`, `OUTROS`) |
| `Curso` | Cursos académicos |
| `Sumario` | Registo de aulas dadas por professor e curso |
| `Presenca` | Controlo de presenças e faltas (`PRESENTE`, `FALTA`) |
| `Efetividade` | Registo de horas trabalhadas por professor/curso |
| `Permissao` / `UsuarioPermissao` | Sistema de permissões granulares por utilizador |
| `RefreshToken` | Tokens de renovação de sessão |
| `PasswordReset` | Tokens para recuperação de senha |

---

## ⚙️ Pré-requisitos

- Node.js >= 18
- npm
- Docker e Docker Compose (recomendado para a BD em desenvolvimento)

---

## 🛠️ Instalação e Configuração

### 1. Clonar o repositório

```bash
git clone https://github.com/ronydevdesgn/swcs-backend.git
cd swcs-backend
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

```bash
cp .env.example .env
```

Editar o `.env` com os valores corretos:

```env
DATABASE_URL="mysql://user:password@localhost:3306/swcs_db"
JWT_SECRET="sua_chave_secreta_forte"
REFRESH_TOKEN_SECRET="outra_chave_secreta_forte"
NODE_ENV="development"
SWAGGER_ENABLED="true"          # opcional — ativa a documentação Swagger
TEST_DATABASE_URL="mysql://..."  # opcional — BD separada para testes
EMAIL_HOST="smtp.example.com"   # opcional — para envio de emails
EMAIL_PORT=587
EMAIL_USER="..."
EMAIL_PASS="..."
```

### 4. Iniciar a base de dados com Docker

```bash
npm run dev:docker:up
```

### 5. Aplicar migrações e popular a BD

```bash
npm run db:migrate
npm run db:generate
npm run db:seed
```

---

## ▶️ Executar o Projeto

### Desenvolvimento (servidor + scheduler em paralelo)

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3333`.

### Produção

```bash
npm run build
npm start
```

---

## 📡 Endpoints da API

O servidor expõe os seguintes prefixos de rotas:

| Prefixo | Recurso |
|---|---|
| `/auth` | Login, Refresh Token, Logout, Reset de Senha |
| `/professores` | CRUD de Professores |
| `/funcionarios` | CRUD de Funcionários |
| `/usuarios` | CRUD de Utilizadores |
| `/permissoes` | Gestão de Permissões |
| `/cursos` | CRUD de Cursos |
| `/sumarios` | CRUD de Sumários |
| `/presencas` | Controlo de Presenças (incluindo registo em lote) |
| `/efetividades` | Registo de Efetividades e filtros por período |
| `/dashboard` | Estatísticas gerais do sistema |
| `/reports` | Geração de relatórios em PDF |

### Autenticação — Detalhes

```
POST /auth/login           → Retorna accessToken + refreshToken
POST /auth/refresh         → Renova o accessToken
POST /auth/logout          → Invalida o refreshToken
POST /auth/forgot-password → Envia email de recuperação
POST /auth/reset-password  → Redefine a senha com token
```

---

## 🧪 Testes

Os testes são de integração e utilizam a instância real do servidor Fastify.

```bash
# Executar todos os testes
npm test

# Modo watch (durante desenvolvimento)
npm run test:watch

# Com relatório de cobertura
npm run test:cov
```

**Suites de teste disponíveis:**
- `auth.test.ts` — Login e rejeição de credenciais inválidas
- `professor.test.ts` — CRUD de professores
- `funcionario.test.ts` — CRUD de funcionários
- `presencas.test.ts` — Registo e gestão de presenças
- `sumarios.test.ts` — Criação e gestão de sumários
- `rbac.test.ts` — Controlo de acesso baseado em roles

---

## 📖 Documentação Swagger

Quando `SWAGGER_ENABLED=true`, a documentação interativa está disponível em:

- **Swagger UI:** `http://localhost:3333/docs`
- **OpenAPI JSON:** `http://localhost:3333/docs/json`

---

## 🔐 Boas Práticas de Segurança

- Utilize segredos JWT robustos e diferentes para `JWT_SECRET` e `REFRESH_TOKEN_SECRET`.
- Em produção, configure HTTPS via proxy reverso (nginx, Caddy, etc.).
- Reveja os `allowedOrigins` no CORS em `src/server.ts`.
- Remova os dados do seed antes de ir para produção.
- Audite as dependências regularmente com `npm audit`.

---

## 🤝 Contribuição

1. Fork → branch `feature/nome-da-feature`
2. Escreva testes para o código novo
3. `git commit -m "feat: descrição clara"`
4. Abra um Pull Request com descrição detalhada

---

## 📄 Licença

MIT — ver [LICENSE](LICENSE).

---

## 👤 Autor

<a href="https://github.com/ronydevdesgn">
  <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/82418215?v=4" width="80px;" alt="ronydevdesgn"/>
  <br />
  <b>Rodivânio Alberto Da Costa</b>
</a>
