import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function JournalEntryPageScreen({ navigation }) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [textEntry, setTextEntry] = useState('Today was a whirlwind. The morning started with a rush as I dashed to catch the bus, fueled by a quick cup of coffee. The city buzzed with energy as I navigated through the crowded streets, each passerby lost in their own world...');
    const [isEditing, setIsEditing] = useState(false);
  
    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showDatepicker = () => {
        setShow(true);
      };
  
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Journal Entry Page</Text>
        <TouchableOpacity>
          <Text style={styles.editButton}>✎</Text>
        </TouchableOpacity>
      </View>


      <Text style={styles.title}>This is a journal about my life</Text>
      
      <TouchableOpacity style={styles.datePicker} onPress={showDatepicker}>
        <Text>{date.toLocaleDateString()}</Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChangeDate}
        />
      )}

      <ScrollView style={styles.entryContainer}>
        {isEditing ? (
          <TextInput
            style={[styles.entryText, styles.entryTextInput]}
            onChangeText={setTextEntry}
            value={textEntry}
            multiline
            autoFocus
          />
        ) : (
          <TouchableOpacity onPress={() => setIsEditing(true)}>
            <Text style={styles.entryText}>{textEntry}</Text>
          </TouchableOpacity>
        )}
      </ScrollView>

      <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(!isEditing)}>
        <Text style={styles.editButtonText}>✎</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        {/* Footer Icons */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.footerIcon}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerIcon}>📷</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerIcon}>🎙️</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerIcon}>📎</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF6EF",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
    marginHorizontal: 20,
  },
  backButton: {
    fontSize: 18,
    color: '#000',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#563d2d',
  },
  editButton: {
    fontSize: 18,
    color: '#563d2d',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#563d2d',
    alignSelf: 'center',
    marginTop: 20,
  },
  datePicker: {
    alignSelf: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 20,
  },
  entryContainer: {
    flex: 1,
    padding: 20,
  },
  entryText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },
  footerIcon: {
    fontSize: 24,
    color: '#000',
  },
  datePicker: {
    alignSelf: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 20,
  },
  entryContainer: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  entryText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
    backgroundColor: 'white', // Added for visibility
    borderRadius: 10, // To match your style requirement
    padding: 10, // To give some padding inside the text box
  },
  entryTextInput: {
    textAlignVertical: 'top', // Needed for multiline input on Android
  },
  editButton: {
    position: 'absolute',
    right: 20,
    bottom: 80, // Adjust as needed
  },
  editButtonText: {
    fontSize: 24,
  },
});

export default JournalEntryPageScreen;
