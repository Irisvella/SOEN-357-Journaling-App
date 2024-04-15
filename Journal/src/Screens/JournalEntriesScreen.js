import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

function JournalEntriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journal Entries</Text>
      <View style={styles.segmentedControl}>
        <Text style={styles.segmentedControlText}>Day</Text>
        <Text style={[styles.segmentedControlText, styles.segmentedControlTextActive]}>Month</Text>
        <Text style={styles.segmentedControlText}>Year</Text>
      </View>
      <ScrollView style={styles.entriesContainer}>
        {/* This is where you would map through your entries */}
        <TouchableOpacity
          style={styles.entry}>
          <Text style = {styles.entryTitle}>Today's journal entry</Text>
          <Text>April 5th, 2024</Text>
          <Text style={styles.hashtags}>vacation #bless #camping</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.entry}>
          <Text style = {styles.entryTitle}>Today's journal entry</Text>
          <Text>April 6th, 2024</Text>
          <Text style={styles.hashtags}>Finals #based #study</Text>
        </TouchableOpacity>

        {/* Add more entries here */}
      </ScrollView>
      <TouchableOpacity style={styles.fab}
      onPress={() => navigation.navigate('JournalEntryPageScreen')}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF6EF",
  },
  title: {
    fontSize: 26,
    color: '#563d2d',
    fontWeight: 'bold',
    marginTop: 40,
    alignSelf: 'center',
  },
  segmentedControl: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  hashtags:{
    color: '#DE3163',
    fontWeight: 'bold',
  },
  entryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  segmentedControlText: {
    padding: 8,
    marginHorizontal: 4,
    color: 'grey',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  segmentedControlTextActive: {
    color: 'red',
    borderBottomColor: 'red',
  },
  entriesContainer: {
    flex: 1,
  },
  entry: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 10,
    // Add shadow or elevation based on your preference
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    elevation: 3,
  },
  fab: {
    backgroundColor: '#563d2d',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    right: '50%',
    // Add shadow or elevation based on your preference
    shadowColor: 'brown',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    elevation: 3,
  },
  fabIcon: {
    fontSize: 30,
    color: 'white',
  },
});

export default JournalEntriesScreen;