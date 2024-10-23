import express from "express";
import { getFunFactByAnimalId, addFunFact } from "../controllers/funFactsController.js";

const router = express.Router();

router.get("/:animalId", getFunFactByAnimalId);
router.post("/", addFunFact);

export default router;