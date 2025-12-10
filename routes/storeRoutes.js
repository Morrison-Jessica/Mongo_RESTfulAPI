// routes/storeRoutes.js

const express = require('express');
const router = express.Router();


const storeCtrl = require('../controllers/stores.controller');

// route: GET all stores
router.get('/', storeCtrl.getStores);

// route: GET one store
router.get('/:id', storeCtrl.getStoreById);

// route: CREATE store
router.post('/', storeCtrl.createStore);

// route: UPDATE store
router.put('/:id', storeCtrl.updateStore);

// route: DELETE store
router.delete('/:id', storeCtrl.deleteStore);

module.exports = router;
