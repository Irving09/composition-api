'use strict';

require('app-module-path').addPath(__dirname);

const app = require('koa')();
const cors = require('koa-cors');
const product = require('src/product/route');

app.use(cors())

// register api routes
app.use(product.routes());

// Start the app
app.listen(process.env.PORT || 3001);