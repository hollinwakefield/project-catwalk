const express = require('express');
const path = require('path');
const reviews = require('./controllers/reviews');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public/dist')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/reviews', reviews);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
