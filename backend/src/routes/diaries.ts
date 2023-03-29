import express from "express";

import * as diaryServices from "../services/diaryServices";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.get("/:id", (req, res) => {
  const diary = diaryServices.findById(+req.params.id);
  return diary != null ? res.send(diary) : res.sendStatus(404);
});

router.post("/", (req, res) => {
  const { date, trainning, diet, cardio } = req.body;
  const newDiaryEntry = diaryServices.addDiary({
    date,
    trainning,
    diet,
    cardio,
  });
  res.json(newDiaryEntry);
});

export default router;
