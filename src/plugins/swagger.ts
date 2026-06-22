import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import fp from "fastify-plugin";

/**
 * Plugin de documentação Swagger/OpenAPI 3.0.
 * Deve ser registado DEPOIS de todas as rotas para que o Fastify
 * consiga recolher os schemas definidos em cada rota.
 *
 * Os nomes das tags aqui declaradas devem coincidir EXACTAMENTE
 * com os nomes usados nas rotas (case-sensitive).
 */
export default fp(
  async function swaggerPlugin(fastify) {
    // ── 1. Gerar o JSON OpenAPI ───────────────────────────────────────────────
    await fastify.register(swagger, {
      openapi: {
        openapi: "3.0.0",
        info: {
          title: "SWCS API",
          description:
            "**Sistema Web para Controlo de Sumário Universitário** — Documentação interactiva de todos os endpoints REST.\n\n" +
            "### Autenticação\n" +
            "A maioria dos endpoints requer um token JWT enviado no header `Authorization: Bearer <token>`.\n" +
            "Obtenha o token em `POST /auth/login`.",
          version: "1.0.1",
          contact: {
            name: "SWCS Developer",
            email: "ronydevdesgn@gmail.com",
          },
          license: {
            name: "MIT",
          },
        },
        servers: [
          {
            url: "http://localhost:3333",
            description: "Servidor de desenvolvimento",
          },
        ],
        // ── Tags declaradas — devem coincidir EXACTAMENTE com as tags das rotas ──
        tags: [
          {
            name: "auth",
            description:
              "Autenticação: login, refresh token, logout e recuperação de senha",
          },
          {
            name: "usuarios",
            description: "Gestão de utilizadores do sistema",
          },
          {
            name: "professores",
            description: "Gestão de professores (CRUD completo)",
          },
          {
            name: "funcionarios",
            description: "Gestão de funcionários (CRUD completo)",
          },
          {
            name: "permissoes",
            description: "Gestão e atribuição de permissões",
          },
          {
            name: "cursos",
            description: "Gestão de cursos académicos (CRUD completo)",
          },
          {
            name: "sumarios",
            description: "Gestão de sumários de aulas (CRUD completo)",
          },
          {
            name: "presencas",
            description:
              "Controlo de presenças e faltas de professores (inclui registo em lote)",
          },
          {
            name: "efetividades",
            description:
              "Registo de horas trabalhadas por professor/curso (CRUD + filtros por período)",
          },
          {
            name: "dashboard",
            description: "Estatísticas e indicadores gerais do sistema",
          },
          {
            name: "reports",
            description: "Geração de relatórios em PDF",
          },
        ],
        components: {
          securitySchemes: {
            bearerAuth: {
              type: "http",
              scheme: "bearer",
              bearerFormat: "JWT",
              description:
                "Token JWT obtido em `POST /auth/login`. Formato: `Bearer <token>`",
            },
          },
        },
      },
    });

    // ── 2. Servir a interface Swagger UI ──────────────────────────────────────
    await fastify.register(swaggerUi, {
      routePrefix: "/docs",
      uiConfig: {
        docExpansion: "list",
        deepLinking: true,
        displayRequestDuration: true,
        tryItOutEnabled: true,
        persistAuthorization: true,
        filter: true,
      },
      staticCSP: true,
      transformStaticCSP: (header) => header,
    });
  },
  {
    name: "swagger",
    dependencies: ["prisma"],
  }
);
