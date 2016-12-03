'use strict';

const co = require('co');
const http = require('src/utils');
const api = require('src/properties');

//get customer info from Checkout service
exports.getCustomerInfoById = co.wrap(function* (id){
    return yield http.get(`${api['checkout-svc']}/customer_info/${id}`);
});

//get payment info from Checkout service
exports.getPaymentInfoById = co.wrap(function* (id){
    return yield http.get(`${api['checkout-svc']}/payment_info/${id}`);
});
