import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import cron from 'node-cron';
import pg from "pg";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function adicionarFaltasAoProfessoresAutomaticamente(){
    const professorSumario: Array<{professorId: number, isSumario: boolean}> = [] 
    const professoresExists = await prisma.professor.findMany()

    if(!professoresExists){
        throw new Error("Nenhum professor existente no banco!")
    }

    const professores_ids = professoresExists.map((professor)=> professor.professorId)
    const date = new Date()
    date.setDate(date.getDate() - 1)

    for (const professorId of professores_ids) {
        const hasSumario = await prisma.sumario.findFirst({
            where: {
                professorId: professorId,
                data: date
            }
        });

        professorSumario.push({ professorId: professorId, isSumario: !!hasSumario });

        const response = await prisma.presenca.create({
            data: {
                data: date,
                estado: !!hasSumario ? 'PRESENTE' : 'FALTA',
                professorId: professorId,
                cursoId: 1 // Default cursoId as per schema
            }
        });

        console.log(`Presença registrada para professor ${professorId}: ${response.estado}`);
    }
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

