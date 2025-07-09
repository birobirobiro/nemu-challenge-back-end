import path from "path";
import fs from "fs";
import readXlsxFile from "read-excel-file/node";

export async function readExcelData() {
  const filePath = path.resolve(__dirname, "../data/data.xlsx");

  if (!fs.existsSync(filePath)) {
    throw new Error("Arquivo não encontrado");
  }

  const rows = await readXlsxFile(filePath);
  console.log(rows);
}
