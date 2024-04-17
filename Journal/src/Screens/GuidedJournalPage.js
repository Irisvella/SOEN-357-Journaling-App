import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';

const cardData = [
    { title: "Quick Guide", desc: "Follow this guide to record your day easily!" },
    { title: "Gratitude", desc: "Express your gratitude and it will light up your day!" },
    { title: "Self-Care", desc: "Expressing ourselves allows us to understand our thoughts and move on" },
    { title: "Learning", desc: "Continuously learning grows our minds, no matter the age" },
];

const GuidedJournalPage = ({ navigation }) => {
  const handleCardPress = () => {
    navigation.navigate("JournalEntryPageScreen");
  };

  return (
    <ScrollView style={styles.background}>
      <View style={styles.headerbox}>
        <Text style={styles.header}>Guided Journals</Text>
      </View>
      <View style={styles.container}>
        {cardData.map((card, index) => (
          <TouchableOpacity key={index} onPress={handleCardPress}>
            <View style={styles[`card${index + 1}`]}>
              <Text style={styles.title}>{card.title}</Text>
              <Text style={styles.desc}>{card.desc}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF6EF',
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
    fontSize: 40,
    color: '#744C4C',
  },
  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 15,
  },
  card1: {
    backgroundColor: '#FAD0C5',
    borderRadius: 16,
    padding: 15,
    margin: 8,
    shadowColor: '#744C4C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  card2: {
    backgroundColor: '#F9EEED',
    borderRadius: 16,
    padding: 15,
    margin: 8,
    shadowColor: '#744C4C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  card3: {
    backgroundColor: '#D9D9D9',
    borderRadius: 16,
    padding: 15,
    margin: 8,
    shadowColor: '#744C4C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  card4: {
    backgroundColor: '#EAF2E0',
    borderRadius: 16,
    padding: 15,
    margin: 8,
    shadowColor: '#744C4C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  title: {
    color: '#744C4C',
    fontWeight: 'bold',
    fontSize: 18,
  },
  desc: {
    color: '#744C4C',
    fontSize: 14,
    marginTop: 5,
  },
});

export default GuidedJournalPage;
