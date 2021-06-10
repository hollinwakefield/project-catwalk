const express = require('express');

const router = express.Router();
const productAPI = require('../../helpers/productsAPI');

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
router.get('/:productId/related', (req, res) => {
  const { productId } = req.params;
  productAPI.getRelatedItems(productId, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = router;
