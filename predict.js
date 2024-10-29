const axios = require('axios');

// Replace this with your actual API key
const API_KEY = "kMZ2mcfINlkS5bZDtG7awmZFUU43WzKY3GoduUI2sHCS"; // Ensure this is correct without "ApiKey-" prefix
const ENDPOINT_URL = "https://eu-gb.ml.cloud.ibm.com/ml/v4/deployments/2d63bdbc-fbb8-4deb-b61d-8f2d7c4cfd70/predictions?version=2021-05-01";

// Function to get the Bearer token using the API key
async function getBearerToken() {
  const iamUrl = "https://iam.cloud.ibm.com/identity/token";
  const response = await axios.post(iamUrl, null, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    params: {
      "apikey": "kMZ2mcfINlkS5bZDtG7awmZFUU43WzKY3GoduUI2sHCS",  // Use the correct API key without "ApiKey-" prefix
      "grant_type": "urn:ibm:params:oauth:grant-type:apikey",
    },
  });

  return response.data.access_token;
}

// Function to get predictions from the model
async function getPrediction(data) {
  try {
    const bearerToken = await getBearerToken(); // Get Bearer token

    // Prepare the request payload
    const payload = {
      input_data: [{
        fields: ["basins_monitored", "date", "measure", "n_basins", "proportion"],  // Include all required fields
        values: [[data[0], data[1], data[2], data[3], data[4]]] // Ensure the values match the required types
      }]
    };

    // Send a POST request to the model endpoint
    const response = await axios.post(ENDPOINT_URL, payload, {
      headers: {
        "Authorization": `Bearer ${bearerToken}`, // Use the Bearer token
        "Content-Type": "application/json"
      },
      timeout: 10000 // Adjusted timeout (10 seconds)
    });

    // Print and return the prediction result
    console.log("Prediction Result:", JSON.stringify(response.data, null, 2));
    return response.data;

  } catch (error) {
    console.error("Error getting prediction:", error.response ? error.response.data : error.message);
  }
}

// Test the prediction function with sample data
getPrediction([1, "2024-01-01", "bod5", 5, 0.75]);