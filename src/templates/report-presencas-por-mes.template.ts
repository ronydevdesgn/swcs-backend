import {jsPDF} from "jspdf";
import path from "node:path";
import fs from "node:fs";
import autoTable from "jspdf-autotable";

export async function reportPresencasPorMesTemplate(data: Array<{
        professor: string,
        carga: number,
        horasTrabalhadas: number,
        faltas: number,
        presencas: number,
    }>, departamento: string){
  console.log("AAA") 
  const doc = new jsPDF({
    orientation: 'p',
    format: 'a4',
   });

  console.log("BBB")
  // ======================
  // LOGO (PNG ou JPG)
  // ======================
  const logoPath = path.resolve("public/unibelas-logotipo.jpeg");
  const logoBase64 = fs.readFileSync(logoPath, { encoding: "base64" });

  console.log("CCC")
  doc.addImage(
    `data:image/png;base64,${logoBase64}`,
    "PNG",
    15,
    10,
    25,
    25
  );
  console.log("DDD")
  // ==============================
  // CABEÇALHO OFICIAL
  // ==============================
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("REPÚBLICA DE ANGOLA", 105, 15, { align: "center" });
  doc.text("MINISTÉRIO DO ENSINO SUPERIOR", 105, 22, { align: "center" });

  console.log("EEE")
  doc.setFontSize(11);
  doc.text("RELATÓRIO CONSOLIDADO DE PRESENÇA DOCENTE", 105, 32, {
    align: "center",
  });

  console.log("FFF")
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`Departamento: ${departamento}`, 14, 45);
  doc.text(`Data: ${new Date().toLocaleDateString("pt-PT")}`, 150, 45);

  console.log("GGG")
  const body = data.map((d) => {
    const presenca = (((d.carga - d.faltas) / d.carga) * 100).toFixed(1);

    const presencaPercent = (Number(presenca) > 75) ? "Regular" : "Irregular"
    return [
      d.professor,
      d.horasTrabalhadas,
      d.faltas,
      d.presencas,
      `${presenca}%`,
      presencaPercent,
    ];
  });

  console.log("HHH")
  // ======================
  // TABELA
  // ======================
  let currentY = 60;

  console.log("III")
  autoTable(doc, {
    startY: currentY,
    head: [[
      "Professor",
      "HorasTrabalhadas",
      "Faltas",
      "Presenca",
      "Percentual",
      "Avaliação",
    ]],
    body,
    styles: { fontSize: 9 },
    headStyles: { fontStyle: "bold" },
  });

  console.log("")
  // ======================
  // CONTROLE MANUAL DO Y
  // ======================
  currentY += 20 + body.length * 8;

  console.log("JJJ")
  // ======================
  // ANÁLISE GLOBAL
  // ======================
  doc.setFont("helvetica", "bold");
  doc.text("Análise Global", 14, currentY);

  console.log("KKK")
  doc.setFont("helvetica", "normal");
  doc.text(`Total de data Avaliados: ${data.length}`, 14, currentY + 8);

  // ======================
  // CONCLUSÃO
  // ======================
  console.log("LLL")
  doc.setFont("helvetica", "bold");
  doc.text("Conclusão", 14, currentY + 22);
  doc.line(14, currentY + 28, 196, currentY + 28);
  doc.line(14, currentY + 34, 196, currentY + 34);

  // ======================
  // ASSINATURAS
  // ======================
  doc.text(
    "Coordenação Acadêmica: ____________________________",
    14,
    currentY + 50
  );
  doc.text("Assinatura: ____________________________", 14, currentY + 57);
  doc.text("Data: ____ / ____ / ______", 14, currentY + 64);
console.log("MMM")
  // ======================
  // BUFFER
  // ======================
  const pdfBuffer = Buffer.from(doc.output("arraybuffer"));

  console.log("NNN")
  return pdfBuffer
}