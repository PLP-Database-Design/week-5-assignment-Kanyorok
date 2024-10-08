const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config({path: 'config/config.env'});

// Create a new Sequelize instance
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false, 
});

// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Sequelize: Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Sequelize: Unable to connect to the database:', err);
    });

module.exports = sequelize;