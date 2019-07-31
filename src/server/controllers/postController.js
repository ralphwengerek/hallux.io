import mongoose from 'mongoose';

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
  Post.findOneAndUpdate({ slug: req.params.slug }, req.body, { new: true })
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
