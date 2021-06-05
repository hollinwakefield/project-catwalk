const axios = require('axios');
const config = require('./config');

const getRelatedItems = (ID) => {
  const options = {
    url: `${config.APIURL}products/${ID}`,
    headers: {
      Authorization: config.APITOKEN,
    },
  };
  axios(options)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log('Error: ', err);
    });
};

getRelatedItems(25170);

module.exports = {
  getRelatedItems,
};
