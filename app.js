const express = require('express');
const app = express();
const patient = require('./routes/patient');
const provider = require('./routes/provider');

app.use(express.json());

// Question 1 goes here
app.use('/api/v1', patient);

// Question 2 goes here
app.use('/api/v1', provider);

// Question 3 goes here
// Answer: http://localhost:3000/api/v1/patients?first_name=John

// Question 4 goes here

module.exports = app;


