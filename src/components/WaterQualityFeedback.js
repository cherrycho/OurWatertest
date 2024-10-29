import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const WaterQualityFeedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    // Submit feedback logic
    console.log(feedback);
    setFeedback('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report Water Quality Issues</Text>
      <TextInput
        style={styles.input}
        placeholder="Describe the issue..."
        value={feedback}
        onChangeText={setFeedback}
      />
      <Button title="Submit" onPress={handleSubmit} />
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default WaterQualityFeedback;
