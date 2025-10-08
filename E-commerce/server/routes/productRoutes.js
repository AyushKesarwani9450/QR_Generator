const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define routes for products
// GET /api/products -> Get all products
router.get('/', productController.getAllProducts);

// GET /api/products/:id -> Get a single product by ID
router.get('/:id', productController.getProductById);

// We will add POST, PUT, DELETE routes later (for admin)

module.exports = router;
