import path from "path";
import fs from "fs";
import readXlsxFile from "read-excel-file/node";
import { JourneyEvent } from "../types/journey";

const schema = {
  utm_source: { prop: "utmSource", type: String },
  utm_campaign: { prop: "utmCampaign", type: String },
  utm_medium: { prop: "utmMedium", type: String },
  utm_content: { prop: "utmContent", type: String },
  sessionId: { prop: "sessionId", type: String },
  createdAt: { prop: "createdAt", type: String },
};

export async function readExcelData(): Promise<JourneyEvent[]> {
  const filePath = path.resolve(__dirname, "../data/data.xlsx");

  if (!fs.existsSync(filePath)) {
    throw new Error("Arquivo não encontrado");
  }

  const { rows, errors } = await readXlsxFile(filePath, { schema });

  const parsedRows = rows.map((row) => ({
    ...row,
    createdAt:
      typeof row.createdAt === "string" ? new Date(row.createdAt) : null,
  }));

  if (errors.length > 0) {
    console.error("Erros ao ler dados da planilha:", errors);
  }

  return parsedRows as JourneyEvent[];
}
