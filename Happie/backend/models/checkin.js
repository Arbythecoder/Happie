const mongoose = require("mongoose");

const CheckInSchema = new mongoose.Schema({
  mood: { type: String, required: true },
  energyLevel: { type: Number, required: true },
  stressLevel: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("CheckIn", CheckInSchema);
