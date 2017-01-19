var express = require('express');
var router = express.Router();
var Question = require('../models/question');
var QuestionSet = require('../models/questionSet')

router.get('/', function(req, res) {
  res.json({api:"Api here"});
});

router.get('/questionset/:userId', function(req, res) {
  QuestionSet.findOne({userId: req.params.userId}).populate('questions', 'name userPreference').exec(function(err, set) {
    if(err) {
      throw err;
    } else {
      res.json({questionSet: set});
    }
  });
});


module.exports = router;