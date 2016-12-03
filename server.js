'use strict';

require('app-module-path').addPath(__dirname);

const app = require('koa')();
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');
const product = require('src/product/route');
const checkout = require('src/checkout/route');

app.use(cors())
app.use(bodyParser())


// register api routes
app.use(product.routes());
app.use(checkout.routes());


// Start the app
app.listen(process.env.PORT || 3001);
console.log("app is listening at port :3001")
