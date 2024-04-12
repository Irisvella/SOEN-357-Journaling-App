import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from 'react-native-svg';

import GuidedJournalPage from "./guided-journal/GuidedJournalPage";

const PlaceholderImage = require('./assets/images/file.png');

export default function App() {
  return (
    <View style={styles.main}>
      <Svg 
        style={styles.svg}
        width={40}
        height={40}
        viewBox="0 0 20 20"
        stroke="#744C4C"
        strokeLinecap="round" 
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        strokeWidth={2}
      >
        <Path d="M6 12H18M6 12L11 7M6 12L11 17"/>
      </Svg>
      <View style={styles.container}>
        <GuidedJournalPage />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FFF6EF',
  },
  svg: {
    marginTop: 50,
    marginLeft: 10,
  }
});
