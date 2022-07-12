const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    reps: {
      type: Number,
      required: [true, 'Please add number of reps'],
    },
    load: {
      type: Number,
      required: [true, 'Please add the load'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Workout', workoutSchema);
