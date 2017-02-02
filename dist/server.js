'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');

var db = mongoose();
var app = express();
passport();

app.listen(3000);
module.exports = app;

console.log("Server running at http://localhost:3000");
//# sourceMappingURL=server.js.map