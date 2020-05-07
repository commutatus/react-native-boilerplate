import React, { Component } from "react";
import { SafeAreaView, View, Text, Dimensions, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store, persistor } from "redux-local/store";
import { client } from "./../../apolloClient";
import { ApolloProvider } from "react-apollo";
import NetInfo from "@react-native-community/netinfo";
import { PersistGate } from "redux-persist/integration/react";
import globalStyle from "universal/globalStyle";
import { Navigation } from "react-native-navigation";

const { height, width } = Dimensions.get("window");

//This is the Top HOC for all the screens in the project.
//Add universally reusable code here. For eg. modals, pop-ups, common CTAs
//Add universal listeners here, For eg, No internet connectivity listener.

export const GlobalParent = (Child) => {
  return class TopHOC extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isInternetConnected: true,
      };
    }

    //Listens for internet connection
    componentDidMount() {
      this.netInfoListener = NetInfo.addEventListener(
        this.handleInternetConnection
      );
      this.navigationEventListener = Navigation.events().bindComponent(this);
    }

    componentWillUnmount() {
      this.netInfoListener();
    }

    handleInternetConnection = (state) => {
      let { isInternetConnected } = this.state;
      if (isInternetConnected !== state?.isInternetReachable) {
        this.setState({ isInternetConnected: state?.isInternetReachable });
      }
    };

    //Handles GA screen names
    // componentDidAppear = (data) => {
    //   firebase
    //     ?.analytics()
    //     ?.setCurrentScreen(data?.componentName || "Title unavailable");
    // };

    render() {
      let { isInternetConnected } = this.state;
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ApolloProvider client={client}>
              {isInternetConnected ? (
                <Child {...this.props} globalParent={this} />
              ) : (
                <View style={[styles.container, globalStyle?.center]}>
                  <Text style={styles.heading}>Uh Ho!</Text>
                  <Text style={styles.text}>
                    Looks like you don't have access to the internet.
                  </Text>
                </View>
              )}
            </ApolloProvider>
          </PersistGate>
        </Provider>
      );
    }
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  heading: {
    fontSize: 24,
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});
