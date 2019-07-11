const mongoose = require('mongoose');

const Tag = mongoose.model('Tag');

exports.findAll = (req, res) => {
  Tag.find()
    .then((tags) => {
      res.json(tags);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.findOne = (req, res) => {
  Tag.findById(req.params.id)
    .then((tag) => {
      res.json(tag);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.create = (req, res) => {
  const newTag = new Tag(req.body);
  newTag.save()
    .then((tag) => {
      res.json(tag);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.update = (req, res) => {
  Tag.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((tag) => {
      res.json(tag);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.delete = (req, res) => {
  Tag.remove({ _id: req.params.id })
    .then(() => {
      res.json({ message: 'Tag successfully deleted' });
    })
    .catch((err) => {
      res.send(err);
    });
};
