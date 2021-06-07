const axios = require('axios');
const config = require('./config');

// Gets reviews for a specific product
// Pass in product ID to get that data

const getAtelierReview = (ID) => {
  const options = {
    url: `${config.APIURL}reviews/?product_id=${ID}`,
    headers: {
      Authorization: config.APITOKEN,
    },
  };

  axios(options)
    .then((res) => {
      // eslint-disable-next-line no-console
      console.log(res.data);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('Error: ', err);
    });
};

const getAverageRatingById = (ID) => {
  const options = {
    url: `${config.APIURL}reviews/?product_id=${ID}`,
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
      return avg;
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('Error: ', err);
    });
};

// // product id for Slacker's Slacks
// const productID = 25170;

// // getAtelierReview(productID);
// getAverageRatingById(25170);

module.exports = {
  getAtelierReview,
  getAverageRatingById,
};
