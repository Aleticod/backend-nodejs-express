const express = require('express');
const routerAPI = require('./routes/index');
const { logErrors, errorHandler } = require('./middlewares/error.handler');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello world!');
});

// Recieve json with posst
app.use(express.json());

// App use routing
routerAPI(app);

// app.get('/categories/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId } = req.params;
//   res.json({
//     categoryId,
//     productId,
//   });
// });

// app.get('/users', (req, res) => {
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset,
//     });
//   } else {
//     res.send('No hay parametros');
//   }
// });

// App use a middlewares
app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port es ' + port);
});
