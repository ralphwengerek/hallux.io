import mongoose from 'mongoose';
import fs from 'fs';
import mdx from '@mdx-js/mdx';

const Post = mongoose.model('Post');

export const findAll = (req, res) => {
  Post.find()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      res.send(err);
    });
};

export const findOne = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      const mdxText = fs.readFileSync(`posts/${post.filename}`, 'utf8');
      mdx(mdxText).then((content) => {
        const blogPost = {
          ...post,
          content,
        };
        res.json(blogPost);
      });
    })
    .catch((err) => {
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
  Post.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
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
