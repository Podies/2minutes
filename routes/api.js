var express = require('express');
var router = express.Router();
var Question = require('../models/question');
var QuestionSet = require('../models/questionSet');
var User = require('../models/user');

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
    }

    if(!question) {
      return res.status(400).send({message: "No Question Found."});
    } 
    else {

      if(!solution) {
        if(question.userPreference.type == "boolean"){
          solution = question.userPreference.value === "true" ? "false" : "true" ;
        } else {
          solution = 0;
        }
      }
      var currentDate = (new Date()).toString().slice(0,10);
      // check if question.answers exist.
      if(question.answers[0]){
        // check for today's date.
        //  - yes, override that
        question.answers.forEach(function(answer) {
          // console.log(answer.date, new Date(currentDate).toISOString(), typeof answer.date, typeof new Date(currentDate) ,'called');
          if(answer.date.toString() == new Date(currentDate).toString()){
            answer.answer = solution;

            question.save(function(err, savedAnswer) {
              if(err) {
               throw err;
              }
              // console.log("OverWitten answer", savedAnswer);
              res.json({question: savedAnswer});
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
          res.json({question: savedAnswer});
        });
      }
      
      
      
    }
  })
});

router.get('/result/daily/:userId', function(req, res) {
  var date = req.body.date;
  var userId = req.params.userId;
  User.findOne({_id: userId}).exec(function(err, user) {
    if(err) { throw err; }
    if(!user) {
      return res.status(400).send({message: "No User Found."});
    }
    QuestionSet.findOne({_id: user.questionSetId}).exec(function(err, questionSet) {
      if(err) { throw err; }
      var total = questionSet.questions.length;
      // questionSet.questions.forEach(function(question) {
      //   Question.findOne({_id: question}).exec(function(err, single) {
      //     single.answers.forEach(function(answer) {
      //       // console.log(typeof answer.date, typeof new Date("2001-01-22T18:30:00.000Z"), "date check" );
      //       if(answer.date.toString() == new Date("2001-01-22T18:30:00.000Z").toString()){
      //          if(single.userPreference.type == "boolean") {
      //           if(single.userPreference.value == answer.answer) {
      //             correct++;
                  
      //           }
      //          } else {
      //           if(answer.answer >= single.userPreference.value) {
      //             correct++;
      //             console.log(correct);
      //           }
      //          }
      //       } else {
      //         // return res.status(400).send({message:"No Question Answered on this date"});
      //       }
      //     });
      //   });
      // });

      Question.find({ _id: { $in: questionSet.questions }}).exec(function(err, questions){
        var correct = 0;
        questions.forEach(function(single, i){
          single.answers.forEach(function(answer){
            if(answer.date.toString() == new Date("2001-01-24T18:30:00.000Z").toString()){
              if(single.userPreference.type == "boolean") {
                if(single.userPreference.value == answer.answer) {
                  correct++;
                }
               } else {
                if(answer.answer >= single.userPreference.value) {
                  correct++;
                }
               }
            } else {
              // return res.status(400).send({message:"No Question Answered on this date"});
            }
          })
        });
         var percentage = (correct * 100)/total;
         console.log(correct, total, "Correct Score is", percentage+ "%");
         res.json({"Correct Score in Percentage: ": percentage});
      });
    });
  });
});


module.exports = router;