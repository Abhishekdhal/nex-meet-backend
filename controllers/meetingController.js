const Meeting = require('../models/Meeting');

// @desc    Create a meeting
// @route   POST /api/meetings/create
// @access  Private
const createMeeting = async (req, res) => {
  const { roomId, title } = req.body;

  try {
    const meeting = await Meeting.create({
      roomId,
      title: title || 'Nexus Meeting',
      createdBy: req.user._id,
    });

    res.status(201).json(meeting);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get user meeting history
// @route   GET /api/meetings/history
// @access  Private
const getMeetingHistory = async (req, res) => {
  try {
    const meetings = await Meeting.find({ createdBy: req.user._id }).sort({ createdAt: -1 });
    res.json(meetings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get meeting by ID
// @route   GET /api/meetings/:id
// @access  Private
const getMeetingById = async (req, res) => {
  try {
    const meeting = await Meeting.findById(req.params.id);

    if (meeting) {
      res.json(meeting);
    } else {
      res.status(404).json({ message: 'Meeting not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createMeeting,
  getMeetingHistory,
  getMeetingById,
};
