'use strict';

const co = require('co');
const http = require('src/utils');
const api = require('src/properties');

exports.getProducts = co.wrap(function* (options) {
    let endpointUri = `${api['listview-svc']}/products`;

    let queries = Object.keys(options);
    if (queries.length) {
        endpointUri += '?';
        endpointUri += `${queries[0]}=${options[queries[0]]}`;
    }

    for (let i = 1; i < queries.length; i++) {
        endpointUri += '&';
        endpointUri += `${queries[i]}=${options[queries[i]]}`;
    }

    return yield http.get(endpointUri);
});

exports.getProductById = co.wrap(function* (id) {
    return yield http.get(`${api['listview-svc']}/products/${id}`);
});