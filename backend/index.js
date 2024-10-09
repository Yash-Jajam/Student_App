const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'MySQL@123',
  database: 'student_schedule',
});

db.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/students', (req, res) => {
  const query = 'SELECT id, StudentName, ClassName, ClassDate, ClassTime, ClassLocation FROM students';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
