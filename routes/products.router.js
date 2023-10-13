const express = require('express');
const router = express.Router();

const ProductsService = require('../services/products.service')

const service = new ProductsService();

// Rout-> '/products'
router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Esto es un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product)
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
