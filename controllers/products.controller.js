// controllers/productController.js
const Product = require('../models/Product'); 


// GET all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('store'); 
    // populate = replace storeId with full Store object
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET one product
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('store');
    if (!product)
      return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID' });
  }
};

// CREATE product
exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);  // create product doc
    const saved = await newProduct.save();     // save to DB
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message }); // validation issue
  }
};

// UPDATE product
exports.updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated)
      return res.status(404).json({ message: 'Product not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE product
exports.deleteProduct = async (req, res) => {
  try {
    const removed = await Product.findByIdAndDelete(req.params.id);
    if (!removed)
      return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID' });
  }
};
