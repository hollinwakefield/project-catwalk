const express = require('express');
const router = express.Router();
const productAPI = require('../../helpers/productsAPI.js');

router.get('/:productId', (req, res) => {
  const { productId } = req.params;
  productAPI.getProductInfo(productId, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// get all styles - Kate

// get related items - Chhuong

module.exports = router;