import mongoose from 'mongoose';

const { Schema } = mongoose;

const tagModel = new Schema({
  name: {
    type: String,
    required: 'Enter a value for the tag name',
  },
});

export default mongoose.model('Tag', tagModel);
