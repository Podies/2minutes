var express = require('express');
var router = express.Router();
var Question = require('../models/question');
var QuestionSet = require('../models/questionSet');
var User = require('../models/user');
var Result = require('../models/result');

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
  var date = req.body.date;
  var newdate = new Date(date).toISOString();

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
      var currentDate = (new Date()).toISOString().slice(0,10);

      //check if question.answers exist.
      if(question.answers[0]){
      //console.log("called", date, newdate);
      //   // check for today's date.
      //   //  - yes, override that
      //   question.answers.forEach(function(answer) {
      //     // console.log(answer.date, new Date(currentDate).toISOString(), typeof answer.date, typeof new Date(currentDate) ,'called');
      //     if(answer.date.toString() == new Date(newdate).toString()){
      //       answer.answer = solution;
      //       console.log("OverWitten answer", solution);
          

      //       question.save(function(err, savedAnswer) {
      //         if(err) {
      //          throw err;
      //         }
      //          console.log("OverWitten answer", savedAnswer);
      //         res.json({question: savedAnswer});
      //       });
      //     } 
      //   });
        if(question.answers[0].date.toString() == new Date(currentDate).toString()) {
          question.answers[0].answer = solution;
          console.log("OverWitten answer", solution);
        } else {
          question.answers.unshift({
          // for trial, we put newdate otherwide currentDate always
          date: new Date(newdate),
          answer: solution
          });
          console.log("New answer saved", solution);
        }
        
        question.save(function(err, savedNewAnswer) {
          if(err) {
           throw err;
          }
        res.json({question: savedNewAnswer});
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
          console.log("First answer Saved", savedAnswer);
          res.json({question: savedAnswer});
        });
      }
      
      
      
    }
  })
});

router.get('/result/daily/:userId', function(req, res) {
  // var date = req.params.date;
  // var specificDate = new Date(date).toISOString().slice(0, 10);
  var userId = req.params.userId;
  User.findOne({_id: userId}).exec(function(err, user) {
    if(err) { throw err; }
    if(!user) {
      return res.status(400).send({message: "No User Found."});
    }
    QuestionSet.findOne({_id: user.questionSetId}).exec(function(err, questionSet) {
      if(err) { throw err; }
      var total = questionSet.questions.length;
      var currentDate = (new Date()).toISOString().slice(0,10);

      Question.find({ _id: { $in: questionSet.questions }}).exec(function(err, questions){
        var correct = 0;
        questions.forEach(function(single, i){
          single.answers.forEach(function(answer){
            // console.log("called", answer.date.toISOString(), new Date(currentDate).toISOString())
            if(answer.date.toISOString() === new Date(currentDate).toISOString()){
              // console.log(answer.date);
              if(single.userPreference.type == "boolean") {
                if(single.userPreference.value == answer.answer) {
                  correct++;
                }
              } else {
                if(answer.answer >= single.userPreference.value) {
                  correct++;
                }
              }
            } 
          });
        });
        var percentage = (correct * 100)/total;
        console.log(correct, total, "Correct Score is", percentage+ "%");
        Result.findOne({userId: user._id}).exec(function(err, result) {
          // console.log(result);
          if(err) { throw err; }
          if(!result) {
            var newResult = new Result();
            newResult.userId = user._id;
            newResult.daily.push({
                date: new Date(currentDate),
                percentage : percentage
              });
            newResult.save(function(err, savedResult) {
              if(err) { throw err; }
              // console.log("Result and user saved", savedResult);
            });
          } else {
            if(result.daily[0]){
              // console.log("DAte called", result.daily[0].date.toISOString(), new Date(currentDate).toISOString())
              if(result.daily[0].date.toISOString() === new Date(currentDate).toISOString()){
                result.daily[0].date = new Date(currentDate);
                result.daily[0].percentage = percentage;
                //  console.log("Overwitten");
              } else {
                result.daily.unshift({
                  date: new Date(currentDate),
                  percentage : percentage
                });
              }
              result.save(function(err, savedResult) {
                if(err) { throw err; }
                console.log("Result saved", savedResult);
              })
            }
          }
        });
       res.json({"Correct Score in Percentage: ": percentage});
      });
    });
  });
});

router.get('/result/weekly/questionwise/:userId/:fromDate/:toDate', function(req, res) {
  var userId = req.params.userId;
  var toDate = new Date(req.params.toDate);
  var fromDate  = new Date(req.params.fromDate);
  // console.log("Called date", toDate, fromDate); 
  User.findOne({_id: userId}).exec(function(err, user) {
    if(err) { throw err; }
    QuestionSet.findOne({_id: user.questionSetId}).exec(function(err, questionSet) {
      if(err) { throw err; }
      const resultPerQuestion = [];
      const finalResult = {correct : 0, total : 0 };
      Question.find({_id: {$in :questionSet.questions}}).exec(function(err, questions) {
        if(err) { throw err; }
        questions.forEach(function(single, i) {
          var total = single.answers.length;
          var correct = 0;
          single.answers.forEach(function(answer, i) {
            if(answer.date.toISOString() >= new Date(fromDate).toISOString() && answer.date.toISOString() <= new Date(toDate).toISOString()){
              if(single.userPreference.type == "boolean") {
                if(single.userPreference.value == answer.answer) {
                  correct++;
                }
               } else {
                if(answer.answer >= single.userPreference.value) {
                  correct++;
                }
               }
            }
          });
          var percentage = (correct * 100)/total;
          resultPerQuestion.push({ _id: single._id, name: single.name, correct: correct, total: total, percentage: percentage});
        });
        // console.log(resultPerQuestion);
        resultPerQuestion.forEach(function(rpq) {
          finalResult.total += rpq.total;
          finalResult.correct += rpq.correct;
        });
        finalResult.percentage = (finalResult.correct * 100)/finalResult.total;
        res.json({ result: resultPerQuestion,finalResult: finalResult });
      });
    });
  });
});


module.exports = router;