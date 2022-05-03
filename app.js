const http = require('http');

const express = require('express');

const app = express();

app.use('/add-products', (req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>The "Add Product" page</h1>');
});

app.use('/', (req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Hello from Nodejs Express learning</h1>');
});

app.listen(3000);
