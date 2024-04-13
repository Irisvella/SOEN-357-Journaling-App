// src/screens/WelcomePage.js
import React from "react";
import { Button, Text, View,ScrollView, StyleSheet } from "react-native";
import { CarouselSpacing } from "../shadcn/CarouselSpacing";

function WelcomePage({ navigation }) {
  return (
    <ScrollView style={styles.background}>
      <View style={styles.headerbox}>
        <Text style={styles.header}>Welcome to the Journal App!</Text>
      </View>
      
      <View style={styles.container}>
        {/* <CarouselSpacing /> */}
      <Button
        title="Go to Guided Journal"
        onPress={() => navigation.navigate('GuidedJournalPage')}
      />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#FFF6EF",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerbox: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF6EF",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    paddingTop: 50,
    paddingBottom: 20,
  },
  header: {
    fontSize: 40,
    color: "#744C4C",
  },
});

export default WelcomePage;
