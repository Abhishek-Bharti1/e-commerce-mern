
const express = require('express');
const { createProduct, getProducts, getProductById,searchProducts } = require('../controllers/product');
const router = express.Router();

router.post('/products', createProduct);
router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.get('/search', searchProducts);
module.exports = router;
