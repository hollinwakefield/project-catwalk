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
  // const { skuId, quantity } = req.body;
  // console.log('sku id', skuId);
  // console.log('', quantity);
  console.log(req);
  // cartAPI.addToCart(skuId, quantity)
  //   .then((cartRes) => {
  //     res.status(201).send(cartRes.data);
  //   })
  //   .catch((err) => {
  //     res.send(err);
  //   });
});

module.exports = router;
