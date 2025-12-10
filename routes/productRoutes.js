// routes/productRoutes.js

const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/products.controller');

// GET all products
router.get('/', productCtrl.getProducts);

// GET one product
router.get('/:id', productCtrl.getProductById);

// CREATE product
router.post('/', productCtrl.createProduct);

// UPDATE product
router.put('/:id', productCtrl.updateProduct);

// DELETE product
router.delete('/:id', productCtrl.deleteProduct);

module.exports = router;
