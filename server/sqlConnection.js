const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: process.env.SQL_Username,
    password: process.env.SQL_Password,
    database: process.env.SQL_Database
});

module.exports = {connection};