// ourwater-backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const waterQualityRoutes = require('./routes/waterQuality');
const cors = require('cors'); // Use cors to enable cross-origin requests
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const dbURI = 'mongodb://localhost:27017/ourwater'; // Change this to your MongoDB connection string
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error(err));

// Routes
app.use('/api/water-quality', waterQualityRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
