const express = require('express');
const reviews = require('../../helpers/reviewsAPI.js');

const router = express.Router();

// potential middleware for handling reviews from api

// need to potentially handle other parameters? could also specify in req body
router.get('/getReviews/:productId/:totalReviews?/:sort?', (req, res) => {
  const { productId, totalReviews, sort } = req.params;

  reviews.getAllReviews(productId, totalReviews, sort)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(500).send(err));
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

router.get('/meta/:productId', (req, res) => {
  const { productId } = req.params;
  reviews.getReviewMetaData(productId, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
