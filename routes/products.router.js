const express = require('express');
const router = express.Router();

const ProductsService = require('../services/products.service');

const service = new ProductsService();

// Rout-> '/products'
router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Esto es un filter');
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201);
  res.json({
    message: 'Created',
    data: newProduct,
  });
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updatedProduct = await service.update(id, body);
  res.json(updatedProduct);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updatedProduct = await service.update(id, body);
  res.json(updatedProduct);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await service.delete(id);
  res.json(deletedProduct);
});

module.exports = router;
