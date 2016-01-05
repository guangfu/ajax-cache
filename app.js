'use strict';

let http = require('http');
let path = require('path');
let koa = require('koa');
let serve = require('koa-static');
let router = require('koa-router')();
let routes = require('./routes');

let app = koa();
let debug = process.env.NODE_ENV !== 'production';
let port = process.env.port || 3000;

routes(router, app);

app.use(serve(path.resolve(__dirname, 'src')));
app.use(router.routes());


app = http.createServer(app.callback());
app.listen(port, '0.0.0.0', () => {
    console.log('app is listening %s', port);
});