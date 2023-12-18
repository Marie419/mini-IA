// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/patientRoutes');

// Create the Express app
const app = express();

// Set up bodyParser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use patient routes
app.use('/patients', patientRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(Server, is, running, on, port, $,{port},);
});