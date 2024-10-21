import express from "express";
import cors from "cors";
import "dotenv/config";
import scoreboardRoute from "./routes/scoreboardRoute.js";
import defaultSentenceRoutes from "./routes/defaultSentenceRoutes.js";
import customSentenceRoutes from "./routes/customSentenceRoutes.js";

const app = express();
const { PORT, BACKEND_URL } = process.env;

app.use(cors());
app.use(express.json());

app.use("/api/scoreboard", scoreboardRoute);
app.use("/api/default-sentences", defaultSentenceRoutes);
app.use("/api/custom-sentences", customSentenceRoutes);

app.get("/", (_req, res) => {
  res.send("Firefish backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on ${BACKEND_URL}:${PORT}`);
});
