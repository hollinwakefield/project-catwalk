const express = require('express');
const path = require('path');
const products = require('./controllers/products');
const reviews = require('./controllers/reviews');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public/dist')));

app.use('/products', products);

app.use('/reviews', reviews);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
