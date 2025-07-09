import { Router } from "express";
import { readExcelData } from "../utils/readExcel";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await readExcelData();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao ler a planilha" });
  }
});

export default router;
