const express = require('express');
const router = express.Router();

// Rout-> '/products'
router.get('/', (req, res) => {
  const products = [
    {
      name: 'Product 1',
      price: 100,
    },
    {
      name: 'Product 2',
      prince: 200,
    },
  ];
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Esto es un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 3',
    price: 300,
  });
});

module.exports = router;
