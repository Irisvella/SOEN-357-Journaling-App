// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './src/Screens/WelcomePage'; // Adjust path as necessary
import GuidedJournalPage from './src/Screens/GuidedJournalPage'; // Adjust path as necessary
import MoodTrackerPage from './src/Screens/MoodTrackerPage'; // Adjust path as necessary
import JournalEntriesScreen from './src/Screens/JournalEntriesScreen'; // Adjust path as necessary
import JournalEntryPageScreen from './src/Screens/JournalEntryPageScreen'; // Adjust path as necessary
import { StatusBar } from "expo-status-bar";
import Goals from './src/Screens/Goals';
import Goal1 from './src/Screens/Goal1';
import createGoal from './src/Screens/createGoal';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="WelcomePage">
        <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ title: 'Welcome' }} />
        <Stack.Screen name="GuidedJournalPage" component={GuidedJournalPage} options={{ title: 'Guided Journal' }} />
        <Stack.Screen name="JournalEntriesScreen" component={JournalEntriesScreen} options={{ title: 'Journal Entries' }} />
        <Stack.Screen name="JournalEntryPageScreen" component={JournalEntryPageScreen} options={{ title: 'Journal Entry Page' }} />
        <Stack.Screen name="MoodTracker" component={MoodTrackerPage} options={{ title: 'Mood Tracker' }} />
        <Stack.Screen name="Goals" component={Goals}/>
        <Stack.Screen name="Goal1" component={Goal1}/>
        <Stack.Screen name="createGoal" component={createGoal} options={{title: 'Create a goal'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
