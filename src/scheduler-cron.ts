import cron from 'node-cron'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function adicionarFaltasAoProfessoresAutomaticamente(){
    const professorSumario: Array<{professorId: number, isSumario: boolean}> = [] 
    const professoresExists = await prisma.professor.findMany()

    if(!professoresExists){
        throw new Error("Nenhum professor existente no banco!")
    }

    const professores_ids = professoresExists.map((professor)=> professor.ProfessorID)
    const date = new Date()
    date.setDate(date.getDate() - 1)

    professores_ids.forEach(async (professorId)=> {
        const hasSumario = await prisma.sumario.findFirst({
            where: {
                ProfessorID: professorId,
                Data: date
            }
        })

        professorSumario.push({professorId: professorId, isSumario: !!hasSumario})

        const response = await prisma.presenca.create({
            data: {
                Data: date,
                Estado: !!hasSumario ? 'PRESENTE' : 'FALTA',
                ProfessorID: professorId
            }
        })

        console.log(response)
    })    
}


async function main(){
    cron.schedule('0 5 * 2,8 *', async ()=> {
        await adicionarFaltasAoProfessoresAutomaticamente()
    }, {
        name: 'Adicionador de falta automática'
    })
}

main()
  .then(async () => {
    console.log("Running scheduler Adicionador de faltas automática")
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

