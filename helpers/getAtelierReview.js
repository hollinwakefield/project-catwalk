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
// product id for Slacker's Slacks
// const productID = 25170;

// getAtelierReviews(productID);

module.exports = {
  getAtelierReview,
};
