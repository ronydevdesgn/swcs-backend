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