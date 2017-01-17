const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = Schema({
  userId: {type: Schema.Types.ObjectId, ref: 'User'},
  daily:[{

  }],
  weekly:[{

  }],
  monthly: [{

  }]
});

const Result = module.exports = mongoose.model('Result', resultSchema);