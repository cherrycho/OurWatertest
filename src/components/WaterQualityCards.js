import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WaterQualityCards = ({ qualityData }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Water Quality: {qualityData.status}</Text>
      <Text>NH3-N Level: {qualityData.nh3n}</Text>
      <Text>pH Level: {qualityData.ph}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WaterQualityCards;
