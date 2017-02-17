var express = require('express');
var router = express.Router();
var passport = require('passport');

// Facebook Authentication
router.get('/facebook', passport.authenticate('facebook', { scope: ['public_profile' , 'email'] }));

router.get('/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/users/login' 
  }));

//Google Authentication
router.get('/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', {
    successRedirect : '/',
    failureRedirect : '/users/login'
  }));


module.exports = router;
