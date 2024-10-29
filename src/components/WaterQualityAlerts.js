import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { loadModel, predict } from '../mlModel'; // Make sure the path is correct

const WaterQualityAlerts = () => {
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    loadModel().then(() => {
      const sampleData = [ /* Your input data for prediction, e.g., [NH3-N Level, pH Level] */ ];
      predict(sampleData).then((result) => {
        // Assuming result contains a status or alert level
        if (result[0].label === 'Polluted') {
          setAlertMessage('Alert: Water quality is polluted!');
        } else {
          setAlertMessage('Water quality is safe.');
        }
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.alertText}>{alertMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  alertText: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default WaterQualityAlerts;
