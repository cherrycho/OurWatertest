// src/components/WaterQualityFeedback.js

import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import axios from 'axios';

const WaterQualityAlerts = () => {
  const [date, setDate] = useState('');
  const [measure, setMeasure] = useState('');
  const [prediction, setPrediction] = useState(null);

  const API_KEY = "kMZ2mcfINlkS5bZDtG7awmZFUU43WzKY3GoduUI2sHCS"; 
  const ENDPOINT_URL = "https://eu-gb.ml.cloud.ibm.com/ml/v4/deployments/2d63bdbc-fbb8-4deb-b61d-8f2d7c4cfd70/predictions?version=2021-05-01";

  const getPrediction = async () => {
    try {
      const payload = {
        input_data: [{
          fields: ["date", "measure"],
          values: [[date, measure]]
        }]
      };

      const response = await axios.post(ENDPOINT_URL, payload, {
        headers: {
          "Authorization": API_KEY,
          "Content-Type": "application/json"
        }
      });

      const result = response.data.predictions[0].values[0][0];
      setPrediction(result); // Set the prediction result (e.g., "clean" or "not clean")
    } catch (error) {
      console.error("Error getting prediction:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        placeholder="Enter Measure"
        value={measure}
        onChangeText={setMeasure}
      />
      <Button title="Get Prediction" onPress={getPrediction} />
      {prediction && <Text>Prediction: {prediction}</Text>}
    </View>
  );
};

export default WaterQualityAlerts;
