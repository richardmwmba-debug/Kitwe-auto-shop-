const express = require('express');
const router = express.Router();

// GET /api/products
router.get('/', (req, res) => {
  // TODO: Implement get all products
  res.json({ message: 'Get all products - to be implemented' });
});

// GET /api/products/:id
router.get('/:id', (req, res) => {
  // TODO: Implement get product by ID
  res.json({ message: 'Get product by ID - to be implemented' });
});

// POST /api/products
router.post('/', (req, res) => {
  // TODO: Implement create product
  res.json({ message: 'Create product - to be implemented' });
});

// PUT /api/products/:id
router.put('/:id', (req, res) => {
  // TODO: Implement update product
  res.json({ message: 'Update product - to be implemented' });
});

// DELETE /api/products/:id
router.delete('/:id', (req, res) => {
  // TODO: Implement delete product
  res.json({ message: 'Delete product - to be implemented' });
});

module.exports = router;
