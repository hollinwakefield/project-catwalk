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

const addToCart = (skuId) => {
  const options = {
    url: `${config.APIURL}cart`,
    headers: {
      Authorization: config.APITOKEN,
    },
  };

  // axios(options)
  //   .then((res) => {
  //     // eslint-disable-next-line no-console
  //     console.log(res.data);
  //   })
  //   .catch((err) => {
  //     // eslint-disable-next-line no-console
  //     console.log('ERROR: ', err);
  //   });
};

module.exports = {
  getCart,
  addToCart,
};
