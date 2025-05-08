# Project Back-End for server SWCS
> <b>PROJECT DESCRIPTION</b> <br/>
<p>Este é uma parte de um projecto de gestão escolar propriamente para o controlo dos professores ou seja do sumário, suas presenças e se realmente é dado o que é programado como sumário.</p>

## Tecnologias e estrutura do projecto (apenas o backend).

<p style="font-style:justify;">Neste projecto ou seja para contrução do <b>Back-End</b> usou-se as seguintes tecnologias:</p>

- Fastify,
- Prisma com controle de acesso, 
- Zod, 
- Autenticação JWT, 
- Swagger, 
- E Jest para testes.

 O projecto apresenta a seguinte estrutura de pastas:<br>
 ├── <b>src</b><br>
 │   ├── <b>routes</b><br>
 │   │   ├── auth.routes.ts<br>
 │   │   ├── professor.routes.ts<br>
 │   │   ├── funcionario.routes.ts<br>
 │   │   ├── usuario.routes.ts<br>
 │   │   ├── permissoes.routes.ts<br>
 │   │   ├── cursos.routes.ts<br>
 │   │   ├── sumarios.routes.ts<br>
 │   │   ├── presencas.routes.ts<br>
 │   │   └── efetividades.routes.ts<br>
 │   ├── <b>controllers</b><br>
 │   │   ├── auth.controller.ts<br>
 │   │   ├── professor.controller.ts<br>
 │   │   ├── funcionario.controller.ts<br>
 │   │   ├── usuario.controller.ts<br>
 │   │   ├── permissoes.controller.ts<br>
 │   │   ├── cursos.controller.ts<br>
 │   │   ├── sumarios.controller.ts<br>
 │   │   ├── presencas.controller.ts<br>
 │   │   └── efetividades.controller.ts<br>
 │   ├── <b>schemas</b><br>
 │   │   ├── auth.schema.ts<br>
 │   │   ├── professor.schema.ts<br>
 │   │   ├── funcionario.schema.ts<br>
 │   │   ├── usuario.schema.ts<br>
 │   │   ├── permissoes.schema.ts<br>
 │   │   ├── cursos.schema.ts<br>
 │   │   ├── sumarios.schema.ts<br>
 │   │   ├── presencas.schema.ts<br>
 │   │   └── efetividades.schema.ts<br>
 │   ├── <b>middlewares</b><br>
 │   │   └── authMiddleware.ts<br>
 │   ├── <b>plugins</b><br>
 │   │   ├── prisma.ts<br>
 │   │   └── swagger.ts<br>
 │   ├── <b>utils</b><br>
 │   │   ├── jwt.ts<br>
 │   │   └── hash.ts<br>
 │   ├── <b>tests</b><br>
 │   │   ├── auth.test.ts<br>
 │   │   ├── funcionario.test.ts<br>
 │   │   ├── usuario.test.ts<br>
 │   │   ├── professor.test.ts<br>
 │   │   ├── permissoes.test.ts<br>
 │   │   ├── cursos.test.ts<br>
 │   │   ├── sumarios.test.ts<br>
 │   │   ├── presencas.test.ts<br>
 │   │   └── efetividades.test.ts<br>
 │   └── <b>server.ts</b><br>
</p>

## Como executar o projeto
### Pré-requisitos
- Node.js
- npm
- Docker (opcional)
- Docker Compose (opcional)

### Instalação
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```
2. N
3. Instale as dependências:
```bash
npm install
```
4. Configure as variáveis de ambiente:
```bash
cp .env.
```
5. Execute
npm run dev

## Uso
A API está disponível em http://localhost:3000.

## Testes
Os testes unitários estão localizados em /tests.
Para executar os testes, execute o seguinte comando:npm run test

## Rotas
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
Este projecto  está licenciado sob a licença MIT.

### Autor
<a href="https://github.com/ronydevdesgn">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/82418215?v=4" width="100px;" alt=""/>

 ### OBSERVAÇÃO
 <p>Este projecto é apenas um exemplo de como criar uma API RESTful com Fastify, Prisma, Zod, JWT e Swagger. Ele não é um projeto completo e não deve ser usado em um ambiente de produção sem modificações.</p>
