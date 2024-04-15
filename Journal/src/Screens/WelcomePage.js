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
    <ScrollView style={styles.background}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Welcome back SARAH!</Text>
        
        <Image
        source={require("../../assets/images/welcome.png")}
        style={styles.headerbox}
      >
        
      </Image>
      </View>
     

      <View style={styles.guidedPromptsContainer}>
        {/* Here you can map through your prompts or manually place them as needed */}
        
        <Text style={styles.header}>Guided Prompts</Text>
       
        <View style={styles.prompt}>
          <Text style={styles.promptText}>I write this for...</Text>
        </View>
        <View style={styles.prompt1}>
          <Text style={styles.promptText}>This is the journal...</Text>
        </View>
        {/* More prompts as needed */}
      </View>

      <TouchableOpacity
        style={styles.newEntryButton}
        onPress={() => navigation.navigate("NewEntry")}
      >
        <Text style={styles.newEntryButtonText}>Start a new one</Text>
      </TouchableOpacity>

      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Goals")}>
          <Text>Goals</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('JournalEntriesScreen')}>
          <Text>Journal Entries</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("MoodTracker")}>
          <Text>Mood Tracker</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    
    backgroundColor: "#FFF6EF",
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingBottom: 20,
  },

  headerbox: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingBottom: 20,
    width:600,
    height:300,
    borderRadius:15,

  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#744C4C",
    marginTop: 20,
    marginTop: 50,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#744C4C",
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  guidedPromptsContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  prompt: {
    flexDirection: "column",
    backgroundColor: '#FAD0C5',
    borderRadius: 16,
    padding: 15,
    margin: 8,
    shadowColor: '#744C4C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  prompt1: {
    flexDirection: "column",
    backgroundColor: '#FAD0C5',
    borderRadius: 16,
    padding: 15,
    margin: 8,
    shadowColor: '#744C4C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },


  promptText: {
    fontSize: 16,
    color: "#744C4C",
  },
  newEntryButton: {
    backgroundColor: "#DAA520", // Replace with your desired color
    borderRadius: 25,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  
  navBar: {
    backgroundColor: "#DAA520", 
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    
  },
});

export default WelcomePage;
