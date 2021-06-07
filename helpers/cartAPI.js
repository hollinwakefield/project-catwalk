const axios = require('axios');
const config = require('./config');

const getCart = () => {
  const options = {
    url: `${config.APIURL}cart`,
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

const addToCart = (sku_id) => {
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