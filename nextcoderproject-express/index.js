import express from "express";
import authRoutes from "./routers/auth.routers.js";
import { startDatabase } from "./config/db.js";
import cors from "cors";
import challengeRoutes from "./routers/challenge.routers.js";
import submissionRoutes from "./routers/submission.routers.js";
import leaderboardRoutes from "./routers/leaderboard.routers.js";
import statsRoutes from "./routers/stats.routers.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running!");
});

// Mount routes
app.use("/api/auth", authRoutes);
app.use("/api/challenges", challengeRoutes);
app.use("/api/submissions", submissionRoutes);
console.log("✔️ Submission routes loaded:", typeof submissionRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.use("/api/stats", statsRoutes);

const PORT = 5001;

app.listen(PORT, async () => {
  await startDatabase();
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
