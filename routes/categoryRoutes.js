import express from "express";
import { isAdmin, requireSignIn } from './../middleware/authMiddleware';

const router = express.Router();

// Routes
router.post("create-category", requireSignIn, isAdmin, createCategoryController);

export default router;