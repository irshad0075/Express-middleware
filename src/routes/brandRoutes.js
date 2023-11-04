const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brandController');
const authenticateToken = require('../middleware/authMiddleware');

router.post('/', brandController.createBrand);
router.get('/byName/:name', brandController.getBrandByName);
router.get('/:brandId', brandController.getBrandById);
router.patch('/:brandId', brandController.updateBrand);
router.delete('/:brandId', brandController.deleteBrand);

module.exports = router;
