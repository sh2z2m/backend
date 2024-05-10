const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10, // Adjust according to your needs
    host: 'localhost',
    user: 'majd',
    password: 'majd123',
    database: 'my_db'
});

module.exports = pool;
