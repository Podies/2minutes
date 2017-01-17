var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// Facebook Authentication
router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['public_profile' , 'email'] }));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/users',
    failureRedirect: '/users' 
  }));

//Google Authentication
router.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

router.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect : '/users',
    failureRedirect : '/users'
  }));

router.get('*', function(req, res) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
