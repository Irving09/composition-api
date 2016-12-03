'use strict';

const co = require('co');
const Adapter = require('src/checkout/adapter');
const parse = require('co-body');


exports.getCustomerInfoById = co.wrap(function* () {
    this.assert(
        !isNaN(this.params.id) && this.params.id > 0,
        400,
        `${this.params.id} is required`
    );
    try {
        this.body = yield Adapter.getCustomerInfoById(this.params.id);
        this.status = 200;
    } catch (e) {
        this.throw(e.message);
    }
});

exports.getPaymentInfoById = co.wrap(function* () {
    this.assert(
        !isNaN(this.params.id) && this.params.id > 0,
        400,
        `${this.params.id} is required`
    );

    try {
        this.body = yield Adapter.getPaymentInfoById(this.params.id);
        this.status = 200;
    } catch (e) {
        this.throw(e.message);
    }
});

exports.getOrderFromCart = co.wrap(function *( next) {
    var jsondata = yield parse(this)
    console.log("==== post data: ", jsondata)

    if (jsondata) {

        this.body = {
            "status":"success"
        }
        this.status = 200;
    } else {
        this.body = "empty payload"
        this.status = 400;
        return;
    }

    yield(next)

})
