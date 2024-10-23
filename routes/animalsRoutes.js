import express from "express";
import { getRandomAnimal } from "../controllers/animalsController.js";

const router = express.Router();

router.get("/", getRandomAnimal);

export default router;
