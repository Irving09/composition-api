'use strict';

const co = require('co');
const Adapter = require('src/checkout/adapter');
const Boom = require('boom');


exports.getCustomerInfoById = co.wrap(function* () {
    this.assert(
        !isNaN(this.params.id) && this.params.id > 0,
        400,
        `${this.params.id} is required`
    );

    try {
        //dummy data
        this.body = {
            "id":1,
            "first_name": "John",
            "last_name": "Diggle",
            "address": "123 Maple st",
            "city": "Starling",
            "state" : "AB",
            "zipcode": "43215",
            "phone" : "4325554444"
        }
        // this.body = yield Adapter.getCustomerInfoById(this.params.id);
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
        //dummy data
        this.body = {
            "id":1,
            "card_number": "3333444455559876",
            "expiration": "01/20",
            "security_code": 342,
            "full_name": "John Diggle"
        }
        // this.body = yield Adapter.getPaymentInfoById(this.params.id);
        this.status = 200;
    } catch (e) {
        this.throw(e.message);
    }
});

exports.getOrderFromCart = co.wrap(function* (next) {
    console.log("===== body: ", this.request.body)
    this.status = 200;
    this.body = {
        "message" : "post data successfull"
    }

    yield(next);
    // try {
    //     //dummy data
    //     this.body = {
    //         "status":200,
    //         "message":"successfully post data :)"
    //     }
    //     // this.body = yield Adapter.getPaymentInfoById(this.params.id);
    //     this.status = 200;
    // } catch (e) {
    //     this.throw(e.message);
    // }
})
