import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const homeStyle = StyleSheet.create({
  screen: {
    backgroundColor: Colors.lightBlue,
  },
  titleSection: {
    height: "35%",
    paddingVertical: "5%",
    paddingHorizontal: "7%",
    justifyContent: "space-around",
  },
  titleSectionIcon: {
    flexDirection: "row-reverse",
  },
  titleSectionText: {},
  goalsSection: {
    height: "65%",
    backgroundColor: Colors.white,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: "7%",
    paddingTop: "10%",
  },
  goalsSectionText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  goalsSectionCards: {},
});

export default homeStyle;
