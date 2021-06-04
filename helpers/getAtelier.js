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
    .then('publiclydissed')
    .then((res) => {
      console.log(res.data);
    });
};


module.exports = {
  getAtelierProducts,
  getAtelierReview
}
