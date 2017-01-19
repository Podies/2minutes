var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Question = require('../models/question');
var QuestionSet = require('../models/questionSet');
var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/signup', function(req, res) {
  var name = req.body.firstName + " " + req.body.lastName;
  var email = req.body.email;
  var password = req.body.password;
  console.log(name, email, password);
  if(!name || !email || !password) {
    res.status(422).send({error: "Provide Valid Credentials"});
  } else {

     User.findOne({email: email}, function(err, user) {
       if(err) {
        console.log(err);
        } else {
          if(user) {
            res.status(422).send("User Already Availble");
          } else {
            var newUser = new User({
              email: email,
              name: name,
              password: password
            });
            newUser.save(function(err, savedUser) {
              // console.log(err, savedUser);
              res.redirect('/dashboard');
            })
          } 
        }
      });
    }
});

router.post('/login',function(req, res, next){
  passport.authenticate('local', function(err, user, userErrorMsg) {
    console.log('success', err, user)
    if(err) {
      next(err);
    }
    if(userErrorMsg) {
      res.json({ message: userErrorMsg.message})
    }
    if(user) {
      res.redirect('/dashboard');
    }
  })(req, res, next);
}); 

// Saving Questions to Database.
router.post('/question', function(req, res) {
  var name = req.body.name;
  var userPreference = req.body.userPreference;
  var userId = req.body.userId;
  // console.log("userId Field", userId);
  User.findOne({_id: userId}).exec(function(err, user) {
    // console.log(err, user);
    if(err) { throw err; }
    // console.log(user.questionSetId);
    if(user.questionSetId) {
      var newQuestion = new Question({
        questionSetId: user.questionSetId,
        name: name,
        userPreference: userPreference
      });
      newQuestion.save(function(err, savedQuestion) {
        if(err) { 
          throw err;
        } else {
          QuestionSet.findOne({_id: user.questionSetId}).exec(function(err, set) {
            var questionfromSet = set.questions;
            questionfromSet.push(savedQuestion._id);
            set.questios = questionfromSet;
            set.save(function(err, savedQuestionSet) {
              if(err) { throw err; }
              console.log("Saved QuestionSet");
            });
          });
        }
      });

    } else {

      var newQuestionSet = new QuestionSet({ userId: user._id });

      var newQuestion = new Question({
        name: name,
        userPreference: userPreference,
        questionSetId: newQuestionSet._id
      });

      newQuestion.save(function(err, savedQuestion) {
        if(err) { 
          throw err;
        } else {
          // console.log("Question saved", savedQuestion);
          newQuestionSet.questions = [ savedQuestion._id ];
          newQuestionSet.save(function(err, savedQuestionSet) {
            if(err) { throw err; }
            // console.log('saved NewQuestionSet', savedQuestionSet);
            user.questionSetId = savedQuestionSet._id;
            user.save();
            console.log("user updated", user);
          })
        }

      })
    }
  });
});

module.exports = router;
