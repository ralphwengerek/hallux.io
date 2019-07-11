const mongoose = require('mongoose');

const { Schema } = mongoose;

const tagModel = new Schema({
  name: {
    type: String,
    required: 'Enter a value for the tag name',
  },
});

module.exports = mongoose.model('Tag', tagModel);
