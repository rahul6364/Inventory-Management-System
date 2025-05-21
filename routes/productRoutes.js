const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Create a new product
router.post('/', productController.createProduct);

// Get all products
router.get('/', productController.getAllProducts);

// Get low stock products
router.get('/low-stock', productController.getLowStockProducts);

// Get a specific product
router.get('/:id', productController.getProductById);

// Update a product
router.put('/:id', productController.updateProduct);

// Delete a product
router.delete('/:id', productController.deleteProduct);

// Restock a product
router.post('/:id/restock', productController.restockProduct);

module.exports = router; 