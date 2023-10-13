const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Esto es la pagina principal de categorias');
});

module.exports = router;
