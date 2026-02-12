const mongoose = require('mongoose');
require('dotenv').config();

function connect() {
  mongoose.connect(process.env.MONGO_URI).then( () => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('MongoDB connection error:', err.message);
  });
}

module.exports = connect;