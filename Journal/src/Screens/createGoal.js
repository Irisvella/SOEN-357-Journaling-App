import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";


function createGoal({navigation}) {
    const [selectedMood, setSelectedMood] = useState(null);
  const [selectedAffects, setSelectedAffects] = useState([]);
  const [message, setMessage] = useState('');
  const [customLabel, setCustomLabel] = useState('');
  const [moodEntry, setMoodEntry] = useState(null);
  const saveEntry = () => {
    const moodEntry = {
      mood: selectedMood ? selectedMood-2 : "Not selected",
      affects: selectedAffects.length > 0 ? selectedAffects : ["None"],
      message: message !== "" ? message : "No message",
    };
    setMoodEntry(moodEntry);
    setShowMoodEntry(true);
    console.log("Saved Mood Entry:", moodEntry);
    navigation.navigate("Goals")
    
  };
    return (
        <ScrollView style={styles.background} contentContainerStyle={styles.scrollViewContent}>

      <View style={styles.headerbox}>
        <Text style={styles.header}>Create a goal:</Text>
      </View>


      <View style={styles.textInputContainer}>
        <Text style={styles.textInputLabel}>Let's Write About it</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message here"
          value={message}
          onChangeText={setMessage}
          multiline={true}
        />
      </View>

      <View style={styles.saveButtonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={saveEntry}>
          <Text style={styles.saveButtonText}>Save Entry</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
    )
};


const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#FFF6EF',
    },
    scrollViewContent: {
      flexGrow: 1,
    },
    headerbox: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#FFF6EF',
      borderBottomRightRadius: 50,
      borderBottomLeftRadius: 50,
      paddingTop: 50,
      paddingBottom: 20,
    },
    header: {
      fontSize: 29,
      color: '#744C4C',
    },
    container: {
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      padding: 15,
    },
    imageContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
    },
    image: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
    },
    moodCircleContainer: {
      borderRadius: 30,
      overflow: 'hidden',
    },
    moodCircle: {
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: '#FFF6EF',
      justifyContent: 'center',
      alignItems: 'center',
    },
    selectedMoodCircle: {
      borderWidth: 1.5,
      borderColor: '#744C4C',
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: '#EAF2E0',
      justifyContent: 'center',
      alignItems: 'center',
    },
    moodAffectsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      backgroundColor: '#FAD0C4',
      borderRadius: 25,
      paddingVertical: 5,
      paddingHorizontal: 15,
      marginVertical: 8,
      marginHorizontal: 5,
      shadowColor: '#744C4C',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    },
    selectedCard: {
      backgroundColor: '#FAACA8',
    },
    desc: {
      color: '#744C4C',
      fontSize: 14,
      marginTop: 5,
    },
    textInputContainer: {
      backgroundColor: '#FFF6EF',
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 15,
      margin: 20,
    },
    textInputLabel: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#744C4C',
    },
    textInput: {
      backgroundColor: '#FFF6EF',
      borderRadius: 9,
      paddingHorizontal: 15,
      paddingVertical: 10,
      fontSize: 16,
      color: '#744C4C',
      minHeight: 200,
      borderWidth: 2, 
      borderColor: '#744C4C',
    },
    addCustomLabelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    customLabelInput: {
      backgroundColor: '#EAF2E0',
      borderRadius: 25,
      paddingVertical: 5,
      paddingHorizontal: 15,
      marginVertical: 8,
      marginHorizontal: 5,
      shadowColor: '#744C4C',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      height: 33,
      width: 120,
    },
    addButtonContainer: {
      borderRadius: 20,
      width: 33,
      height: 33,
      backgroundColor: '#FF5987',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#744C4C',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    },
    saveButtonContainer: {
      alignItems: 'center',
      marginVertical: 20,
    },
    saveButton: {
      backgroundColor: '#FF5987',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 20,
    },
    saveButtonText: {
      color: '#FFF',
      fontSize: 16,
    },
    backButtonContainer: {
      marginVertical: 20,
    },
    backButton: {
      borderRadius: 20,
      marginLeft: 10,
      height: 20,
      width: 20,
    },
    backButtonText: {
      color: '#744C4C',
      fontSize: 25,
    },
    moodEntryContainer: {
      backgroundColor: '#EAF2E0',
      borderRadius: 20,
      margin: 30,
      shadowColor: '#744C4C',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    },
    moodEntryText: {
      color: '#744C4C',
      fontSize: 14,
      marginLeft: 20,
    },
    moodEntryImage: {
      width: 40, 
      height: 40,
      alignSelf: 'flex-end',
      marginTop: 20,
      marginRight: 20,
    }
  });

export default createGoal;