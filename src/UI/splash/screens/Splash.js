import React, { useEffect } from "react";
import { View, Text } from "react-native";
import globalStyle from "universal/globalStyle";
import { handleAppStartup } from "redux-local/actions/appBoot";
import { connect } from "react-redux";
import { compose } from "redux";
import { Navigation } from "react-native-navigation";

const Splash = (props) => {
  useEffect(() => {
    props.handleAppStartup();

    //Uncomment the following code if topbar is not required.
    //You can add other default settings too.

    // Navigation.setDefaultOptions({
    //   topBar: {
    //     visible: false,
    //     enabled: false,
    //   },
    // });
  }, []);

  useEffect(() => {
    if (props.app.isAppReady) {
      Navigation.push(props.componentId, {
        component: {
          name: "Login",
        },
      });
    }
  }, [props.app.isAppReady]);

  return (
    <View style={[globalStyle.container, globalStyle.center]}>
      <Text>Splash Screen</Text>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    app: state.app,
  };
};
const mapDispatchToProps = {
  handleAppStartup,
};
export default React.memo(
  compose(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )
  )(Splash)
);
