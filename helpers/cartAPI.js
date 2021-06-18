const axios = require('axios');
const config = require('./config');

const getCart = (callback) => {
  const options = {
    url: `${config.APIURL}cart`,
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
      console.log('ERROR: ', err);
    });
};

const addToCart = (skuId, quantity) => {
  const options = {
    url: `${config.APIURL}cart`,
    method: 'POST',
    headers: {
      Authorization: config.APITOKEN,
    },
    data: {
      sku_id: skuId,
      count: quantity,
    },
  };

  return axios(options);
};

module.exports = {
  getCart,
  addToCart,
};
