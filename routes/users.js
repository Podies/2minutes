var express = require('express');
var router = express.Router();
var User = require('../models/user');
var TempUser = require('../models/tempUser');
var Question = require('../models/question');
var QuestionSet = require('../models/questionSet');
var passport = require('passport');
var randomToken = require('random-token').create('abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
var elastic = require('elastic-email-api');
var token = randomToken(32);
var axios = require('axios');

//Elastic Wrapper Recommended.
// elastic.Account.Load({apikey: 'f6139ea0-5df6-4bdf-ac0d-4d369af95b06'}, function (responseObj) {
//     console.log(responseObj)
// });


router.post('/email/verification', function(req, res) {
  console.log('called', req.body.token)
  var token = req.body.token;
  TempUser.findOne({ token: token }).exec(function(err, user){
    if(!user) {
      return res.status(400).send({ message: 'No User found'});
    }

    var newUser = new User({ name: user.name, email: user.email, password: user.password, isVerified: false });

    newUser.save(function(err, saved){
      res.json({ user: saved });
      user.remove();
    });

  });
});

router.post('/signup', function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  console.log(name, email, password);
  if(!name || !email || !password) {
    res.status(422).send({error: "Provide Valid Credentials"});
  } else {
    User.findOne({ email: email }).exec(function(err, user) {
      if(user) {
        return res.status(400).send({ "message": " User Already Present."})
      }

      TempUser.findOne({email: email}).exec(function(err, tempUser){
        if(tempUser) {
          // send mail
          // elastic.request({
          //   path: 'users/email/verification/tempUser.token',
          //   params: {
          //       email: tempUser.email, 
          //       publicAccountID: 'b3b2c2ae-1767-4d68-b14f-48ea799eac48'
          //   },
          //   callback: function (responseObj) {
          //     console.log(responseObj)
          //   },
          //   hideApiKey: true
          // });
          axios.post(' https://api.elasticemail.com/v2/email/send', {
            apikey: 'f6139ea0-5df6-4bdf-ac0d-4d369af95b06',
            subject: 'Email verification',
            from: 'no-reply@slackhunt.xyz',
            to: ['ravi.suraj110@gmail.com'],
            bodyHtml: 'Hi, Hum chutiya hai',
            isTransactional: "True"
          }).then(function(res) {
            console.log(res);
          })
          return;
        }

        var newTempUser = new TempUser({ email: email, name: name, password: password, token: token, emailVerified: false });

        newTempUser.save(function(err, saved){
          // TODO: send mail with link.
          axios.post(`https://api.elasticemail.com/v2/email/send?apikey=f6139ea0-5df6-4bdf-ac0d-4d369af95b06&subject='Email verification'
            &from=&to=['ravi.suraj110@gmail.com']
            &bodyHtml='Hi, Hum chutiya hai'
            &isTransactional=True`
          ).then(function(res) {
            console.log('response',res);
          })
          // localhost:3030/users/email/verfication/saved.token
          res.json({ message: 'Successfully Signedup. Please check your mail'});
        });
      });
    });

    // User.findOne({email: email}, function(err, user) {
    //    if(err) {
    //     console.log(err);
    //     } else {
    //       if(user) {
    //         res.status(422).send("User Already Availble");
    //       } else {
    //         var newUser = new User({
    //           email: email,
    //           name: name,
    //           password: password
    //         });
    //         newUser.save(function(err, savedUser) {
    //           // console.log(err, savedUser);
    //           res.redirect('/dashboard');
    //         })
    //       } 
    //     }
    //   });
    // }
  }
});

router.post('/login',function(req, res, next){
  passport.authenticate('local', function(err, user, userErrorMsg) {
    if(err) {
      next(err);
    }
    if(userErrorMsg) {
      res.status(400).send({ message: userErrorMsg.message })
    }
    if(user) {
      req.logIn(user, function(){
        res.json({ user: user });
      });
    }
  })(req, res, next);
}); 

// Saving Questions to Database.
router.post('/question', function(req, res) {
  var name = req.body.name;
  var userPreference = req.body.userPreference;
  var userId = req.body.userId;
  if(!name) {
    return res.status(400).send({error: "Enter Valid Question"});
  }

  if(userPreference == "true" || userPreference == "false") {
    var type = "boolean"
  } else {
    if(isNaN(userPreference)) {
      return res.status(400).send({"error": "Enter valid Number"});
    } else {
      type = "number" 
    }
  }
  
  User.findOne({_id: userId}).exec(function(err, user) {
    // console.log(err, user);
    if(err) { throw err; }
    // console.log(user.questionSetId);
    if(user.questionSetId) {
      var newQuestion = new Question({
        questionSetId: user.questionSetId,
        name: name,
        'userPreference.type': type,
        'userPreference.value': userPreference
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
        'userPreference.type': type,
        'userPreference.value': userPreference,
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
