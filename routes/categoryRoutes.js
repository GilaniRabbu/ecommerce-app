import express from "express";
import { isAdmin, requireSignIn } from "./../middleware/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  singleCategoryController,
  updateCategoryController,
  deleteCategoryController,
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

// Delete Category
router.delete("/delete-category/:id", requireSignIn, isAdmin, deleteCategoryController);

export default router;
