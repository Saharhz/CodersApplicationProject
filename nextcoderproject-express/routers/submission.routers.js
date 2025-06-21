import express from "express";
import { createSubmission } from "../controllers/submission.controller.js";
import { validateSubmission } from "../validators/submissionValidator.js";

const router = express.Router();

router.post("/test", (req, res) => {
  res.send("✅ Test route working");
});

router.post("/", validateSubmission, createSubmission);

export default router;
