import express from "express";
import cors from "cors";
import "dotenv/config";
import scoreboardRoutes from "./routes/scoreboardRoutes.js";
import categoriesRoutes from "./routes/categoriesRoutes.js";
import sentencesRoutes from "./routes/sentencesRoutes.js";
import randomAnimalRoutes from "./routes/animalsRoutes.js";
import funFactsRoutes from "./routes/funFactsRoutes.js";
import storiesRoutes from "./routes/storiesRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const { PORT, BACKEND_URL } = process.env;

app.use(cors());
app.use(express.json());
app.use("/images", express.static("public/images"));

app.use("/api/scoreboard", scoreboardRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/sentences", sentencesRoutes);
app.use("/api/random-animal", randomAnimalRoutes);
app.use("/api/fun-facts", funFactsRoutes);
app.use("/api/stories", storiesRoutes);
app.use("/api/users", userRoutes);

app.get("/", (_req, res) => {
  res.send("Firefish backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on ${BACKEND_URL}:${PORT}`);
});
