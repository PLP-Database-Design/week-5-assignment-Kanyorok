const express = require('express');
const app = express();
const patient = require('./routes/patient');

app.use(express.json());

// Question 1 goes here
app.use('/api/v1', patient);

// Question 2 goes here


// Question 3 goes here


// Question 4 goes here

module.exports = app;


