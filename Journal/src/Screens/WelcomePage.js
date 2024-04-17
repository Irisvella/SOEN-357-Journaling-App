import React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

function WelcomePage({ navigation }) {
 
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        {/* Welcome section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome back SARAH !</Text>
          <Image
            source={require("../../assets/images/welcome.png")}
            style={styles.headerImage}
          />
        </View>

        <Text style={styles.sectionTitle}>Guided Prompts</Text>
        <View style={styles.guidedPromptsContainer}>
          {/* Guided prompt box 1 */}
          <TouchableOpacity style={styles.guidedPromptBox} onPress={() => navigation.navigate("GuidedJournalPage")}>
            <Text style={styles.guidedPromptText}>Today, I fell like...</Text>
          </TouchableOpacity>

          {/* Guided prompt box 2 */}
          <TouchableOpacity style={styles.guidedPromptBox1} onPress={() => navigation.navigate("GuidedJournalPage")}>
            <Text style={styles.guidedPromptText}>Something I enjoyed today was...</Text>
          </TouchableOpacity>
        </View>

        
        
        <View style={styles.newSection}>
          <Text style={styles.newSectionTitle}>Start a new one</Text>
          <TouchableOpacity
            style={styles.newSectionButton}
            onPress={() => navigation.navigate("JournalEntryPageScreen")}
          >
            <Text style={styles.newSectionButtonText}>+</Text>
          </TouchableOpacity>
        </View>

         {/* Navigation Bar */}
         <View style={styles.navBar}>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Goals")}>
            <Icon name="target" size={24} color="#563d2d" />
            <Text style={styles.navText}>Goals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("JournalEntriesScreen")}>
            <Icon name="book" size={24} color="#563d2d" />
            <Text style={styles.navText}>Journal entries</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("MoodTracker")}>
            <Icon name="mood" size={24} color="#563d2d" />
            <Text style={styles.navText}>Mood tracker</Text>
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

  welcomeSection: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFF6EF',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    overflow: 'hidden', // Ensures the image corners are also rounded
    // Space between this section and the next
  },
  welcomeTitle: {
    fontSize: 26,
    color: '#563d2d',
    fontWeight: 'bold',
    marginTop: 40,
  },
  headerImage: {
    width: '100%',
    height: 200,
    // resizeMode: 'cover' might be better if you don't want the image to be scaled disproportionately
    marginTop: 20,
    // If you have an image with rounded corners:
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },

  headerbox: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 15,
    marginTop: 20,
  },


  guidedPromptsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  guidedPromptBox: {
    backgroundColor: '#FFF0DB',
    borderRadius: 20,
    padding: 20,
    width: '45%', // Using a percentage here to ensure it fits within the container alongside the other box.
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, // Adds elevation for Android
    // Add shadows for iOS:
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  guidedPromptBox1:{
    backgroundColor: '#F9EEED',
    borderRadius: 20,
    padding: 20,
    width: '45%', // Using a percentage here to ensure it fits within the container alongside the other box.
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, // Adds elevation for Android
    // Add shadows for iOS:
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  guidedPromptText: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
   
  },
  // ... any additional styles .


  newSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  newSectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#563d2d', // Match the color to your theme
  },
  newSectionButton: {
    backgroundColor: '#563d2d', // Match the color to your theme
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // Shadow for Android
    // Shadows for iOS:
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  newSectionButtonText: {
    fontSize: 30,
    color: 'white',
    lineHeight: 30, // Adjust the line height to vertically center the plus sign
  },

  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FAD0C5', // Or use the appropriate color for the bar
    borderRadius: 30,
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  navItem: {
    alignItems: 'center',
    
    
  },
  navText: {
    fontSize: 14,
    color: '#563d2d',
    marginTop: 5,
    marginHorizontal: 10,
    
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
