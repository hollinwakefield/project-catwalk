const axios = require('axios');
const config = require('./config');

// Gets all the products in the API

const getAllProducts = () => {
  const options = {
    url: `${config.APIURL}products`,
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
      console.log('ERROR: ', err);
    });
};

const getProductInfo = (productId, callback) => {
  const options = {
    url: `${config.APIURL}products/${productId}/`,
    headers: {
      Authorization: config.APITOKEN,
    },
  };

  axios(options)
    .then((res) => {
      // eslint-disable-next-line no-console
      // console.log(res.data);
      callback(null, res.data);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('Error: ', err);
    });
};

const getAllStyles = (productId, callback) => {
  const options = {
    url: `${config.APIURL}products/${productId}/styles`,
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
      console.log('Error: ', err);
    });
};

const getRelatedItems = (productId, callback) => {
  const options = {
    url: `${config.APIURL}products/${productId}/related`,
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
      console.log('Error: ', err);
    });
};

module.exports = {
  getAllProducts,
  getProductInfo,
  getAllStyles,
  getRelatedItems,
};
