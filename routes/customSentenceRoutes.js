import express from "express";
import {
  getCustomSentences,
  saveCustomSentence,
} from "../controllers/customSentenceController.js";

const router = express.Router();

router.get("/", getCustomSentences);
router.post("/", saveCustomSentence);

export default router;
