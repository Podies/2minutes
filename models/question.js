const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = Schema({
  questionSetId: {type: Schema.Types.ObjectId, ref: 'QuestionSet'},
  name: String,
  userPreference: {type:Schema.Types.Mixed},
  answer: [{
    date: {type: Date, default:Date.now},
    input: String
  }]
});

const Question = module.exports = mongoose.model('Question', questionSchema);