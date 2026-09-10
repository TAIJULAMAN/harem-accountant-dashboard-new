import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

async function generateSamplePdf() {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontMono = await pdfDoc.embedFont(StandardFonts.Courier);
  const fontMonoBold = await pdfDoc.embedFont(StandardFonts.CourierBold);

  const employees = [
    { name: "SPALLUTO ANGELICA", cf: "SPLLCA88M58F839V", gross: 812.27, ded: 190.24, net: 622.03, period: "08/2026", pos: "0000201899044" },
    { name: "ROSSI MARCO", cf: "RSSMRC85M01H501Z", gross: 1450.00, ded: 320.50, net: 1129.50, period: "08/2026", pos: "0000201899045" },
    { name: "BIANCHI SOFIA", cf: "BNCSFO90A41F205X", gross: 1200.00, ded: 270.00, net: 930.00, period: "08/2026", pos: "0000201899046" },
    { name: "FERRARI LUCA", cf: "FRRLCU82T15L219Y", gross: 1650.00, ded: 380.00, net: 1270.00, period: "08/2026", pos: "0000201899047" },
    { name: "ESPOSITO GIULIA", cf: "SPSGSI95D45F839K", gross: 980.00, ded: 210.00, net: 770.00, period: "08/2026", pos: "0000201899048" },
    { name: "ROMANO MATTEO", cf: "RMNMTT88H12A662P", gross: 1350.00, ded: 295.00, net: 1055.00, period: "08/2026", pos: "0000201899049" },
    { name: "COLOMBO CHIARA", cf: "CLMCHR92L52F205W", gross: 1100.00, ded: 240.00, net: 860.00, period: "08/2026", pos: "0000201899050" },
    { name: "RICCI ALESSANDRO", cf: "RCCLSN86B04L219R", gross: 1550.00, ded: 345.00, net: 1205.00, period: "08/2026", pos: "0000201899051" },
    { name: "MARINO ELENA", cf: "MRNLNE94P60H501M", gross: 1250.00, ded: 280.00, net: 970.00, period: "08/2026", pos: "0000201899052" },
  ];

  for (let i = 0; i < employees.length; i++) {
    const emp = employees[i];
    const page = pdfDoc.addPage([595.28, 841.89]); // A4 size
    const { width, height } = page.getSize();

    // Top subtle border
    page.drawRectangle({
      x: 30,
      y: 30,
      width: width - 60,
      height: height - 60,
      borderColor: rgb(0.1, 0.1, 0.1),
      borderWidth: 1,
    });

    // Header title
    page.drawText("Elaborato da: Centro Elaborazione Dati - Mantova", {
      x: 40,
      y: height - 50,
      size: 8,
      font: fontMono,
      color: rgb(0.3, 0.3, 0.3),
    });

    page.drawText(`PAGINA ${i + 1} DI 9`, {
      x: width - 120,
      y: height - 50,
      size: 8,
      font: fontMonoBold,
      color: rgb(0.1, 0.1, 0.1),
    });

    // Company Header Box
    page.drawRectangle({
      x: 40,
      y: height - 125,
      width: width - 80,
      height: 65,
      borderColor: rgb(0.2, 0.2, 0.2),
      borderWidth: 1,
      color: rgb(0.98, 0.98, 0.99),
    });

    page.drawText("DATORE DI LAVORO: HAREM SALON & WELLNESS S.R.L.", {
      x: 50,
      y: height - 75,
      size: 10,
      font: fontBold,
      color: rgb(0, 0, 0),
    });

    page.drawText("VIA CARDUCCI 11, 20123 MILANO (MI) • P.IVA: 09876543210 • POS. INPS: 7506000209", {
      x: 50,
      y: height - 90,
      size: 7.5,
      font: font,
      color: rgb(0.3, 0.3, 0.3),
    });

    page.drawText("QUALIFICA: 1 - IMPIEGATO | CONTRATTO: CCNL ACCONCIATURA ED ESTETICA", {
      x: 50,
      y: height - 105,
      size: 7.5,
      font: font,
      color: rgb(0.2, 0.2, 0.2),
    });

    // Employee Header Box
    page.drawRectangle({
      x: 40,
      y: height - 180,
      width: width - 80,
      height: 45,
      borderColor: rgb(0.2, 0.2, 0.2),
      borderWidth: 1,
      color: rgb(0.96, 0.97, 0.99),
    });

    page.drawText(`DIPENDENTE: ${emp.name}`, {
      x: 50,
      y: height - 150,
      size: 11,
      font: fontBold,
      color: rgb(0.05, 0.1, 0.3),
    });

    page.drawText(`CODICE FISCALE: ${emp.cf}`, {
      x: 320,
      y: height - 150,
      size: 9,
      font: fontMonoBold,
      color: rgb(0, 0, 0),
    });

    page.drawText(`PERIODO: ${emp.period} | INAIL: ${emp.pos} | DATA ASSUNZIONE: 01/01/2020`, {
      x: 50,
      y: height - 168,
      size: 7.5,
      font: font,
      color: rgb(0.25, 0.25, 0.25),
    });

    // Pay Elements Table Header
    page.drawRectangle({
      x: 40,
      y: height - 210,
      width: width - 80,
      height: 20,
      borderColor: rgb(0.2, 0.2, 0.2),
      borderWidth: 1,
      color: rgb(0.9, 0.92, 0.95),
    });

    page.drawText("COD", { x: 50, y: height - 202, size: 7.5, font: fontBold });
    page.drawText("DESCRIZIONE VOCI RETRIBUTIVE", { x: 90, y: height - 202, size: 7.5, font: fontBold });
    page.drawText("BASE / ORE", { x: 280, y: height - 202, size: 7.5, font: fontBold });
    page.drawText("RIFERIM.", { x: 360, y: height - 202, size: 7.5, font: fontBold });
    page.drawText("COMPETENZE", { x: 430, y: height - 202, size: 7.5, font: fontBold });
    page.drawText("TRATTENUTE", { x: 510, y: height - 202, size: 7.5, font: fontBold });

    // Rows
    const rows = [
      { cod: "100", desc: "RETRIBUZIONE BASE CONTRATTUALE", base: "168,00 H", rif: "-", comp: emp.gross.toFixed(2), trat: "-" },
      { cod: "150", desc: "CONTINGENZA / E.D.R.", base: "-", rif: "-", comp: "-", trat: "-" },
      { cod: "300", desc: "TOTALE COMPETENZE LORDE", base: "-", rif: "-", comp: emp.gross.toFixed(2), trat: "-" },
      { cod: "800", desc: "CONTRIBUTI I.V.S. LAVORATORE", base: emp.gross.toFixed(2), rif: "9,19%", comp: "-", trat: (emp.gross * 0.0919).toFixed(2) },
      { cod: "850", desc: "RITENUTE IRPEF NETTE", base: "-", rif: "-", comp: "-", trat: (Math.max(0, emp.ded - emp.gross * 0.0919)).toFixed(2) },
      { cod: "890", desc: "TOTALE TRATTENUTE COMPLESSIVE", base: "-", rif: "-", comp: "-", trat: emp.ded.toFixed(2) },
    ];

    let currentY = height - 230;
    for (const r of rows) {
      page.drawText(r.cod, { x: 50, y: currentY, size: 7.5, font: fontMono });
      page.drawText(r.desc, { x: 90, y: currentY, size: 7.5, font: font });
      page.drawText(r.base, { x: 280, y: currentY, size: 7.5, font: fontMono });
      page.drawText(r.rif, { x: 360, y: currentY, size: 7.5, font: fontMono });
      page.drawText(r.comp, { x: 440, y: currentY, size: 7.5, font: fontMonoBold });
      page.drawText(r.trat, { x: 520, y: currentY, size: 7.5, font: fontMonoBold });

      page.drawLine({
        start: { x: 40, y: currentY - 5 },
        end: { x: width - 40, y: currentY - 5 },
        thickness: 0.5,
        color: rgb(0.85, 0.85, 0.85),
      });

      currentY -= 20;
    }

    // Totals Box
    page.drawRectangle({
      x: 40,
      y: height - 430,
      width: width - 80,
      height: 60,
      borderColor: rgb(0.1, 0.1, 0.1),
      borderWidth: 1.5,
      color: rgb(0.98, 0.99, 1),
    });

    page.drawText("TOTALE COMPETENZE", { x: 60, y: height - 395, size: 7.5, font: fontBold, color: rgb(0.3, 0.3, 0.3) });
    page.drawText(`€ ${emp.gross.toFixed(2)}`, { x: 60, y: height - 415, size: 12, font: fontBold, color: rgb(0, 0, 0) });

    page.drawText("TOTALE TRATTENUTE", { x: 230, y: height - 395, size: 7.5, font: fontBold, color: rgb(0.3, 0.3, 0.3) });
    page.drawText(`€ ${emp.ded.toFixed(2)}`, { x: 230, y: height - 415, size: 12, font: fontBold, color: rgb(0.8, 0.1, 0.1) });

    // Netto highlight
    page.drawRectangle({
      x: 390,
      y: height - 430,
      width: (width - 80) - 350,
      height: 60,
      borderColor: rgb(0.1, 0.1, 0.1),
      borderWidth: 1.5,
      color: rgb(0.9, 0.98, 0.92),
    });

    page.drawText("NETTO IN BUSTA", { x: 410, y: height - 395, size: 8, font: fontBold, color: rgb(0.05, 0.5, 0.2) });
    page.drawText(`€ ${emp.net.toFixed(2)}`, { x: 410, y: height - 418, size: 15, font: fontBold, color: rgb(0.05, 0.5, 0.2) });

    // TFR Summary Box
    page.drawRectangle({
      x: 40,
      y: height - 510,
      width: width - 80,
      height: 60,
      borderColor: rgb(0.3, 0.3, 0.3),
      borderWidth: 1,
      color: rgb(0.99, 0.99, 0.99),
    });

    page.drawText("DATI TFR (Trattamento di Fine Rapporto)", { x: 50, y: height - 465, size: 8, font: fontBold });
    page.drawText("TFR Maturato Anno: € 921,38", { x: 50, y: height - 485, size: 7.5, font: fontMono });
    page.drawText("TFR Fondo al 31/12: € 15.227,17", { x: 240, y: height - 485, size: 7.5, font: fontMono });
    page.drawText("Totale Fondo: € 16.148,55", { x: 420, y: height - 485, size: 7.5, font: fontMonoBold });

    // Bottom barcode & disclaimer
    page.drawText("DOCUMENTO ORIGINALE ARCHIVIATO ELETTRONICAMENTE • HAREM SALON DASHBOARD", {
      x: 50,
      y: 45,
      size: 6.5,
      font: font,
      color: rgb(0.4, 0.4, 0.4),
    });

    page.drawText("|||||| |||| | ||||||| ||| |||| || ||||||", {
      x: width - 200,
      y: 45,
      size: 9,
      font: fontMonoBold,
      color: rgb(0.1, 0.1, 0.1),
    });
  }

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve("./public/sample-payslip.pdf");
  fs.writeFileSync(outputPath, pdfBytes);
  console.log("Successfully generated sample PDF at:", outputPath);
}

generateSamplePdf();
