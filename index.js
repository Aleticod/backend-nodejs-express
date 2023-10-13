const express = require('express');
const routerAPI = require('./routes/index');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello world!');
});

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

app.listen(port, () => {
  console.log('Mi port es ' + port);
});
