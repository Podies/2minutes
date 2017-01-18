var express = require('express');
var router = express.Router();
var Question = require('../models/question');

router.get('/', function(req, res) {
  res.json({api:"Api here"});
});

module.exports = router;