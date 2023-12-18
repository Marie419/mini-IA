// Import required modules
const mongoose = require('mongoose');

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/backend-system', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;