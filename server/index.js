const express = require('express');
const path = require('path');
const productAPI = require('../helpers/productsAPI');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public/dist')));

app.get('/:productId', (req, res) => {
  const { productId } = req.params;
  productAPI.getProductInfo(productId, (err, productInfo) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(productInfo);
    }
  });
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
