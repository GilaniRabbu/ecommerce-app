import express from "express";
import { isAdmin, requireSignIn } from "./../middleware/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  singleCategoryController,
  updateCategoryController
} from "../controllers/categoryController.js";

const router = express.Router();

// Routes
// Create Category
router.post("/create-category", requireSignIn, isAdmin, createCategoryController);

// Update Category
router.put("/update-category/:id", requireSignIn, isAdmin, updateCategoryController);

// Get All Category
router.get("/get-category", categoryController);

// Single Category
router.get("/single-category:slug", singleCategoryController);

export default router;
