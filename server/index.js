const express = require('express');
const compression = require('compression');
const path = require('path');
const bodyParser = require('body-parser');
const products = require('./controllers/products');
const reviews = require('./controllers/reviews');
const cart = require('./controllers/cart');

const app = express();
const port = 3000;

app.use(compression());
app.use(express.static(path.join(__dirname, '../public/dist')));
app.use(bodyParser.json());

app.use('/products', products);
app.use('/reviews', reviews);
app.use('/cart', cart);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
