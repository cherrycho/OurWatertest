import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EducationalContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Educational Content</Text>
      <Text>Learn about water purification methods...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default EducationalContent;
