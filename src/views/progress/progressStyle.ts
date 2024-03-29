import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const progressStyle = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.white,
    height: "100%",
  },
  noTasksView: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "40%",
  },
  header: {
    marginHorizontal: "5%",
    marginVertical: "3%",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "300",
  },
  goals: {
    marginHorizontal: "5%",
  },
  title: {
    fontSize: 26,
    fontWeight: "500",
  },
  roundButton: {
    borderRadius: 100,
    width: 40,
    height: 40,
    backgroundColor: Colors.mainBlue,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default progressStyle;
