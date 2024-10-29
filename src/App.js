import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './screens/MainScreen';
import EducationalContent from './screens/EducationalContent';
import WaterQualityFeedback from './components/WaterQualityFeedback';
import WaterQualityAlerts from './components/WaterQualityAlerts'; // Import here
import { Ionicons } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={MainScreen} 
          options={{ tabBarIcon: () => <Ionicons name="home" size={24} color="blue" /> }} 
        />
        <Tab.Screen 
          name="Education" 
          component={EducationalContent} 
          options={{ tabBarIcon: () => <Ionicons name="book" size={24} color="blue" /> }} 
        />
        <Tab.Screen 
          name="Feedback" 
          component={WaterQualityFeedback} 
          options={{ tabBarIcon: () => <Ionicons name="chatbox" size={24} color="blue" /> }} 
        />
        <Tab.Screen 
          name="Alerts" 
          component={WaterQualityAlerts} 
          options={{ tabBarIcon: () => <Ionicons name="alert" size={24} color="blue" /> }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
