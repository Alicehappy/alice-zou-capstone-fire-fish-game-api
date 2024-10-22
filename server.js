import express from "express";
import cors from "cors";
import "dotenv/config";
import scoreboardRoutes from "./routes/scoreboardRoutes.js";
import categoriesRoutes from "./routes/categoriesRoutes.js";
import sentencesRoutes from "./routes/sentencesRoutes.js";

const app = express();
const { PORT, BACKEND_URL } = process.env;

app.use(cors());
app.use(express.json());

app.use("/api/scoreboard", scoreboardRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/default-sentences", sentencesRoutes);
app.use("/api/custom-sentences", sentencesRoutes);

app.get("/", (_req, res) => {
  res.send("Firefish backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on ${BACKEND_URL}:${PORT}`);
});
