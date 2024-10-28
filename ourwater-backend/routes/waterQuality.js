// ourwater-backend/routes/waterQuality.js
const express = require('express');
const router = express.Router();
const WaterQuality = require('../models/WaterQuality');

// GET all water quality data
router.get('/', async (req, res) => {
  try {
    const waterQualityData = await WaterQuality.find();
    res.json(waterQualityData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new water quality data
router.post('/', async (req, res) => {
  const waterQuality = new WaterQuality({
    location: req.body.location,
    ph: req.body.ph,
    turbidity: req.body.turbidity,
    contaminants: req.body.contaminants,
    safe: req.body.safe
  });

  try {
    const newWaterQuality = await waterQuality.save();
    res.status(201).json(newWaterQuality);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Export the router
module.exports = router;
