// ourwater-backend/models/WaterQuality.js
const mongoose = require('mongoose');

const WaterQualitySchema = new mongoose.Schema({
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  ph: {
    type: Number,
    required: true
  },
  turbidity: {
    type: Number,
    required: true
  },
  contaminants: {
    type: String,
    required: true
  },
  safe: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('WaterQuality', WaterQualitySchema);
