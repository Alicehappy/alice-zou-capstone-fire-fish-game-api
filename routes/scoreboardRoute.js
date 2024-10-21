import express from "express";
import {
  getTopScores,
  saveScore,
} from "../controllers/scoreboardController.js";

const router = express.Router();

router.get("/", getTopScores);

router.post("/", saveScore);

export default router;
