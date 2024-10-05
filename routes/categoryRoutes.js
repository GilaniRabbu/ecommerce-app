import express from "express";
import { isAdmin, requireSignIn } from "./../middleware/authMiddleware.js";
import { createCategoryController, updateCategoryController } from "../controllers/categoryController.js";

const router = express.Router();

// Routes
// Create Category
router.post("/create-category", requireSignIn, isAdmin, createCategoryController);

// Update Category
router.put("/update-category/:id", requireSignIn, isAdmin, updateCategoryController);

export default router;
