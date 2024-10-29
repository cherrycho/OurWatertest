const express = require('express');
const mongoose = require('mongoose');
const waterQualityRoutes = require('./routes/waterQuality');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Database Connection
mongoose.connect('mongodb://localhost:27017/ourwater', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/water-quality', waterQualityRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
