import express from "express";
import {
  getSentences,
  saveSentence,
} from "../controllers/sentenceController.js";

const router = express.Router();

router.get("/:categoryCount", getSentences);
router.post("/:categoryCount", saveSentence);

export default router;
