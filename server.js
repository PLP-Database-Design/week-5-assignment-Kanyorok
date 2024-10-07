const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config({path: 'config/config.env'})


// Question 1 goes here


// Question 2 goes here


// Question 3 goes here


// Question 4 goes here


// listen to the server
app.listen(process.env.PORT, () => {
  console.log(`server is runnig on http://localhost:${process.env.PORT}`)
})