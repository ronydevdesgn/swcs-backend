import { Estado } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import { reportPresencasPorMesTemplate } from "../templates/report-presencas-por-mes.template";
import { sendError } from "../utils/http";

export async function reportPresencasPorMes( req: FastifyRequest, reply: FastifyReply){
    try {
        const prisma = req.server.prisma;
    const data = req.query as any;

    const professores = await prisma.professor.findMany({
        include: {
            efetividades: true
        },
        where: {
            departamento: data.departamento
        }
    })
    const startDate = new Date(data.startDate)
    const endDate = new Date(data.endDate)

    if(startDate >= endDate){
        throw new Error("A data inicio não pode ser menor ou igual a data de fim")
    }


    if(startDate > new Date()){
        throw new Error("A data inicio não pode ser menor ou igual a data de fim")
    }

    const dataRelatorio:  Array<{
        professor: string,
        carga: number,
        horasTrabalhadas: number,
        faltas: number,
        presencas: number,
    }> = await Promise.all(
        professores.map(async (professor)=> {
         const presencas = await prisma.presenca.findMany({
            where: {
                AND: [
                    {professorId: professor.professorId},
                    {data: {
                    gte: startDate,
                    lte: endDate,
                }}
                ]
            },
        });

        const efetividades = await prisma.efetividade.findMany({
            where: {
                
                AND:{
                    professorId: professor.professorId,
                    data: {
                        gte: startDate,
                        lte: endDate
                    }
                }
            }
        })

        const totalPresencas = presencas.filter(p => p.estado === Estado.PRESENTE).length;
        const totalFaltas = presencas.filter(p => p.estado === Estado.FALTA).length;
        const totalHorasTrabalhadas = efetividades.reduce((acc, current) => acc + current.horasTrabalhadas, 0)

        return {
            professor: professor.nome,
            faltas: totalFaltas,
            carga: professor.cargaHoraria, 
            presencas: totalPresencas,
            horasTrabalhadas: totalHorasTrabalhadas
        } 
    })
    )

    const buffer = await reportPresencasPorMesTemplate(dataRelatorio, data.departamento)

    reply
      .header("Content-Type", "application/pdf")
      .header(
        "Content-Disposition",
        "attachment; filename=relatorio-presenca-docente.pdf"
      )
      .send(buffer);    
    } catch (error) {
        console.log("Error", error)
       req.log.error("Erro ao gerar relatorio de falta:", error);
       return sendError(reply, 500, "Erro interno ao gerar relatorio de falta");
    }

}

export async function listPresencasPorMes( req: FastifyRequest, reply: FastifyReply){
    try {
    const prisma = req.server.prisma;
    const data = req.query as any;

    const professores = await prisma.professor.findMany({
        include: {
            efetividades: true
        },
        where: {
            departamento: data.departamento
        }
    })
    const startDate = new Date(data.startDate)
    const endDate = new Date(data.endDate)

    if(startDate >= endDate){
        throw new Error("A data inicio não pode ser menor ou igual a data de fim")
    }

    if(startDate > new Date()){
        return reply.send( {data: [],
        meta: {
            total: [].length,
            porCargo: {
                startDate,
                endDate,
                departamento: data.departamento
            },
        }})
    }

   const dataRelatorio:  Array<{
        professorID: number,
        professorName: string,
        carga: number,
        horasTrabalhadas: number,
        faltas: number,
        presencas: number,
    }> = await Promise.all(
        professores.map(async (professor)=> {
        
        const presencas = await prisma.presenca.findMany({
            where: {
                AND: [
                    {professorId: professor.professorId},
                    {data: {
                    gte: startDate,
                    lte: endDate,
                }}
                ]
            },
        });

        const efetividades = await prisma.efetividade.findMany({
            where: {
                
                AND:{
                    professorId: professor.professorId,
                    data: {
                        gte: startDate,
                        lte: endDate
                    }
                }
            }
        })

        const totalPresencas = presencas.filter(p => p.estado === Estado.PRESENTE).length;
        const totalFaltas = presencas.filter(p => p.estado === Estado.FALTA).length;
        const totalHorasTrabalhadas = efetividades.reduce((acc, current) => acc + current.horasTrabalhadas, 0)

        return {
            professorID: professor.professorId,
            professorName: professor.nome,
            faltas: totalFaltas,
            carga: professor.cargaHoraria, 
            presencas: totalPresencas,
            horasTrabalhadas: totalHorasTrabalhadas
        } 
    })
    )

    return reply.send({
      data: dataRelatorio,
      meta: {
        total: dataRelatorio.length,
        porCargo: {
            startDate,
            endDate,
            departamento: data.departamento
        },
      },
    });  
    } catch (error) {
        req.log.error("Erro ao listar relatorios de falta:", error);
       return sendError(reply, 500, "Erro interno ao listar relatorio de falta");
    }
}