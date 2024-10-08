const app = require('./app');
const dotenv = require('dotenv');
const sequelize = require('./config/sequelize');


dotenv.config({path: 'config/config.env'});




// listen to the server
app.listen(process.env.PORT, () => {
  console.log(`server is runnig on http://localhost:${process.env.PORT}`)
})