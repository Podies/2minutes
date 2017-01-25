const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = Schema({
  email: {type: String, unique: true, lowercase: true},
  name: String,
  password: String,
  photo: String,
  facebook: {
    id: String, default: '',
    token: String,
    name: String
  },
  google: {
    id: String, default: '',
    token: String,
    name: String
  },
  questionSetId:{type: Schema.Types.ObjectId, ref: 'QuestionSet'},
  resultId: {type: Schema.Types.ObjectId, ref: 'Result'},
  isVerified: { type: Boolean, default: true },
  dateAdded: {type: Date, default: Date.now }
});

//On Save User, encrypt password
userSchema.pre('save', function(next) {
  const user = this;

  if(!this.isVerified) {
    user.isVerified = true;
    next();
  }

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

//Retrieve User hashed password
userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if(err) {return callback(err); }

    callback(null, isMatch);
  });
};

const User = module.exports = mongoose.model('User', userSchema);