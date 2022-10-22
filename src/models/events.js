const mongoose = require('mongoose');

const eventsSchema = mongoose.Schema({
  project: {
    type: String,
    required: true,
  },
  events: [{
    title: String,
    start: String,
  }],
  // events: [{
  //   type: String,
  // }],
  // events: {
  //   type: String,
  //   required: true,
  // },
});

module.exports = mongoose.model('Events', eventsSchema);
