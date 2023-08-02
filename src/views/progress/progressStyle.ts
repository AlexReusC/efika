import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const progressStyle = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.white,
    height: "100%",
  },
  header: {
    margin: "5%",
  },
  goals: {
    marginHorizontal: "5%",
  },
  roundButton: {
    borderRadius: 100,
    width: 40,
    height: 40,
    backgroundColor: Colors.lightBlue,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default progressStyle;
