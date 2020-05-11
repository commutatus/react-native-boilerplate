import { Navigation } from "react-native-navigation";
import initScreens from "config/screens";

initScreens();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "Splash",
              options: {
                topBar: {
                  visible: false,
                  enabled: false,
                },
              },
            },
          },
        ],
      },
    },
  });
});
