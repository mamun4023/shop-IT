const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const errorMiddleware = require('./middleware/errors');

const AuthRoute = require('./routes/auth');
const ProductRoute = require('./routes/products');

app.use(bodyParser.urlencoded({extended : true}))
// app.use(bodyParser.json())

app.use(express.json());

app.use('/api/v1', AuthRoute)
app.use('/api/v1', ProductRoute)


app.use(errorMiddleware);

module.exports = app;
