'use strict';

const Router = require('koa-router');
const Controller = require('src/checkout/controller');

const router = new Router();

router.get('/checkout/customer_info/:id', Controller.getCustomerInfoById);
router.get('/checkout/payment_info/:id', Controller.getPaymentInfoById);
router.post('/checkout/order', Controller.getOrderFromCart);

module.exports = router;
