import express from "express";
import {
  registerCoder,
  registerManager,
  loginCoder,
  loginManager,
  getProfile,
  updateProfile,
} from "../controllers/auth.controller.js";

import {
  validateRegistration,
  validateLogin,
} from "../validators/authvalidator.js";

const router = express.Router();

// Registration routes
router.post("/register/coder", validateRegistration, registerCoder);
router.post("/register/manager", validateRegistration, registerManager);

// Login routes
router.post("/login/coder", validateLogin, loginCoder);
router.post("/login/manager", validateLogin, loginManager);

// Profile endpoints
router.get("/profile/:role/:id", getProfile);
router.put("/profile/:role/:id", updateProfile);

export default router;
