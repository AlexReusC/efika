import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const progressStyle = StyleSheet.create({
  mainView: {
    backgroundColor: colors.white,
    height: "100%",
  },
  modalSection: {
    alignItems: "center",
    backgroundColor: "white",
    margin: 20,
    borderRadius: 20,
    padding: 35,
  },
  header: {
    margin: "5%",
  },
  goals: {
    marginHorizontal: "5%",
  },
});

export default progressStyle;
