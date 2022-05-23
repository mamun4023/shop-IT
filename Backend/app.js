const express = require('express');
const app = express();

const ProductRoute = require('./routes/products');

app.use(express.json());

app.use('/api/v1', ProductRoute)


module.exports = app;
