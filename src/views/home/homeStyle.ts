import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const ScreenWidth = Dimensions.get("window").width;

const homeStyle = StyleSheet.create({
  screen: {
    backgroundColor: Colors.mainBlue,
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
  titleTextTop: {
    fontSize: 28,
    color: Colors.white,
    fontWeight: "600",
  },
  titleText: {
    fontSize: 25,
    color: Colors.white,
  },
  titleTextGoals: {
    fontSize: 25,
  },
  roundScore: {
    backgroundColor: Colors.orange,
    borderRadius: 40 / 2,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  completeBlock: {
    width: "80%",
  },
  roundButtonNormal: {
    borderRadius: 100,
    height: 40,
    backgroundColor: Colors.mainBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  goalsSection: {
    height: "65%",
    backgroundColor: Colors.white,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: "7%",
  },
  goalsSectionText: {
    height: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goalsSectionCards: {
    height: "80%",
  },
  modalSection: {
    alignItems: "center",
    backgroundColor: "white",
    margin: 20,
    borderRadius: 20,
    padding: "5%",
  },
  //TODO: Improve round style
  roundButton: {
    borderRadius: 100,
    width: 40,
    height: 40,
    backgroundColor: Colors.mainBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  noTasksView: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "30%",
    width: ScreenWidth - 0.14 * ScreenWidth,
  },
  noTasksText: {
    fontSize: 20,
    fontWeight: "300",
  },
});

export default homeStyle;
