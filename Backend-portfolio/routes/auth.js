import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../db.js'; // Importing the PostgreSQL connection

const router = express.Router();


// Signup Route
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  console.log("📩 Signup API hit");
  console.log("📨 Request body:", req.body);
  try {
    // Check if user already exists
    const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save user to the database
    await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
      [name, email, hashedPassword]
    );

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server manjunath' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (user.rows.length === 0) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const payload = {
      user: {
        id: user.rows[0].id,
        name: user.rows[0].name,
        email: user.rows[0].email
      }
    };
    
    const token = jwt.sign(payload, 'yourSecretKey', { expiresIn: '1d' });
    
    res
      .cookie('token', token, {
        httpOnly: true,
        sameSite: 'None',
        secure: true, // Set to true if using https
        maxAge: 86400000, // 1 day
      })
      .json({ message: 'Login successful' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Logout Route
router.post('/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    sameSite: 'Lax',
    secure: false, // set to true in production with https
  });
  res.json({ message: 'Logged out successfully' });
});

router.get('/verify', (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: 'No token found' });

  try {
    const decoded = jwt.verify(token, 'yourSecretKey');
    res.json({ user: decoded.user });
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
});

export default router;
