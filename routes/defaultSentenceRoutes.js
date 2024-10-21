import express from "express";
import {
  getDefaultSentences,
  saveDefaultSentences,
} from "../controllers/defaultSentenceController.js";

const router = express.Router();

router.get("/", getDefaultSentences);
router.post("/", saveDefaultSentence);

export default router;
