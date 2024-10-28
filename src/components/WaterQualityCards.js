// src/components/WaterQualityCards.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WaterQualityCards = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.location}</Text>
      <Text>pH: {item.ph}</Text>
      <Text>Turbidity: {item.turbidity} NTU</Text>
      <Text>Contaminants: {item.contaminants}</Text>
      <Text style={item.safe ? styles.safe : styles.danger}>
        Status: {item.safe ? 'Safe' : 'Unsafe'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  safe: {
    color: 'green',
  },
  danger: {
    color: 'red',
  },
});

export default WaterQualityCards;
