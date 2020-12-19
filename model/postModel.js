const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});


const Post = module.exports = mongoose.model('post', postSchema);
module.exports.get = function (callback, limit) {
  Post.find(callback).limit(limit);
}