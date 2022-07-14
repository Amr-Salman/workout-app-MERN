// dontenv allows us to use the .env variables in the process object
require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workouts');
const mongoose = require('mongoose');

// express app
const app = express();

// Middleware
// T6his middleware for allows us to use the res.body in web form
app.use(express.json());

// Workouts routes
app.use('/api/workouts', workoutRoutes);

// Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for requests => port 4000
    app.listen(process.env.PORT, () => {
      console.log(
        `Connected to the DB & Listening on port ${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
