import express from "express";
import {
  getSentences,
  saveSentences,
} from "../controllers/sentenceController.js";

const router = express.Router();

router.get("/", getSentences);
router.post("/", saveSentences);

export default router;
