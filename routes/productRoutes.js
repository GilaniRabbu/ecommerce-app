import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

const router = express.Router();

// Routes
router.post("/create-product", requireSignIn, isAdmin, createProductController);

export default router;
