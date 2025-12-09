// server.js

// Load environment variables
require('dotenv').config();

// Import express
const express = require('express');
const app = express();

// Morgan logs requests (GET/POST/PUT/DELETE)
const morgan = require('morgan');

// Mongoose for MongoDB connection
const mongoose = require('mongoose');

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware for logging
app.use(morgan('dev'));

// Bring in the ADHD-friendly route aggregator
const apiRoutes = require('./routes/routes.api');

// Use ONE prefix for everything 
app.use('/api/v1', apiRoutes);

// Connect to MongoDB using URL in .env
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("💚 MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

// Start server
app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on port ${process.env.PORT}`)
);
