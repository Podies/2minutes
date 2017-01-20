var express = require('express');
var router = express.Router();
var Question = require('../models/question');
var QuestionSet = require('../models/questionSet')

router.get('/', function(req, res) {
  res.json({api:"Api here"});
});

router.get('/questionset/:userId', function(req, res) {
  QuestionSet.findOne({userId: req.params.userId}).populate('questions', 'name userPreference dateAdded', null, {sort: { 'dateAdded': -1 }}).exec(function(err, set) {
    if(err) {
      throw err;
    } else {
      res.json({questionSet: set || { questions: [] } });
    }
  });
});

router.post('/answer/:questionId', function(req, res) {
  var questionId = req.params.questionId;
  var solution = req.body.answer;
  Question.findOne({_id: questionId}).exec(function(err, question) {
    if(err) {
      throw err;
    } else {
      var currentDate = (new Date()).toString().slice(0,10);
      // check if question.answers exist.
      if(question.answers[0]){
        // check for today's date.
        //  - yes, override that
        question.answers.forEach(function(answer) {
          console.log(answer.date, new Date(currentDate).toISOString(), typeof answer.date, typeof new Date(currentDate) ,'called');
          if(answer.date.toString() == new Date(currentDate).toString()){
            answer.answer = solution;

            question.save(function(err, savedAnswer) {
              if(err) {
               throw err;
              }
              console.log("Overritten answer", savedAnswer);
            });
          }
        });
          
      } else {
        //  - no, make a new answer with today's date { date:, input: }
        question.answers.unshift({
          date: new Date(currentDate),
          answer: solution
        });
        question.save(function(err, savedAnswer) {
          if(err) {
            throw err;
          }
          console.log("New answer Saved", savedAnswer);
        });
      }
      
      
      
    }
  })
});


module.exports = router;