const mongoose = require('mongoose');

const Post = mongoose.model('Post');

exports.findAll = (req, res) => {
  Post.find()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.findOne = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.create = (req, res) => {
  const newPost = new Post(req.body);
  newPost.save()
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.update = (req, res) => {
  Post.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.delete = (req, res) => {
  Post.remove({ _id: req.params.id })
    .then(() => {
      res.json({ message: 'Post successfully deleted' });
    })
    .catch((err) => {
      res.send(err);
    });
};
