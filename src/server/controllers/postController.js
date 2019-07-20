import mongoose from 'mongoose';
import path from 'path';
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
  const query = Post.where({ slug: req.params.slug });
  query.findOne()
    .then((post) => {
      // ${post.filename}
      if (!post) {
        throw Error('This blogpost cannot be found.');
      }
      const tmpPath = path.resolve('src/server/posts/README.mdx');
      const mdxText = fs.readFileSync(tmpPath, 'utf8');

      mdx(mdxText).then((content) => {
        const blogPost = {
          ...post.toJSON(),
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
