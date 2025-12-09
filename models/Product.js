// models/Product.js

const mongoose = require('mongoose');

// Product Schema relationship to Store
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,            // Another data type
    required: true,
    min: 0                   // Validation
  },
  category: {
    type: String,
    enum: ["food", "clothing", "electronics"],  // Only allowed values
  },
  store: {
    type: mongoose.Schema.Types.ObjectId,        // Reference to Store
    ref: "Store",
    required: true                                // Must belong to a store
  },
});

// Export
module.exports = mongoose.model('Product', ProductSchema);
