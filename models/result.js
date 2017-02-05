const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = Schema({
  userId: {type: Schema.Types.ObjectId, ref: 'User'},
  daily:[{
    date:{type: Date},
    percentage: String
  }]
});

const Result = module.exports = mongoose.model('Result', resultSchema);