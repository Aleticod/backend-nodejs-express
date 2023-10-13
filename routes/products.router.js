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
  if (id === '999') {
    res.status(404);
    res.json({
      message: 'Not found',
    });
  } else {
    res.status(200);
    res.json({
      id,
      name: 'Product 3',
      price: 300,
    });
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201);
  res.json({
    message: 'Created',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Updated',
    data: body,
    id,
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Total updated',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'Deleted',
    id,
  });
});

module.exports = router;
