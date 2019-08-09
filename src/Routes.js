import React, { Component } from 'react';
import {
  Router,
  Stack,
  Scene,
} from 'react-native-router-flux';
import { ApolloProvider } from 'react-apollo';
import { client } from '../apolloClient';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import SampleScreen from './containers/SampleScreen'
import Home from './containers/Home';

class Routers extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <SafeAreaView style={styles.body}>
          <Router>
            <Stack key="stack">
              <Scene
                key="home"
                component={Home}
                hideNavBar
              />
              <Scene
                key="sampleScreen"
                component={SampleScreen}
                hideNavBar
              />
            </Stack>
          </Router>
        </SafeAreaView>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
});


export default Routers;
