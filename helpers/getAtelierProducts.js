const axios = require('axios');
const config = require('./config');

const getAtelierProducts = () => {
  const options = {
    url: `${config.APIURL}products`,
    headers: {
      Authorization: config.APITOKEN,
    },
  };

  axios(options)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log('ERROR: ', err);
    });
};

// getAtelierProducts();

module.exports = {
  getAtelierProducts,
};
