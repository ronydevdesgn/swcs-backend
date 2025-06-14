# SWCS - Sistema de Gestão Escolar (Backend)

## Descrição do Projeto

Sistema de gestão escolar focado no controle e monitoramento das atividades dos professores, incluindo gestão de sumários, presenças e conformidade com o programa curricular planejado.

## Tecnologias Utilizadas

<p style="font-style:justify;">Neste projecto ou seja para contrução do <b>Back-End</b> usou-se as seguintes tecnologias:</p>

- **Fastify**: Framework web rápido e eficiente
- **Prisma**: ORM moderno com controle de acesso
- **Zod**: Validação de schemas com TypeScript
- **JWT**: Autenticação e autorização
- **Swagger**: Documentação da API
- **Jest**: Framework de testes
- **TypeScript**: Linguagem de programação tipada

## Estrutura do Projeto

├── <b>src</b><br>
│ ├── <b>routes</b><br>
│ │ ├── auth.routes.ts<br>
│ │ ├── professor.routes.ts<br>
│ │ ├── funcionario.routes.ts<br>
│ │ ├── usuario.routes.ts<br>
│ │ ├── permissoes.routes.ts<br>
│ │ ├── cursos.routes.ts<br>
│ │ ├── sumarios.routes.ts<br>
│ │ ├── presencas.routes.ts<br>
│ │ └── efetividades.routes.ts<br>
│ ├── <b>controllers</b><br>
│ │ ├── auth.controller.ts<br>
│ │ ├── professor.controller.ts<br>
│ │ ├── funcionario.controller.ts<br>
│ │ ├── usuario.controller.ts<br>
│ │ ├── permissoes.controller.ts<br>
│ │ ├── cursos.controller.ts<br>
│ │ ├── sumarios.controller.ts<br>
│ │ ├── presencas.controller.ts<br>
│ │ └── efetividades.controller.ts<br>
│ ├── <b>schemas</b><br>
│ │ ├── auth.schema.ts<br>
│ │ ├── professor.schema.ts<br>
│ │ ├── funcionario.schema.ts<br>
│ │ ├── usuario.schema.ts<br>
│ │ ├── permissoes.schema.ts<br>
│ │ ├── cursos.schema.ts<br>
│ │ ├── sumarios.schema.ts<br>
│ │ ├── presencas.schema.ts<br>
│ │ └── efetividades.schema.ts<br>
│ ├── <b>middlewares</b><br>
│ │ └── authMiddleware.ts<br>
│ ├── <b>plugins</b><br>
│ │ ├── prisma.ts<br>
│ │ └── swagger.ts<br>
│ ├── <b>utils</b><br>
│ │ ├── jwt.ts<br>
│ │ └── hash.ts<br>
│ ├── <b>tests</b><br>
│ │ ├── auth.test.ts<br>
│ │ ├── funcionario.test.ts<br>
│ │ ├── usuario.test.ts<br>
│ │ ├── professor.test.ts<br>
│ │ ├── permissoes.test.ts<br>
│ │ ├── cursos.test.ts<br>
│ │ ├── sumarios.test.ts<br>
│ │ ├── presencas.test.ts<br>
│ │ └── efetividades.test.ts<br>
│ └── <b>server.ts</b><br>

</p>

## Como executar o projeto

### Pré-requisitos

- Node.js
- npm
- Docker (opcional)
- Docker Compose (opcional)

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/swcs-backend.git
cd swcs-backend
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```
DATABASE_URL="postgresql://user:password@localhost:5432/swcs"
JWT_SECRET="seu-segredo-aqui"
REFRESH_TOKEN_SECRET="seu-refresh-token-segredo"
```

4. **Configure o banco de dados**

```bash
# Gere o cliente Prisma
npx prisma generate

# Execute as migrações
npx prisma migrate dev

# (Opcional) Popule o banco com dados iniciais
npx prisma db seed
```

5. **Execute o projeto**

```bash
# Desenvolvimento
npm run dev

# Produção
npm run build
npm start
```

## Documentação

A documentação da API está disponível em:

- Swagger UI: `http://localhost:3000/docs`
- JSON Schema: `http://localhost:3000/docs/json`

## Endpoints Principais

### Autenticação

- `POST /auth/login` - Login de usuário
- `POST /auth/refresh` - Refresh token
- `POST /auth/logout` - Logout
- `POST /auth/reset-password` - Solicitar reset de senha

### Professores

- `GET /professores` - Listar professores
- `POST /professores` - Cadastrar professor
- `GET /professores/:id` - Obter professor
- `PUT /professores/:id` - Atualizar professor

### Cursos

- `GET /cursos` - Listar cursos
- `POST /cursos` - Criar curso
- `GET /cursos/:id` - Obter curso
- `PUT /cursos/:id` - Atualizar curso

### Sumários e Presenças

- `GET /sumarios` - Listar sumários
- `POST /sumarios` - Criar sumário
- `POST /presencas/batch` - Registrar presenças em lote
- `GET /efetividades/stats` - Estatísticas de efetividade

## Tratamento de Erros

O sistema utiliza uma estrutura padronizada de erros através da classe `AppError`:

```typescript
{
  code: AppErrorCode; // Código do erro
  message: string; // Mensagem descritiva
  statusCode: number; // Código HTTP
}
```

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
A API possui as seguintes rotas:

- POST /login: Autentica um usuário e retorna um token JWT.
- POST /professor: Cria um novo professor.
- GET /professor: Retorna todos os professores.
- GET /professor/:id: Retorna um professor específico.
- PUT /professor/:id: Atualiza um professor específico.
- DELETE /profess
  or/:id: Remove um professor específico.
- POST /funcionario
- GET /funcionario
- GET /funcionario/:id
- PUT /funcionario/:id
- DELETE /funcionario/:id
- POST /usuario
- GET /usuario
- GET /usuario/:id
- PUT /usuario/:id
- DELETE /usuario/:id
- POST /permissoes
- GET /permissoes
- GET /permissoes/:id
- PUT /permissoes/:id
- DELETE /permissoes/:id
- POST /cursos
- GET /cursos
- GET /cursos/:id
- PUT /cursos/:id
- DELETE /cursos/:id
- POST /sumarios
- GET /sumarios
- GET /sumarios/:id
- PUT /sumarios/:id
- DELETE /sumarios/:id
- POST /presencas
- GET /presencas
- GET /presencas
- GET /presencas/:id
- PUT /presencas/:id
- DELETE /presencas/:id
- POST /efetividades
- GET /efetividades
- GET /efetividades/:id
- PUT /efetividades/:id
- DELETE /efetividades/:id

## Documentação da API

A documentação da API está disponível em http://localhost:3000/docs.

## Testes

Os testes unitários estão localizados em /tests.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projecto está licenciado sob a licença MIT.

### Autor

<a href="https://github.com/ronydevdesgn">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/82418215?v=4" width="100px;" alt=""/>

### OBSERVAÇÃO

 <p>Este projecto é apenas um exemplo de como criar uma API RESTful com Fastify, Prisma, Zod, JWT e Swagger. Ele não é um projeto completo e não deve ser usado em um ambiente de produção sem modificações.</p>
