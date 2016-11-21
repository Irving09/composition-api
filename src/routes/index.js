'use strict';

const Router = require('koa-router');
const co = require('co');

const router = new Router();

router.get('/', co.wrap(function* () {
    this.body = 'Hello Team!';
}));

module.exports = router;