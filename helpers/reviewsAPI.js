const axios = require('axios');
const config = require('./config');

// Helper function to calculate the average rating for the product
const average = (arr) => {
  let sum = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const avg = (Math.round(sum / (arr.length)) * 100) / 100;
  return avg;
};

// ================== API Helpers ============================= //

const getAllReviews = (id, callback) => {
  const options = {
    url: `${config.APIURL}reviews/?product_id=${id}`,
    headers: {
      Authorization: config.APITOKEN,
    },
  };

  axios(options)
    .then((res) => {
      // eslint-disable-next-line no-console
      callback(null, res.data);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      callback(err);
    });
};

const getAverageRating = (id, callback) => {
  const options = {
    url: `${config.APIURL}reviews/?product_id=${id}`,
    headers: {
      Authorization: config.APITOKEN,
    },
  };

  axios(options)
    .then((res) => {
      // store the results array from the data that was recieved
      // console.log(res.data);
      const resultsArr = res.data.results;
      // Make an array of ratings
      const ratings = resultsArr.map((result) => result.rating);
      const avg = average(ratings);
      callback(null, avg);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      callback(err);
    });
};

const getReviewMetaData = (id, callback) => {
  const options = {
    url: `${config.APIURL}reviews/meta/?product_id=${id}`,
    headers: {
      Authorization: config.APITOKEN,
    },
  };

  axios(options)
    .then((res) => {
      // store the results array from the data that was recieved
      // console.log(res.data);
      const results = res.data.ratings;
      // Make an array of ratings
      let totalRating = 0;
      let reviews = 0;
      let recommended = '';

      const array = Object.keys(results);
      array.forEach((rating) => {
        totalRating += (Number(results[rating]) * Number(rating));
        reviews += Number(results[rating]);
      });

      recommended = `${((Number(res.data.recommended.true) / reviews) * 100).toFixed(0)}%`;
      const avg = Number((totalRating / reviews).toFixed(1));
      const data = {
        avg,
        reviews,
        recommended,
      };
      callback(null, data);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      callback(err);
    });
};

// product id for Slacker's Slacks
// const id = 25170;

// getAllReviews(id);
// getAverageRatingById(25170);

module.exports = {
  average,
  getAllReviews,
  getAverageRating,
  getReviewMetaData,
};
