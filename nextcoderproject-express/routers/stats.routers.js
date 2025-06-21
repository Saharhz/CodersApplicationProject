import express from "express";
import { getSolvedStats } from "../controllers/stats.controller.js";

const router = express.Router();

router.get("/solved/:coderId", getSolvedStats);

export default router;
