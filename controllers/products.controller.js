// controllers/products.controller.js

const Product = require('../models/Product');

// Create new product
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body); // Includes store ID
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("store");
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get one product
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("store");
    res.json(product);
  } catch (err) {
    res.status(404).json({ error: "Product not found" });
  }
};

// Update product
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete product
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ msg: "Product deleted" });
  } catch (err) {
    res.status(404).json({ error: "Product not found" });
  }
};
