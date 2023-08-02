import { StyleSheet } from "react-native";
import Colors from "../../../constants/colors";

const modalContentStyle = StyleSheet.create({
  modalSection: {
    alignItems: "center",
    backgroundColor: "white",
    margin: 20,
    borderRadius: 20,
    padding: 35,
  },
  percentageRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  roundButton: {
    borderRadius: 100,
    width: 20,
    height: 20,
  },
  greenButton: {
    backgroundColor: Colors.green,
  },
  yellowButton: { backgroundColor: Colors.yellow },
  redButton: { backgroundColor: Colors.red },
  closeButton: {
    borderRadius: 100,
    width: 40,
    height: 40,
    backgroundColor: Colors.lightBlue,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default modalContentStyle;
