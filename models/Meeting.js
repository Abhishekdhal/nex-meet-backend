const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: true,
    unique: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    default: 'Nexus Meeting',
  }
}, { timestamps: true });

const Meeting = mongoose.model('Meeting', meetingSchema);
module.exports = Meeting;
