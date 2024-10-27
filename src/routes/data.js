// routes/data.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /api/users - fetch all users
router.get('/classes', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM classes');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching classes:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

// GET /api/posts - fetch all posts
router.get('/student_classes', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM student_classes');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching Student Classes:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

// GET /api/comments - fetch all comments
router.get('/students', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM students');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching Students:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
