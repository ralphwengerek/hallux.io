const mongoose = require('mongoose');

const { Schema } = mongoose;

const postModel = new Schema({
  title: {
    type: String,
    required: 'Enter the title',
  },
  image: {
    type: String,
    required: 'Enter the image name',
    lowercase: true,
  },
  summary: {
    type: String,
    required: 'Enter the post summary',
  },
  state: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft',
  },
  created: {
    type: Date,
    default: Date.now,
  },
  filename: {
    type: String,
    unique: true,
    lowercase: true,
  },
  tags: [{
    type: Schema.ObjectId,
    ref: 'Tag',
  }],
  likes: {
    type: Number,
    default: 0,
  },
  slug: {
    type: String,
    unique: true,
  },
});

postModel.pre('save', function preSave(next) {
  this.slug = this.title
    .toLowerCase()
    .trim()
    .split(' ')
    .join('-');
  next();
});

module.exports = mongoose.model('Post', postModel);