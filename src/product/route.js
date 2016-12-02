'use strict';

const Router = require('koa-router');
const Controller = require('src/product/controller');

const router = new Router();

router.get('/products', Controller.getProducts);
router.get('/products/:id', Controller.getProductById);
router.get('/checkout/customer_info/:id', Controller.getCustomerInfoById);
router.get('/checkout/payment_info/:id', Controller.getPaymentInfoById);

module.exports = router;
