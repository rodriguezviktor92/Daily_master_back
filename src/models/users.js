const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  project: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
