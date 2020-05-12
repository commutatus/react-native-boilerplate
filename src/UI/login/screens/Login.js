import React, { useEffect } from "react";
import { View, Text } from "react-native";
import globalStyle from "universal/globalStyle";

const Login = (props) => {
  return (
    <View style={[globalStyle.container, globalStyle.center]}>
      <Text>Login</Text>
    </View>
  );
};

export default React.memo(Login);
