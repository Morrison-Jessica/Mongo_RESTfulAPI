// controllers/stores.controller.js

const Store = require('../models/Store');

// Create new store
exports.createStore = async (req, res) => {
  try {
    const store = await Store.create(req.body); // Mongoose create()
    res.status(201).json(store);   // Respond with new store
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all stores
exports.getStores = async (req, res) => {
  try {
    const stores = await Store.find();   // Return all stores
    res.json(stores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get one store
exports.getStoreById = async (req, res) => {
  try {
    const store = await Store.findById(req.params.id);
    res.json(store);
  } catch (err) {
    res.status(404).json({ error: "Store not found" });
  }
};

// Update store
exports.updateStore = async (req, res) => {
  try {
    const store = await Store.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }  // Return updated version
    );
    res.json(store);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete store
exports.deleteStore = async (req, res) => {
  try {
    await Store.findByIdAndDelete(req.params.id);
    res.json({ msg: "Store deleted" });
  } catch (err) {
    res.status(404).json({ error: "Store not found" });
  }
};

// GET /api/v1/stores?page=1&limit=3
exports.getStores = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const skip = (page - 1) * limit;

  const stores = await Store.find()
    .skip(skip)
    .limit(limit);

  res.status(200).json(stores);
};
