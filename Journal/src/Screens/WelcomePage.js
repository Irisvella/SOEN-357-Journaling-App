import React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

function WelcomePage({ navigation }) {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome back SARAH !</Text>

        <Image
          source={require("../../assets/images/welcome.png")}
          style={styles.headerbox}
        />

        <Text style={styles.sectionTitle}>Guided Prompts</Text>
        <View style={styles.entryContainer} >

        {/* This is where you would map through your entries */}
        <TouchableOpacity style={styles.entry} onPress={() => navigation.navigate("JournalEntryPageScreen")}>
          <Text style={styles.entryTitle}>Today's journal entry</Text>
          <Text>April 5th, 2024</Text>
          <Text style={styles.hashtags}>vacation #bless #camping</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.entry} onPress={() => navigation.navigate("JournalEntryPageScreen")}>
          <Text style={styles.entryTitle}>Today's journal entry</Text>
          <Text>April 5th, 2024</Text>
          <Text style={styles.hashtags}>vacation #bless #camping</Text>
        </TouchableOpacity>
        </View>
    
        
        
        <Text style={styles.sectionTitle}>Start a new one</Text>
          <TouchableOpacity
            style={styles.fab}
            onPress={() => navigation.navigate("JournalEntryPageScreen")}
          >
            <Text style={styles.fabIcon}>+</Text>
          </TouchableOpacity>
        

        {/* Navigation Links */}
        <View style={styles.navigationLinks}>
          <TouchableOpacity onPress={() => navigation.navigate("Goals")}>
            <Text>Goals</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("JournalEntriesScreen")}>
            <Text>Journal Entries</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("MoodTracker")}>
            <Text>Mood Tracker</Text>
          </TouchableOpacity>
        </View>
        
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: "#FFF6EF",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80, // Adjust the padding as needed to ensure FAB doesn't overlap content
  },
  title: {
    fontSize: 26,
    color: "#563d2d",
    fontWeight: "bold",
    marginTop: 40,
    alignSelf: "center",
  },
  sectionTitle: {
    fontSize: 20,
    color: "#563d2d",
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 20,
  },
  hashtags: {
    color: "#DE3163",
    fontWeight: "bold",
  },
  entryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  headerbox: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 15,
    marginTop: 20,
  },
  entryContainer: {
    width: '100%',
    flexDirection: "column",
   
  },
  entry: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    elevation: 3,
  },
  navigationLinks: {
    
    marginTop: 20,
    backgroundColor: "#DAA520", 
    flexDirection: "row",

    justifyContent: "space-around",
    gap:20,
    padding: 15,
    borderTopColor: "#EEE",
    borderRadius: 20,

  },
  fabContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  fab: {
    backgroundColor: "#563d2d",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "brown",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    elevation: 3,
  },
  fabIcon: {
    fontSize: 30,
    color: "white",
  },
});

export default WelcomePage;
