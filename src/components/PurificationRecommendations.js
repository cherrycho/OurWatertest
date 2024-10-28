// src/components/PurificationRecommendations.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PurificationRecommendations = ({ recommendations }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Purification Recommendations</Text>
      {recommendations.map((item, index) => (
        <View key={index} style={styles.recommendation}>
          <Text style={styles.recommendationTitle}>{item.method}</Text>
          <Text>{item.description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recommendation: {
    marginBottom: 15,
  },
  recommendationTitle: {
    fontWeight: '600',
  },
});

export default PurificationRecommendations;
