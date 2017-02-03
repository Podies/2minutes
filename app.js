var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var config = require('./webpack.config');
var compiler = webpack(config);
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var randomToken = require('random-token').create('abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
var elastic = require('elastic-email-api');
var User = require('./models/user');
var TempUser = require('./models/tempUser');
const MongoStore = require('connect-mongo')(session);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/2minutes', function(err, connected) {
    console.log(err, "Mongo connected");
});

var routes = require('./routes/index');
var users = require('./routes/users');
var api = require('./routes/api');


var app = express();

//Generate random token
var token = randomToken(16);

/* eslint-disable */
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
/* eslint-enable */

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//session Middleware
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

//middleware for passport
app.use(passport.initialize());
app.use(passport.session());

var passportService = require('./auth/passport')(passport);

// Route handler
app.use('/auth', routes);
app.use('/users', users);
app.use('/api', api);

app.use('*', function(req, res) {
  var initialState = { activeUser: null };
  if(req.user) {
    User.findById(req.user._id).select('-password').exec(function(err, user){
      initialState.activeUser = user;
      res.render('index', { title: '2 minutes', initialState });
    });
  } else {
    res.render('index', { title: '2 minutes', initialState });
  }
});

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
