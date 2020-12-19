const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});


const User = module.exports = mongoose.model('user', userSchema);
module.exports.get = function (callback, limit) {
  User.find(callback).limit(limit);
}