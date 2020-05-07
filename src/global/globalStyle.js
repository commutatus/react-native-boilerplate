//Global Stylesheet
import { StyleSheet, Dimensions, Platform } from "react-native";
const { height, width } = Dimensions.get("window");

const globalStyle = StyleSheet.create({
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.75)",
  },
  row: {
    flexDirection: "row",
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#000",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    width,
  },
});

export default globalStyle;
