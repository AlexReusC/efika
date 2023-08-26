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
  titleView: {
    marginBottom: "5%",
  },
  title: {
    fontSize: 26,
    fontWeight: "500",
  },
  percentageRow: {
    flexDirection: "row",
    marginVertical: "1%",
    alignItems: "center",
  },
  placeholder: {
    width: "2%",
  },
  roundButton: {
    borderRadius: 100,
    width: 20,
    height: 20,
  },
  percentages: {
    marginVertical: "5%",
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
