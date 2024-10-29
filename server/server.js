// server.js
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Replace this with your actual API key and endpoint URL
const API_KEY = "kMZ2mcfINlkS5bZDtG7awmZFUU43WzKY3GoduUI2sHCS"; 
const ENDPOINT_URL = "https://eu-gb.ml.cloud.ibm.com/ml/v4/deployments/2d63bdbc-fbb8-4deb-b61d-8f2d7c4cfd70/predictions?version=2021-05-01";

// Prediction endpoint
app.post('/predict', async (req, res) => {
    const { date, measure } = req.body;

    const payload = {
        input_data: [{
            fields: ["date", "measure"],
            values: [[date, measure]]
        }]
    };

    try {
        const response = await axios.post(ENDPOINT_URL, payload, {
            headers: {
                "Authorization": API_KEY,
                "Content-Type": "application/json"
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching prediction:", error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
