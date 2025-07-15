# SWCS - Sistema de Gestão Escolar (Backend)

## Descrição do Projeto

Sistema de gestão escolar focado no controle e monitoramento das atividades dos professores, incluindo gestão de sumários, presenças e conformidade com o programa curricular planejado.

## Tecnologias Utilizadas

Neste projecto, para construção do Back-End, foram utilizadas as seguintes tecnologias:

- **Fastify**: Framework web rápido e eficiente
- **Prisma**: ORM moderno com controle de acesso
- **Zod**: Validação de schemas com TypeScript
- **JWT**: Autenticação e autorização
- **Swagger**: Documentação da API
- **Jest**: Framework de testes
- **TypeScript**: Linguagem de programação tipada

## Estrutura do Projeto

```
├── src
│   ├── routes
│   │   ├── auth.routes.ts
│   │   ├── professor.routes.ts
│   │   ├── funcionario.routes.ts
│   │   ├── usuario.routes.ts
│   │   ├── permissoes.routes.ts
│   │   ├── cursos.routes.ts
│   │   ├── sumarios.routes.ts
│   │   ├── presencas.routes.ts
│   │   └── efetividades.routes.ts
│   ├── controllers
│   │   ├── auth.controller.ts
│   │   ├── professor.controller.ts
│   │   ├── funcionario.controller.ts
│   │   ├── usuario.controller.ts
│   │   ├── permissoes.controller.ts
│   │   ├── cursos.controller.ts
│   │   ├── sumarios.controller.ts
│   │   ├── presencas.controller.ts
│   │   └── efetividades.controller.ts
│   ├── schemas
│   │   ├── auth.schema.ts
│   │   ├── professor.schema.ts
│   │   ├── funcionario.schema.ts
│   │   ├── usuario.schema.ts
│   │   ├── permissoes.schema.ts
│   │   ├── cursos.schema.ts
│   │   ├── sumarios.schema.ts
│   │   ├── presencas.schema.ts
│   │   └── efetividades.schema.ts
│   ├── middlewares
│   │   └── authMiddleware.ts
│   ├── plugins
│   │   ├── prisma.ts
│   │   └── swagger.ts
│   ├── utils
│   │   ├── jwt.ts
│   │   └── hash.ts
│   ├── tests
│   │   ├── auth.test.ts
│   │   ├── funcionario.test.ts
│   │   ├── usuario.test.ts
│   │   ├── professor.test.ts
│   │   ├── permissoes.test.ts
│   │   ├── cursos.test.ts
│   │   ├── sumarios.test.ts
│   │   ├── presencas.test.ts
│   │   └── efetividades.test.ts
│   └── server.ts
```

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
DATABASE_URL="mysql://user:password@localhost:5432/swcs-database"
JWT_SECRET="seu-segredo-aqui"
REFRESH_TOKEN_SECRET="seu-refresh-token-segredo"
```

4. **Configure o banco de dados**

```bash
npx prisma generate
npx prisma migrate dev
npx prisma db seed # opcional
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

- Swagger UI: http://localhost:3000/docs
- JSON Schema: http://localhost:3000/docs/json

## Endpoints Principais

### Autenticação

- POST /auth/login - Login de usuário
- POST /auth/refresh - Refresh token
- POST /auth/logout - Logout
- POST /auth/reset-password - Solicitar reset de senha

### Professores

- GET /professores - Listar professores
- POST /professores - Cadastrar professor
- GET /professores/:id - Obter professor
- PUT /professores/:id - Atualizar professor

### Cursos

- GET /cursos - Listar cursos
- POST /cursos - Criar curso
- GET /cursos/:id - Obter curso
- PUT /cursos/:id - Atualizar curso

### Sumários e Presenças

- GET /sumarios - Listar sumários
- POST /sumarios - Criar sumário
- POST /presencas/batch - Registrar presenças em lote
- GET /efetividades/stats - Estatísticas de efetividade

## Tratamento de Erros

O sistema utiliza uma estrutura padronizada de erros através da classe AppError:

```typescript
{
  code: AppErrorCode; // Código do erro
  message: string; // Mensagem descritiva
  statusCode: number; // Código HTTP
}
```

## Testes

Os testes unitários estão localizados em `/tests`.
Execute os testes com:

```bash
npm test
```

### Cobertura de Testes

- ✅ Auth
- ✅ Usuários
- ✅ Professores
- ✅ Funcionários
- ✅ Cursos
- ✅ Sumários
- ✅ Presenças
- ✅ Efetividades

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NomeDaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NomeDaFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

### Autor

<a href="https://github.com/ronydevdesgn">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/82418215?v=4" width="100px;" alt=""/>

### Observação

Este projecto é apenas um exemplo de como criar uma API RESTful com Fastify, Prisma, Zod, JWT e Swagger. Ele não é um projeto completo e não deve ser usado em um ambiente de produção sem modificações.
