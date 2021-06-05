const axios = require('axios');
const config = require('./config');

// Gets reviews for a specific product
// Pass in product ID to get that data

const getAtelierReviews = (ID) => {
  const options = {
    url: `${config.APIURL}reviews`,
    headers: {
      Authorization: config.APITOKEN,
    },
  };

  axios.get(`/?product_id=${ID}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};
// product id for Slacker's Slacks
const productID = 25170;

getAtelierReviews(productID);

module.exports = {
  getAtelierReviews,
};
