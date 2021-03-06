'use strict';

const co = require('co');
const Adapter = require('src/product/adapter');
const Boom = require('boom');

const LIMIT = 20;

exports.getProducts = co.wrap(function* () {
    this.body = yield Adapter.getProducts(this.query);
});

exports.getProductById = co.wrap(function* () {
    this.assert(
        !isNaN(this.params.id) && this.params.id > 0,
        401,
        `Invalid product ${this.params.id}`
    );

    try {
        this.body = yield Adapter.getProductById(this.params.id);
        this.status = 200;
    } catch(error) {
        this.throw(error.message);
    }
});
