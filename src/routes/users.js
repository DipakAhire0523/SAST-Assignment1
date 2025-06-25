const express = require('express');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Protected route - get user profile
router.get('/profile', authenticateToken, (req, res) => {
  res.json({
    message: 'User profile',
    user: {
      email: req.user.email,
      authenticatedAt: new Date().toISOString()
    }
  });
});

// Protected route - list all users (admin only in real app)
router.get('/', authenticateToken, (req, res) => {
  res.json({
    message: 'Users endpoint - protected',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;