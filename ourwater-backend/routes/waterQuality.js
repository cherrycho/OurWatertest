const express = require('express');
const router = express.Router();
const WaterQuality = require('../models/WaterQuality');

// GET water quality data
router.get('/', async (req, res) => {
    try {
        const data = await WaterQuality.find();
        res.json(data);
    } catch (err) {
        res.status(500).send(err);
    }
});

// POST water quality feedback
router.post('/feedback', async (req, res) => {
    const feedback = new WaterQuality(req.body);
    try {
        await feedback.save();
        res.status(201).send(feedback);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
