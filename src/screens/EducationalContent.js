// src/screens/EducationalContent.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const EducationalContent = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Educational Content</Text>
      <Text style={styles.sectionTitle}>Water Safety Tips</Text>
      <Text style={styles.content}>
        Always boil water before drinking if contamination is suspected. Use proper filtration methods.
      </Text>

      <Text style={styles.sectionTitle}>Purification Methods</Text>
      <Text style={styles.content}>
        - Boiling: Bring water to a rolling boil for at least one minute.
        {'\n'}
        - Filtration: Use a certified water filter to remove contaminants.
      </Text>

      <Text style={styles.sectionTitle}>Community Reporting</Text>
      <Text style={styles.content}>
        Report any visible contamination to local authorities or use the app's feedback feature.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 15,
  },
});

export default EducationalContent;
