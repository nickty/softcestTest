/** @format */

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/getBitcoinInfo', (req, res) => {
  const { currency } = req.body;

  res.send({ error: 'not in the array' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
