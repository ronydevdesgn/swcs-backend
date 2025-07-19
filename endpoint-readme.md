# SWCS Backend API Endpoints

Este documento lista todos os endpoints disponíveis no backend SWCS, formatos de dados, autenticação e exemplos para integração com React Query e hooks personalizados.

## Autenticação

Todas as rotas (exceto /auth/login) requerem autenticação via Bearer Token.

```typescript
headers: {
  'Authorization': 'Bearer <seu-token-jwt>'
}
```

## Endpoints

### Auth

| Rota                    | Método | Body/Params                            | Resposta                        | Autenticação |
| ----------------------- | ------ | -------------------------------------- | ------------------------------- | ------------ |
| `/auth/login`           | POST   | `{ email, senha, tipo }`               | `{ token, refreshToken, user }` | Não          |
| `/auth/refresh`         | POST   | `{ refreshToken }`                     | `{ token, refreshToken }`       | Não          |
| `/auth/reset-password`  | POST   | `{ email }`                            | `{ mensagem }`                  | Não          |
| `/auth/change-password` | POST   | `{ token, novaSenha, confirmarSenha }` | `{ mensagem }`                  | Não          |

### Usuários

| Rota            | Método | Body/Params                      | Resposta       | Autenticação |
| --------------- | ------ | -------------------------------- | -------------- | ------------ |
| `/usuarios`     | GET    | Query: `page`, `limit`, `search` | `[Usuario]`    | Sim          |
| `/usuarios`     | POST   | `{ nome, email, senha, tipo }`   | `Usuario`      | Sim          |
| `/usuarios/:id` | GET    | `id` (URL param)                 | `Usuario`      | Sim          |
| `/usuarios/:id` | PUT    | `{ nome?, email?, tipo? }`       | `Usuario`      | Sim          |
| `/usuarios/:id` | DELETE | None                             | `{ mensagem }` | Sim          |

### Professores

| Rota               | Método | Body/Params                               | Resposta       | Autenticação |
| ------------------ | ------ | ----------------------------------------- | -------------- | ------------ |
| `/professores`     | GET    | Query: `page`, `limit`, `departamento`    | `[Professor]`  | Sim          |
| `/professores`     | POST   | `{ nome, departamento, cargaHoraria }`    | `Professor`    | Sim          |
| `/professores/:id` | GET    | `id` (URL param)                          | `Professor`    | Sim          |
| `/professores/:id` | PUT    | `{ nome?, departamento?, cargaHoraria? }` | `Professor`    | Sim          |
| `/professores/:id` | DELETE | None                                      | `{ mensagem }` | Sim          |

### Funcionários

| Rota                | Método | Body/Params                     | Resposta        | Autenticação |
| ------------------- | ------ | ------------------------------- | --------------- | ------------ |
| `/funcionarios`     | GET    | Query: `page`, `limit`, `cargo` | `[Funcionario]` | Sim          |
| `/funcionarios`     | POST   | `{ nome, email, cargo }`        | `Funcionario`   | Sim          |
| `/funcionarios/:id` | GET    | `id` (URL param)                | `Funcionario`   | Sim          |
| `/funcionarios/:id` | PUT    | `{ nome?, email?, cargo? }`     | `Funcionario`   | Sim          |
| `/funcionarios/:id` | DELETE | None                            | `{ mensagem }`  | Sim          |

### Cursos

| Rota          | Método | Body/Params                           | Resposta       | Autenticação |
| ------------- | ------ | ------------------------------------- | -------------- | ------------ |
| `/cursos`     | GET    | Query: `page`, `limit`, `search`      | `[Curso]`      | Sim          |
| `/cursos`     | POST   | `{ nome, descricao, professorId }`    | `Curso`        | Sim          |
| `/cursos/:id` | GET    | `id` (URL param)                      | `Curso`        | Sim          |
| `/cursos/:id` | PUT    | `{ nome?, descricao?, professorId? }` | `Curso`        | Sim          |
| `/cursos/:id` | DELETE | None                                  | `{ mensagem }` | Sim          |

### Sumários

| Rota            | Método | Body/Params                                     | Resposta       | Autenticação |
| --------------- | ------ | ----------------------------------------------- | -------------- | ------------ |
| `/sumarios`     | GET    | Query: `page`, `limit`, `cursoId`, `dataInicio` | `[Sumario]`    | Sim          |
| `/sumarios`     | POST   | `{ data, conteudo, cursoId, professorId }`      | `Sumario`      | Sim          |
| `/sumarios/:id` | GET    | `id` (URL param)                                | `Sumario`      | Sim          |
| `/sumarios/:id` | PUT    | `{ data?, conteudo? }`                          | `Sumario`      | Sim          |
| `/sumarios/:id` | DELETE | None                                            | `{ mensagem }` | Sim          |

### Presenças

| Rota               | Método | Body/Params                               | Resposta       | Autenticação |
| ------------------ | ------ | ----------------------------------------- | -------------- | ------------ |
| `/presencas`       | GET    | Query: `page`, `limit`, `data`, `cursoId` | `[Presenca]`   | Sim          |
| `/presencas`       | POST   | `{ data, estado, professorId, cursoId }`  | `Presenca`     | Sim          |
| `/presencas/batch` | POST   | `{ presencas: [Presenca] }`               | `{ count }`    | Sim          |
| `/presencas/:id`   | GET    | `id` (URL param)                          | `Presenca`     | Sim          |
| `/presencas/:id`   | PUT    | `{ estado? }`                             | `Presenca`     | Sim          |
| `/presencas/:id`   | DELETE | None                                      | `{ mensagem }` | Sim          |

### Efetividades

| Rota                  | Método | Body/Params                               | Resposta        | Autenticação |
| --------------------- | ------ | ----------------------------------------- | --------------- | ------------ |
| `/efetividades`       | GET    | Query: `page`, `limit`, `mes`, `ano`      | `[Efetividade]` | Sim          |
| `/efetividades`       | POST   | `{ data, horasTrabalhadas, professorId }` | `Efetividade`   | Sim          |
| `/efetividades/stats` | GET    | Query: `mes`, `ano`, `professorId`        | `Stats`         | Sim          |
| `/efetividades/:id`   | GET    | `id` (URL param)                          | `Efetividade`   | Sim          |
| `/efetividades/:id`   | PUT    | `{ horasTrabalhadas? }`                   | `Efetividade`   | Sim          |
| `/efetividades/:id`   | DELETE | None                                      | `{ mensagem }`  | Sim          |

## Formato dos Dados

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
    lastPage: number;
  };
}

interface ErrorResponse {
  mensagem: string;
  detalhes?: string;
}
```

### Respostas de Sucesso

Todas as respostas de sucesso seguem o formato:

```typescript
{
  data: T | T[],
  meta?: {
    total: number;
    page?: number;
    lastPage?: number;
  }
}
```

### Erros

Todos os erros seguem o formato:

```typescript
{
  mensagem: string;
  detalhes?: string; // apenas em desenvolvimento
}
```

## Integração com React Query

Exemplo de hook para listagem de professores:

```typescript
export function useProfessores(options?: {
  page?: number;
  limit?: number;
  departamento?: string;
}) {
  return useQuery({
    queryKey: ["professores", options],
    queryFn: () => api.get("/professores", { params: options }),
    select: (response) => response.data,
  });
}
```

Exemplo de mutation para criar professor:

```typescript
export function useCreateProfessor() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateProfessorInput) => api.post("/professores", data),
    onSuccess: () => {
      queryClient.invalidateQueries(["professores"]);
    },
  });
}
```

## Boas Práticas

1. **Autenticação**

   - Sempre envie o token JWT no header
   - Renove o token antes de expirar
   - Armazene tokens de forma segura

2. **Tratamento de Erros**

   - Implemente retry para falhas de rede
   - Valide dados antes de enviar
   - Mostre feedback apropriado ao usuário

3. **Performance**

   - Use paginação em listagens
   - Implemente cache com React Query
   - Otimize o tamanho das respostas

4. **Segurança**
   - Nunca envie senhas em texto plano
   - Valide todos os inputs
   - Use HTTPS em produção

## Observações

Este documento está em constante atualização. Para mais detalhes, consulte a documentação Swagger em `/docs`.
