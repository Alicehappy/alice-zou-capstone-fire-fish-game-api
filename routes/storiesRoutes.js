import express from "express";
import { getStoriesByUser, saveStory } from "../controllers/storiesController.js";

const router = express.Router();

router.get("/:user_id", getStoriesByUser);

router.post("/", saveStory);

export default router;