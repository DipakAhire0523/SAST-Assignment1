const express = require('express');
const { body, validationResult } = require('express-validator');
const authRoutes = require('./auth');
const userRoutes = require('./users');

const router = express.Router();

// API Info endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'Secure Node.js API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      auth: '/api/auth',
      users: '/api/users'
    }
  });
});

// Input validation example
router.post('/echo', [
  body('message')
    .isLength({ min: 1, max: 500 })
    .trim()
    .escape()
    .withMessage('Message must be between 1 and 500 characters')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: 'Validation failed',
      details: errors.array()
    });
  }

  res.json({
    echo: req.body.message,
    timestamp: new Date().toISOString()
  });
});

// Mount sub-routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);

module.exports = router;