import { Router } from "express";
import { getProcessedJourneys } from "../services/journeyService";
import { Journey } from "../types/journey";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data: Journey[] = await getProcessedJourneys();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao processar as jornadas" });
  }
});

export default router;
