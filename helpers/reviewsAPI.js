const axios = require('axios');
const config = require('./config');

// Gets all reviews for a specific product
// Pass in product id to get that data

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

      // Helper function to calculate the average rating for the product
      const average = (arr) => {
        let sum = 0;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < arr.length; i++) {
          sum += ratings[i];
        }
        return sum / (arr.length);
      };
      // Store the average rating, rounded to 2 decimals
      // eslint-disable-next-line no-unused-vars
      const avg = Math.round(average(ratings) * 100) / 100;
      // eslint-disable-next-line no-console
      // console.log(avg); // should return 3.67 for slacker's slacks
      callback(null, avg);
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
  getAllReviews,
  getAverageRating,
};
