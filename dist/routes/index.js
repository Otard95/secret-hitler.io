"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*jshint esversion: 6 */
/*jshint node: true */
const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Secret Hitler' });
});
module.exports = router;
