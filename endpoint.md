# SWCS Backend API Endpoints

Este documento lista todos os endpoints disponíveis no backend SWCS, formatos de dados e autenticação.

## Autenticação

Todas as rotas (exceto as de `/auth`) requerem autenticação via Bearer Token no cabeçalho `Authorization`.

```
Authorization: Bearer <seu-token-jwt>
```

## Endpoints

### Auth

| Rota | Método | Body/Params | Resposta | Autenticação |
| --- | --- | --- | --- | --- |
| `/auth/login` | POST | `{ email, senha, tipo }` | `{ accessToken, refreshToken, usuario }` | Não |
| `/auth/refresh` | POST | `{ refreshToken }` | `{ accessToken, refreshToken, usuario }` | Não |
| `/auth/forgot-password` | POST | `{ email }` | `{ mensagem }` | Não |
| `/auth/reset-password` | POST | `{ token, novaSenha, confirmarSenha }` | `{ mensagem }` | Não |
| `/auth/logout` | POST | None | `{ mensagem }` | Sim |

### Usuários

| Rota | Método | Body/Params | Resposta | Autenticação |
| --- | --- | --- | --- | --- |
| `/usuarios` | GET | Query: `search` | `[Usuario]` | Sim |
| `/usuarios` | POST | `{ Nome, Email, Senha, Tipo }` | `Usuario` | Sim (não deve ter) |
| `/usuarios/:id` | GET | `id` (URL param) | `Usuario` | Sim |
| `/usuarios/:id` | PUT | `{ Nome?, Email? }` | `Usuario` | Sim |
| `/usuarios/:id/senha` | PUT | `{ senhaAtual, novaSenha, confirmarSenha }` | `{ mensagem }` | Sim |

### Professores

| Rota | Método | Body/Params | Resposta | Autenticação |
| --- | --- | --- | --- | --- |
| `/professores` | GET | Query: `search`, `departamento` | `[Professor]` | Sim |
| `/professores` | POST | `{ Nome, Email, Senha, Departamento, CargaHoraria }` | `Professor` | Sim |
| `/professores/:id` | GET | `id` (URL param) | `Professor` | Sim |
| `/professores/:id` | PUT | `{ Nome?, Departamento?, CargaHoraria?, Email? }` | `Professor` | Sim |

### Funcionários

| Rota | Método | Body/Params | Resposta | Autenticação |
| --- | --- | --- | --- | --- |
| `/funcionarios` | GET | Query: `search`, `cargo` | `[Funcionario]` | Sim |
| `/funcionarios` | POST | `{ Nome, Email, Senha, Cargo }` | `Funcionario` | Sim |
| `/funcionarios/:id` | GET | `id` (URL param) | `Funcionario` | Sim |
| `/funcionarios/:id` | PUT | `{ Nome?, Email?, Cargo? }` | `Funcionario` | Sim |

### Cursos

| Rota | Método | Body/Params | Resposta | Autenticação |
| --- | --- | --- | --- | --- |
| `/cursos` | GET | Query: `search`, `departamento` | `[Curso]` | Sim |
| `/cursos` | POST | `{ Nome, Descricao, ProfessorID }` | `Curso` | Sim |
| `/cursos/departamento` | GET | Query: `departamento` | `[Curso]` | Sim |
| `/cursos/:id` | GET | `id` (URL param) | `Curso` | Sim |
| `/cursos/:id` | PUT | `{ Nome?, Descricao?, ProfessorID? }` | `Curso` | Sim |
| `/cursos/:id` | DELETE | None | `{ mensagem }` | Sim |

### Sumários

| Rota | Método | Body/Params | Resposta | Autenticação |
| --- | --- | --- | --- | --- |
| `/sumarios` | GET | Query: `page`, `limit`, `search`, `cursoId`, `professorId`, `dataInicio`, `dataFim` | `[Sumario]` | Sim |
| `/sumarios` | POST | `{ Conteudo, Data, CursoID, ProfessorID }` | `Sumario` | Sim |
| `/sumarios/:id` | GET | `id` (URL param) | `Sumario` | Sim |
| `/sumarios/:id` | PUT | `{ Conteudo?, Data?, CursoID?, ProfessorID? }` | `Sumario` | Sim |
| `/sumarios/:id` | DELETE | None | `{ mensagem }` | Sim |

### Presenças

| Rota | Método | Body/Params | Resposta | Autenticação |
| --- | --- | --- | --- | --- |
| `/presencas` | GET | Query: `inicio`, `fim`, `estado`, `professorId` | `[Presenca]` | Sim |
| `/presencas` | POST | `{ Data, ProfessorID, Estado }` | `Presenca` | Sim |
| `/presencas/:id` | GET | `id` (URL param) | `Presenca` | Sim |
| `/presencas/professor/:id`| GET | `id` (URL param), Query: `inicio`, `fim`, `estado` | `[Presenca]` | Sim |
| `/presencas/:id` | PUT | `{ Data?, Estado? }` | `Presenca` | Sim |
| `/presencas/:id` | DELETE | None | `{ mensagem }` | Sim |

### Efetividades

| Rota | Método | Body/Params | Resposta | Autenticação |
| --- | --- | --- | --- | --- |
| `/efetividades` | GET | None | `[Efetividade]` | Sim |
| `/efetividades` | POST | `{ Data, HorasTrabalhadas, ProfessorID }` | `Efetividade` | Sim |
| `/efetividades/periodo` | GET | Query: `dataInicio`, `dataFim` | `[Efetividade]` | Sim |
| `/efetividades/:id` | GET | `id` (URL param) | `Efetividade` | Sim |
| `/efetividades/:id` | PUT | `{ Data?, HorasTrabalhadas? }` | `Efetividade` | Sim |
| `/efetividades/:id` | DELETE | None | `{ mensagem }` | Sim |
| `/efetividades/professor/:id` | GET | `id` (URL param), Query: `inicio`, `fim` | `[Efetividade]` | Sim |

### Permissões

| Rota | Método | Body/Params | Resposta | Autenticação |
| --- | --- | --- | --- | --- |
| `/permissoes` | GET | None | `[Permissao]` | Sim |
| `/permissoes` | POST | `{ Descricao }` | `Permissao` | Sim |
| `/permissoes/atribuir` | POST | `{ UsuarioID, PermissaoID }` | `{ mensagem }` | Sim |
| `/permissoes/usuario/:id` | GET | `id` (URL param) | `[UsuarioPermissao]` | Sim |

## Formato dos Dados

A API utiliza JSON para todas as requisições e respostas.

### Tipos Comuns

```typescript
interface PaginationQuery {
  page?: number;
  limit?: number;
  search?: string;
}

interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

interface ErrorResponse {
  statusCode: number;
  error: string;
  message: string;
  details?: any;
}
```

### Respostas de Sucesso

Respostas de sucesso (2xx) geralmente retornam um objeto com a chave `data`.

```json
{
  "data": { ... }
}
```

### Erros

Respostas de erro (4xx, 5xx) retornam um objeto com a estrutura padronizada.

```json
{
  "statusCode": 404,
  "error": "Not Found",
  "message": "Recurso não encontrado"
}
```

## Observações

Este documento é um resumo. Para detalhes completos sobre os schemas de cada rota, consulte a documentação Swagger UI, que pode ser ativada no arquivo `.env` e acessada em `/docs`.