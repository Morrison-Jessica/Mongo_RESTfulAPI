// routes/routes.api.js

// ==== ADHD Friendly Method - this Eliminates the confusion between multiple 'index.js' files... ====

const express = require('express');

// Create master router
const router = express.Router();

// Import each route group
const storeRoutes = require('./storeRoutes');
const productRoutes = require('./productRoutes');

// Map them under a single API prefix
router.use('/stores', storeRoutes);      // -> /api/v1/stores
router.use('/products', productRoutes);  // -> /api/v1/products

// Export master router
module.exports = router;
