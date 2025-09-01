import { FastifyInstance } from "fastify";
import {
  permissaoSchema,
  usuarioPermissaoSchema,
  idParamSchema,
  permissaoResponseSchema,
} from "../schemas/permissoes.schema";
import {
  criarPermissao,
  atribuirPermissaoUsuario,
  listarPermissoes,
  buscarPermissoesPorUsuario,
} from "../controllers/permissoes.controller";
import { autenticar } from "../middlewares/authMiddleware";

export default async function permissoesRoutes(app: FastifyInstance) {
  // Aplica autenticação em todas as rotas
  app.addHook("onRequest", autenticar);

  app.post(
    "/",
    {
      schema: {
        body: permissaoSchema,
      },
    },
    criarPermissao
  );

  app.post(
    "/atribuir",
    {
      schema: {
        body: usuarioPermissaoSchema,
      },
    },
    atribuirPermissaoUsuario
  );

  app.get("/", {}, listarPermissoes);

  app.get(
    "/usuario/:id",
    {
      schema: {
        params: idParamSchema,
      },
    },
    buscarPermissoesPorUsuario
  );
}
