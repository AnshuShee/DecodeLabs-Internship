const express = require('express');
const { getMe } = require('../controllers/authController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// Apply protect middleware to all routes below
router.use(protect);

router.get('/profile', getMe);

// Example of an Admin-only route (Bonus Feature: RBAC)
router.get('/admin-only', authorize('admin'), (req, res) => {
  res.status(200).json({ success: true, message: 'Welcome Admin!' });
});

module.exports = router;
