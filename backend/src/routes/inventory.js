const express = require('express');
const router = express.Router();

// GET /api/inventory
router.get('/', (req, res) => {
  // TODO: Implement get inventory
  res.json({ message: 'Get inventory - to be implemented' });
});

// POST /api/inventory/receive
router.post('/receive', (req, res) => {
  // TODO: Implement receive shipment
  res.json({ message: 'Receive shipment - to be implemented' });
});

// POST /api/inventory/adjust
router.post('/adjust', (req, res) => {
  // TODO: Implement adjust stock
  res.json({ message: 'Adjust stock - to be implemented' });
});

module.exports = router;
