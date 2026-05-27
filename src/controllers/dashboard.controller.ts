import { FastifyRequest, FastifyReply } from "fastify";
import { sendError } from "../utils/http";

export async function getDashboardStats(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const prisma = req.server.prisma;

  try {
    const trintaDiasAtras = new Date();
    trintaDiasAtras.setDate(trintaDiasAtras.getDate() - 30);

    // Executar todas as contagens em paralelo para melhor performance
    const [
      professores,
      cursos,
      sumarios,
      totalPresencas,
      totalFaltas,
      funcionarios,
      sumariosRecentes,
      presencasRecentes,
    ] = await Promise.all([
      prisma.professor.count(),
      prisma.curso.count(),
      prisma.sumario.count(),
      prisma.presenca.count({ where: { estado: "PRESENTE" } }),
      prisma.presenca.count({ where: { estado: "FALTA" } }),
      prisma.funcionario.count(),
      prisma.sumario.count({
        where: { data: { gte: trintaDiasAtras } },
      }),
      prisma.presenca.count({
        where: { data: { gte: trintaDiasAtras } },
      }),
    ]);

    return reply.send({
      data: {
        professores,
        cursos,
        sumarios,
        presencas: totalPresencas,
        totalFaltas,
        funcionarios,
        sumariosRecentes,
        presencasRecentes,
      },
    });
  } catch (error) {
    req.log.error("Erro ao buscar estatísticas do dashboard:", error);
    return sendError(reply, 500, "Erro interno ao buscar estatísticas");
  }
}
