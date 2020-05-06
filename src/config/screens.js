import { Navigation } from "react-native-navigation";
import Splash from "Splash/screens/Splash";
import { GlobalParent } from "./GlobalParent";

//Enable this when/if using codepush and wrap the screens with codePushWrapper() instead of GlobalParent()

// const codePushOptions = {
//   checkFrequency: codePush.CheckFrequency.ON_APP_START,
// };
// function codePushWrapper(Component) {
//   return codePush(codePushOptions)(GlobalParent(Component));
// }

//All screens should be wrapped in GlobalParent HOC
const initScreens = () => {
  Navigation.registerComponent("Splash", () => GlobalParent(Splash));
};

export default initScreens;
