"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 *  ## Base web-server
 */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
// Import Routes
const index = require('./routes/index');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// Use static forlder and logger
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
// Use index route
app.use('/', index);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error', { err });
});
module.exports = app;
