// controllers/checkinController.js

const Checkin = require("../models/Checkin");

// Add a new check-in
exports.addCheckin = async (req, res) => {
  try {
    const { mood, energy } = req.body;
    const userId = req.user.userId;

    const checkin = await Checkin.create({ user: userId, mood, energy });
    res.status(201).json({ message: "Check-in saved successfully", checkin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Retrieve all check-ins for the user
exports.getCheckins = async (req, res) => {
  try {
    const userId = req.user.userId;
    const checkins = await Checkin.find({ user: userId }).sort({
      createdAt: -1,
    });

    res.status(200).json({ checkins });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
