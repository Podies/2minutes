var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/signup', function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;

  if(!name || !email || !password) {
    res.status(422).send({error: "Provide Valid Crredentials"});
  }

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
          res.send('New User Saved');
        })
      }
      
    }
  });
});

router.post('/login',
  function(req, res, next){
    passport.authenticate('local', function(err, user, userErrorMsg) {
      console.log('success', err, user)
      if(err) {
        next(err);
      }
      if(userErrorMsg) {
        res.json({ message: userErrorMsg.message})
      }
      if(user) {
        res.redirect('/');
      }
    })(req, res, next);
  }
); 

module.exports = router;
