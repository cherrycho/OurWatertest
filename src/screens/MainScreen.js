// src/screens/MainScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import WaterQualityFeedback from '../components/WaterQualityFeedback';
import PurificationRecommendations from '../components/PurificationRecommendations';
import EducationalContent from './EducationalContent';

const MainScreen = () => {
  const [recommendations] = useState([
    { method: 'Boiling', description: 'Bring water to a rolling boil for at least one minute.' },
    { method: 'Filtration', description: 'Use a certified water filter to remove contaminants.' },
  ]);

  const handleFeedbackSubmit = (feedback) => {
    console.log('User Feedback:', feedback);
    // Handle the feedback submission logic here (e.g., send to backend)
  };

  return (
    <ScrollView style={styles.container}>
      <EducationalContent />
      <PurificationRecommendations recommendations={recommendations} />
      <WaterQualityFeedback onSubmit={handleFeedbackSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MainScreen;
