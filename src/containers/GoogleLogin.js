import React, { Component } from 'react';
import { View } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
 


export default class GoogleLogin extends Component {

  signIn = async () => {
    GoogleSignin.configure({
      androidClientId: "ANDROID_GOOGLE_CLIENT_ID",
      iosClientId: "IOS_GOOGLE_AUTH_KEY_HERE",
    });

    try {
      let userInfo = await GoogleSignin.signIn();
      // console.log(userInfo)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  render() {
    return (
      <View>
        <GoogleSigninButton
          style={{ width: 192 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={this.signIn}
        />
      </View>
    );
  }
};

