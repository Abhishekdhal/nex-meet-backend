const express = require('express');
const router = express.Router();
const { createMeeting, getMeetingHistory, getMeetingById } = require('../controllers/meetingController');
const { protect } = require('../middleware/authMiddleware');

router.post('/create', protect, createMeeting);
router.get('/history', protect, getMeetingHistory);
router.get('/:id', protect, getMeetingById);

module.exports = router;
