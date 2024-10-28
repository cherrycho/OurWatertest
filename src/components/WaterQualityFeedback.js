// src/components/WaterQualityFeedback.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const WaterQualityFeedback = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    if (feedback) {
      onSubmit(feedback);
      setFeedback(''); // Clear input after submission
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feedback on Water Quality</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your feedback here..."
        value={feedback}
        onChangeText={setFeedback}
      />
      <Button title="Submit Feedback" onPress={handleSubmit} />
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
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default WaterQualityFeedback;
