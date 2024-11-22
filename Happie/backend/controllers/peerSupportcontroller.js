// controllers/peerSupportController.js

const PeerSupport = require("../models/PeerSupport");

// Post a new message
exports.postMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const userId = req.user.userId;

    const newMessage = await PeerSupport.create({ user: userId, message });
    res
      .status(201)
      .json({ message: "Message posted successfully", newMessage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all messages
exports.getMessages = async (req, res) => {
  try {
    const messages = await PeerSupport.find()
      .populate("user", "name")
      .sort({ createdAt: -1 });
    res.status(200).json({ messages });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
