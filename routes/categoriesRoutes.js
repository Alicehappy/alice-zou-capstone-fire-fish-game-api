import express from "express";
import { getCategoriesWithAnimals } from "../controllers/categoriesController.js";

const router = express.Router();

router.get("/", getCategoriesWithAnimals);

export default router;
