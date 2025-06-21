import express from "express";
import {
  getTopCoders,
  getLeaderboard,
} from "../controllers/leaderboard.controller.js";

const router = express.Router();

router.get("/", getLeaderboard);
router.get("/top", getTopCoders);

export default router;
