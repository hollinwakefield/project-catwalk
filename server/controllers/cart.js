const express = require('express');
const cartAPI = require('../../helpers/cartAPI.js');

const router = express.Router();

router.get('/', (req, res) => {
  cartAPI.getCart((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.post('/', (req, res) => {
  const { sku_id, count } = req.body;
  cartAPI.addToCart(sku_id, count)
    .then((cartRes) => {
      res.status(201).send(cartRes.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
