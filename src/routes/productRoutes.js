const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authenticateToken = require('../middleware/authMiddleware');

router.post('/', productController.createProduct);
router.get('/byBrand/:brandId', productController.getProductByBrand);
router.get('/byCategory/:categoryId', productController.getProductByCategory);
router.patch('/:productId', productController.updateProduct);
router.delete('/:productId', productController.deleteProduct);

module.exports = router;
