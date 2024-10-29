// src/components/PurificationRecommendations.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PurificationRecommendations = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Purification Recommendations</Text>
      <Text style={styles.content}>Find the best methods to purify your water!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4dd0e1', // Darker Cyan Background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    color: '#007BFF',
  },
});

export default PurificationRecommendations;
