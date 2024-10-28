// src/data.js
import axios from 'axios';

export const fetchWaterQualityData = async () => {
  const response = await axios.get('https://api.data.gov.my/data-catalogue?id=water_pollution_basin&limit=100');
  return response.data.data; // Adjust based on the API response structure
};

export const preprocessData = async () => {
  const rawData = await fetchWaterQualityData();
  const trainingData = [];
  const trainingLabels = [];

  rawData.forEach(record => {
    const features = [record.pH, record.turbidity, record.contamination_level];
    trainingData.push(features);
    const label = record.contamination_level > 0.5 ? 1 : 0; // Example threshold
    trainingLabels.push(label);
  });

  return { trainingData, trainingLabels };
};
