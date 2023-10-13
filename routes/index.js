const routerProducts = require('./products.router.js');
const routerUsers = require('./users.router.js');
const routerCategories = require('./categories.router.js');

function routerAPI(app) {
  app.use('/products', routerProducts);
  app.use('/users', routerUsers);
  app.use('/categories', routerCategories);
}

module.exports = routerAPI;
