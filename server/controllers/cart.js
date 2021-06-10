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

module.exports = router;
