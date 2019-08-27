/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';
import { hasRole, roles } from '../../shared/utils/rbac';

const Post = mongoose.model('Post');

export const findAll = (req, res) => {
  const isAdmin = hasRole(roles.ADMIN, req.user);

  const query = isAdmin
    ? Post.where({})
    : Post.where('state').equals('published');

  query.find()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      res.send(err);
    });
};

export const findOne = (req, res) => {
  const query = Post.where({ slug: req.params.slug });
  query.findOne()
    .then((post) => {
      if (!post) {
        throw Error('This blog post cannot be found.');
      }
      res.json(post.toJSON());
    }).catch((err) => {
      res.send(err);
    });
};

export const createPost = (req, res) => {
  const newPost = new Post(req.body);
  newPost.save()
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      res.send(err);
    });
};

export const updatePost = (req, res) => {
  Post.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true })
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      res.send(err);
    });
};

export const deletePost = (req, res) => {
  Post.remove({ _id: req.params.id })
    .then(() => {
      res.json({ message: 'Post successfully deleted' });
    })
    .catch((err) => {
      res.send(err);
    });
};
