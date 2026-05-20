require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Authentication
app.post('/api/auth/login', (req, res) => {
  const { password } = req.body;
  const CORRECT_PASSWORD = process.env.AUTH_PASSWORD || '1234';

  if (password === CORRECT_PASSWORD) {
    res.json({
      user: {
        id: 1,
        name: 'Пользователь',
        email: 'user@example.com',
      },
    });
  } else {
    res.status(401).json({ error: 'Неверный пароль' });
  }
});

// Audit endpoints
app.post('/api/audits', (req, res) => {
  const { results } = req.body;
  // TODO: Save to database
  res.json({ id: 1, results });
});

app.get('/api/audits', (req, res) => {
  // TODO: Get from database
  res.json([]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
