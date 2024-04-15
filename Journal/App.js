// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './src/Screens/WelcomePage'; // Adjust path as necessary
import GuidedJournalPage from './src/Screens/GuidedJournalPage'; // Adjust path as necessary
import MoodTrackerPage from './src/Screens/MoodTrackerPage'; // Adjust path as necessary
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="WelcomePage">
        <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ title: 'Welcome' }} />
        <Stack.Screen name="GuidedJournalPage" component={GuidedJournalPage} options={{ title: 'Guided Journal' }} />
        <Stack.Screen name="MoodTracker" component={MoodTrackerPage} options={{ title: 'Mood Tracker' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
