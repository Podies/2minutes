const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = Schema({
  questionSetId: {type: Schema.Types.ObjectId, ref: 'QuestionSet'},
  name: String,
  userPreference: {
    type: { type: String, enum: ['number', 'boolean'] } ,
    value: Schema.Types.Mixed,
  },
  answers: [{
    date: {type: Date, default: Date.now },
    answer: Schema.Types.Mixed
  }],
  dateAdded: { type: Date, default: Date.now }
});

const Question = module.exports = mongoose.model('Question', questionSchema);