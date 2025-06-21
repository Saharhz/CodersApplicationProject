import express from "express";
import {
  createChallenge,
  getChallengeById,
  listCategories,
} from "../controllers/challenge.controller.js";
import { validateChallengeCreation } from "../validators/challengeValidator.js";

const router = express.Router();

router.post("/", validateChallengeCreation, createChallenge);
router.get("/categories", listCategories);
router.get("/:id", getChallengeById);

export default router;
