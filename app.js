/** @format */
const express = require('express');
const app = express();
const request = require('request');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/getBitcoinInfo', (req, res) => {
  let { currency } = req.body;
  currency = currency.toUpperCase();
  const myRes = [];

  if (currency === 'USD' || currency === 'EUR') {
    request(
      `https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`,
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          const data = JSON.parse(body);

          myRes.push({ 'current rate': data.bpi });

          request(
            'https://api.coindesk.com/v1/bpi/historical/close.json?start=2022-05-29&end=2022-06-29&curren',
            function (error, response, body) {
              if (!error && response.statusCode == 200) {
                const data = JSON.parse(body);
                const all = data.bpi;
                let arr = Object.values(all);
                console.log(arr);
                myRes.push({
                  Maximum: Math.max(...arr),
                  Minimum: Math.min(...arr),
                });
              }
              res.send(myRes);
            }
          );
        }
        // res.send(myRes);
      }
    );
  } else {
    res.send('Currency not supported');
  }
});

module.exports = app;
