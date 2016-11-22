'use strict';

const Router = require('koa-router');
const Controller = require('src/product/controller');

const router = new Router();

router.get('/products', Controller.getProducts);
router.get('/products/:id', Controller.getProductById);

module.exports = router;