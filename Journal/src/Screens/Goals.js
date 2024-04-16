import React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const image1 = require("../../assets/svg/1-crying-face.svg")
const ramen = require("../../assets/images/ramen.jpg")

function Goals({navigation}) {
    return (
        <View style={{flex: 1}}>
            <ScrollView vertical style={styles.background}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>
                        Set a Goal
                    </Text>
                </View>
                <View style={styles.guidedPromptsContainer}>
                {/* Here you can map through your prompts or manually place them as needed */}
                <TouchableOpacity onPress={() => navigation.navigate("Goal1")}>
                  <View style={styles.prompt}>
                    <Image source={ramen} style={styles.image}/>
                    <View>
                      <Text style={styles.promptText}>
                        Eat Dry Ramen
                      </Text>
                      <Text>
                        Make a dry ramen vegan for dinner
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={styles.prompt1}>
                  <TouchableOpacity onPress={() => navigation.navigate("GuidedJournalPage")}>
                  <Text style={styles.promptText}>This is the journal...</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.navigate("createGoal")}>
                <Text style={styles.fabIcon}>+</Text>
          </TouchableOpacity>
              </View>
              
            </ScrollView>
        </View>
    )
};
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
      maxHeight: 500
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
      flexDirection: "row",
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
    image: {
      width: 48,
      height: 48,
      marginRight: 6 
    },
    subText: {
      fontSize: 16,
      color: "#D9D9D9"
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
export default Goals;