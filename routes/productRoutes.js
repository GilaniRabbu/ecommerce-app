import express from "express";
import formidable from "express-formidable";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productFiltersController,
  productPhotoController,
  updateProductController,
} from "../controllers/productController.js";

const router = express.Router();

// Routes
// Create Product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController,
);

// Update Product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController,
);

// Get All Products
router.get("/get-product", getProductController);

// Get Single Product
router.get("/get-product/:slug", getSingleProductController);

// Get Photo
router.get("/product-photo/:pid", productPhotoController);

// Delete Product
router.delete("/product/:pid", deleteProductController);

// Filter Product
router.get("/product-filters", productFiltersController);

export default router;
