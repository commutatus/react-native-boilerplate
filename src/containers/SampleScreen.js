import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { APP_ENV } from 'react-native-dotenv'
import { connect } from 'react-redux'

const SampleScreen = (props) => {
  let { sampleData } = props
  return (
    <View style={styles.body}>
      <Text style={styles.sectionDescription}>Sample screen</Text>
      <View style={styles.container}>
        <View style={styles.strip}>
          <Text style={styles.stripLabel}>Default configs:</Text>
        </View>
        <Text style={styles.title}>1. App environment -> {APP_ENV}</Text>
        <Text style={styles.title}>2. Redux store -> {sampleData.data}</Text>
        <TouchableOpacity style={styles.button} onPress={() => Actions.pop()}>
          <Text style={styles.buttonText}>Go back</Text>
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
const mapStateToProps = (state) => ({
  sampleData: state.sample,
})

export default connect(mapStateToProps)(SampleScreen)
