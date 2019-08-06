import mongoose from 'mongoose';

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
  content: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft',
  },
  published: {
    type: Date,
    default: Date.now,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: String,
  },
  tags: [String],
  keywords: [String],
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

export default mongoose.model('Post', postModel);
