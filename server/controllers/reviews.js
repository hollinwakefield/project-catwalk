const express = require('express');
const router = express.Router();
const reviews = require('../../helpers/reviewsAPI.js');

// potential middleware for handling reviews from api

// need to potentially handle other parameters? could also specify in req body
router.get('/:productId', (req, res) => {
  const { productId } = req.params;
  reviews.getAllReviews(productId, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

router.get('/averageRating/:productId', (req, res) => {
  const { productId } = req.params;
  reviews.getAverageRating(productId, (err, avg) => {
    if (err) {
      res.send(err);
    } else {
      res.send(JSON.stringify(avg));
    }
  });
});

module.exports = router;
