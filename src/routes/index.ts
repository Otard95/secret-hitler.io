import { Request, Response, NextFunction } from "express";

/*jshint esversion: 6 */
/*jshint node: true */

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req : Request, res : Response) {
  res.render('index', {title: 'Secret Hitler'});
});

module.exports = router;
