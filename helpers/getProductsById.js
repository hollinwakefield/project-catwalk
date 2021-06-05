const axios = require('axios');
const config = require('./config');

const getProductsById = (ID) => {
  const options = {
    url: `${config.APIURL}products/${ID}/`,
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

// getProductsById(25170);

module.exports = {
  getProductsById,
};
