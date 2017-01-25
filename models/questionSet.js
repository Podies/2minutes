const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSetSchema = Schema({
  userId: {type: Schema.Types.ObjectId, ref: 'User'},
  questions: [{type:Schema.Types.ObjectId, ref: 'Question'}],
  dateAdded: {type: Date, default: Date.now }
});

const QuestionSet = module.exports = mongoose.model('QuestionSet', questionSetSchema);