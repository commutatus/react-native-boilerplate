import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.sectionDescription}>Welcome to React Native Awesome boilerplate.</Text>
      <View style={styles.container}>
        <View style={styles.strip}>
          <Text style={styles.stripLabel}>Contents:</Text>
        </View>
        <Text style={styles.title}>1. React native router flex.</Text>
        <Text style={styles.title}>2. Travis integrated.</Text>
        <Text style={styles.title}>3. Fastlane integrated.</Text>
        <Text style={styles.title}>4. Redux integrated.</Text>
        <Text style={styles.title}>5. GraphQl integrated.</Text>
        <Text style={styles.title}>6. Basic env setup (staging / prod).</Text>
        <Text style={styles.title}>7. Options to switch env</Text>
        <TouchableOpacity style={styles.button} onPress={() => Actions.sampleScreen()}>
          <Text style={styles.buttonText}>Click here to navigate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center'
  },
  title: {
    fontSize: 20,
  },
  container: {
    margin: 20
  },
  strip: {
    padding: 10,
    backgroundColor: 'lightblue',
    marginBottom: 20
  },
  stripLabel: {
    fontSize: 24
  },
  buttonText: {
    color: 'blue',
    padding: 10,
    fontSize: 20,
    textAlign: 'center'
  }

});

export default App
