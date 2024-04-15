import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity, TextInput, Image } from 'react-native';

const image1 = require('../../assets/svg/1-crying-face.svg');
const image2 = require('../../assets/svg/2-sad-face.svg');
const image3 = require('../../assets/svg/3-neutral-face.svg');
const image4 = require('../../assets/svg/4-smiling-face.svg');
const image5 = require('../../assets/svg/5-happy-face.svg');

const moodAffects = [
    { label: "Work" },
    { label: "School" },
    { label: "Family" },
    { label: "Physical Condition" },
    { label: "Sleep" },
    { label: "Social" },
];

const MoodTrackerPage = ({ navigation }) => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedAffects, setSelectedAffects] = useState([]);
  const [message, setMessage] = useState('');
  const [customLabel, setCustomLabel] = useState('');
  const [moodEntry, setMoodEntry] = useState(null);

  const toggleMoodSelection = (image) => {
    setSelectedMood(image);
  };

  const toggleAffectsSelection = (label) => {
    const isSelected = selectedAffects.includes(label);
    let updatedSelectedAffects;

    if (isSelected) {
      updatedSelectedAffects = selectedAffects.filter((mood) => mood !== label);
    } else {
      updatedSelectedAffects = [...selectedAffects, label];
    }
    setSelectedAffects(updatedSelectedAffects);
  };

  const addCustomLabel = () => {
    if (customLabel.trim() !== "") {
      moodAffects.push({ label: customLabel });
      setCustomLabel('');
    }
  };

  const saveMoodEntry = () => {
    const moodEntry = {
      mood: selectedMood ? selectedMood-2 : "Not selected",
      affects: selectedAffects.length > 0 ? selectedAffects : ["None"],
      message: message !== "" ? message : "No message",
    };
    setMoodEntry(moodEntry);
    setShowMoodEntry(true);
    console.log("Saved Mood Entry:", moodEntry);
    
  };

  const getImageSource = (mood) => {
    switch (mood) {
      case 1:
        return require('../../assets/svg/1-crying-face.svg');
      case 2:
        return require('../../assets/svg/2-sad-face.svg');
      case 3:
        return require('../../assets/svg/3-neutral-face.svg');
      case 4:
        return require('../../assets/svg/4-smiling-face.svg');
      case 5:
        return require('../../assets/svg/5-happy-face.svg');
      default:
        return null;
    }
  };

  const [showMoodEntry, setShowMoodEntry] = useState(false);
  const RenderMoodEntry = ({ moodEntry }) => (
    <View style={styles.moodEntryContainer}>
      <View>
        <Image
          source={moodEntry ? getImageSource(moodEntry.mood) : null}
          style={styles.moodEntryImage}
        />
      </View>
      <Text style={styles.moodEntryText}>Mood (1-5): {moodEntry.mood}</Text>
      <Text style={styles.moodEntryText}>{"\n"}</Text>
      <Text style={styles.moodEntryText}>Mood has been Affected by:{"\n"}{moodEntry.affects.join(', ')}</Text>
      <Text style={styles.moodEntryText}>{"\n"}</Text>
      <Text style={styles.moodEntryText}>Message Left:{"\n"}{moodEntry.message}</Text>
      <Text style={styles.moodEntryText}>{"\n"}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.background} contentContainerStyle={styles.scrollViewContent}>

      <View style={styles.headerbox}>
        <Text style={styles.header}>How are you feeling?</Text>
      </View>

      <View style={styles.imageContainer}>
        <TouchableMoodCircle image={image1} onPress={() => toggleMoodSelection(image1)} selected={selectedMood === image1} />
        <TouchableMoodCircle image={image2} onPress={() => toggleMoodSelection(image2)} selected={selectedMood === image2} />
        <TouchableMoodCircle image={image3} onPress={() => toggleMoodSelection(image3)} selected={selectedMood === image3} />
        <TouchableMoodCircle image={image4} onPress={() => toggleMoodSelection(image4)} selected={selectedMood === image4} />
        <TouchableMoodCircle image={image5} onPress={() => toggleMoodSelection(image5)} selected={selectedMood === image5} />
      </View>

      <View style={styles.headerbox}>
        <Text style={styles.header}>What is affecting your mood?</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.moodAffectsContainer}>
          {moodAffects.map((card, index) => (
            <TouchableOpacity key={index} onPress={() => toggleAffectsSelection(card.label)}>
              <View style={[styles.card, selectedAffects.includes(card.label) && styles.selectedCard]}>
                <Text style={styles.desc}>{card.label}</Text>
              </View>
            </TouchableOpacity>
          ))}
          
          <View style={styles.addCustomLabelContainer}>
            <TextInput
              style={styles.customLabelInput}
              placeholder="Other..."
              placeholderTextColor="#A0A0A0"
              value={customLabel}
              onChangeText={setCustomLabel}
            />
            <View style={styles.addButtonContainer}>
              <Button title="+" onPress={addCustomLabel} color="transparent"/>
            </View>
          </View>
        </View>
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
        <TouchableOpacity style={styles.saveButton} onPress={saveMoodEntry}>
          <Text style={styles.saveButtonText}>Save Mood Entry</Text>
        </TouchableOpacity>
      </View>

      {showMoodEntry && <RenderMoodEntry moodEntry={moodEntry} />}
    </ScrollView>
  );
}

const TouchableMoodCircle = ({ image, onPress, selected }) => (
  <TouchableOpacity onPress={onPress} style={styles.moodCircleContainer}>
    <View style={[styles.moodCircle, selected && styles.selectedMoodCircle]}>
      <Image source={image} style={styles.image} />
    </View>
  </TouchableOpacity>
);

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

export default MoodTrackerPage;
