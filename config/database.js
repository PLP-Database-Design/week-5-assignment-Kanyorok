const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config({path: 'config/config.env'});

// Establish connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectTimeout: process.env.CONNECTION_TIMEOUT
});

const connectDatabase = () => {
    db.connect (err => {
        if (err) {
            console.error('Error connecting to the database', err);
            throw err;
        }

        console.log('MySQL database connected successfully: ', db.config.host);
    })
}

module.exports = connectDatabase;
