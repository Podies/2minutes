const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const tempUserSchema = Schema({
  email: {type: String, unique: true, lowercase: true},
  name: String,
  password: String,
  token: String,
  emailVerified: Boolean,
  dateAdded: {type: Date, default: Date.now }
});

//On Save User, encrypt password
tempUserSchema.pre('save', function(next) {
  const user = this;

  bcrypt.genSalt(10, function(err, salt) {
    if(err){return next(err);}

    bcrypt.hash(user.password, salt, function(err, hash) {
      // Store hash in your password DB.
      if(err){return next(err);}

      user.password = hash;
      next(); 
    });
  });
});

const TempUser = module.exports = mongoose.model('TempUser', tempUserSchema);