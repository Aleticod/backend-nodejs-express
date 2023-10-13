const express = require('express');
const routerProducts = require('./products.router.js');
const routerUsers = require('./users.router.js');
const routerCategories = require('./categories.router.js');

function routerAPI(app) {
  const router = express.Router()
  router.use('/products', routerProducts);
  router.use('/users', routerUsers);
  router.use('/categories', routerCategories);
  app.use('/api/v1', router)
}

module.exports = routerAPI;
