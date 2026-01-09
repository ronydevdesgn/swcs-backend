import { FastifyRequest, FastifyReply } from "fastify";
import { sendError } from "../utils/http";

export async function getDashboardStats(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    // Executar contagens em paralelo para melhor performance
    const [professores, cursos, sumarios, presencas, funcionarios] = await Promise.all([
      prisma.professor.count(),
      prisma.curso.count(),
      prisma.sumario.count(),
      prisma.presenca.count(),
      prisma.funcionario.count(),
    ]);

    return reply.send({
      data: {
        professores,
        cursos,
        sumarios,
        presencas,
        funcionarios,
      },
    });
  } catch (error) {
    req.log.error("Erro ao buscar estatísticas do dashboard:", error);
    return sendError(reply, 500, "Erro interno ao buscar estatísticas");
  }
}
