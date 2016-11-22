'use strict';

const co = require('co');
const http = require('src/utils');
const api = require('src/properties');

exports.getProducts = co.wrap(function* () {
    return yield http.get(`${api['listview-svc']}/products`);
});

exports.getProductById = co.wrap(function* (id) {
    return yield http.get(`${api['listview-svc']}/products/${id}`);
});