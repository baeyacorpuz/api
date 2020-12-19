const Post = require('../model/postModel');

exports.add = function (req, res) {
  const post = new Post();

  post.title = req.body.title;
  post.user_id = req.body.user_id;

  post.save(function (err) {
    if (err)
      res.json(err);
    res.json({
      message: "New Post Added!",
      data: post
    })
  })
}