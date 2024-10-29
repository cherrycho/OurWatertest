// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/screens/MainScreen';
import EducationalContent from './src/screens/EducationalContent';
import WaterQualityFeedback from './src/components/WaterQualityFeedback';
import PurificationRecommendations from './src/components/PurificationRecommendations';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Educational Content" component={EducationalContent} />
        <Stack.Screen name="Water Quality Feedback" component={WaterQualityFeedback} />
        <Stack.Screen name="Purification Recommendations" component={PurificationRecommendations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
