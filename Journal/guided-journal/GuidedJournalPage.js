import { Image } from 'react-native';
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from 'react-native-web';

const cardData = [
    { title: "Quick Guide", desc: "Follow this guide to record your day easily!"},
    { title: "Gratitude", desc: "Express your gratitude and it will light up your day!"},
    { title: "Self-Care", desc: "Expressing ourselves allows us to understand our thoughts and move on"},
    { title: "Learning", desc: "Continuously learning grows our minds, no matter the age"},
];

export default function GuidedJournalPage() {
  return (
    <View style={styles.background}>
        <View style={styles.headerbox}>
            <Text style={styles.header}>Guided Journals</Text>
        </View>
        <View style={styles.container}>
        <View style={styles.card1}>
            <Text style={styles.title}>Quick Guide</Text>
            <Text style={styles.desc}>Follow this guide to record your day easily!</Text>
        </View>
        <View style={styles.card2}>
            <Text style={styles.title}>Gratitude</Text>
            <Text style={styles.desc}>Express your gratitude and it will light up your day!</Text>
        </View>
        <View style={styles.card3}>
            <Text style={styles.title}>Self-Care</Text>
            <Text style={styles.desc}>Expressing ourselves allows us to understand our thoughts and move on</Text>
        </View>
        <View style={styles.card4}>
            <Text style={styles.title}>Learning</Text>
            <Text style={styles.desc}>Continuously learning grows our minds, no matter the age</Text>
        </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
    position: '',
  },
  /*
  background: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
  },
  */
  headerbox: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#FFF6EF',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  header: {
    fontSize: 40,
    color: '#744C4C',
    
    marginTop: 50,
    marginBottom: 50,
    width: '100vw'
  },
  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 15,
    paddingTop: 10,
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

