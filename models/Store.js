// models/Store.js

const mongoose = require('mongoose');

// Store Schema defines Store looks like
const StoreSchema = new mongoose.Schema({
  name: {
    type: String,            // Data type
    required: true,          // Must be provided
    trim: true               // Clean whitespace
  },
  address: {
    type: String,
    required: true
  },
  isOpen: {
    type: Boolean,           // Different data type example
    default: true
  },
});

// Export model to be used in controllers
module.exports = mongoose.model('Store', StoreSchema);
