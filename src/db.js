// db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',      // MySQL host
  user: 'root',   // MySQL username
  password: 'password', // MySQL password
  database: 'student_schedule'  // MySQL database name
});

module.exports = pool.promise();
