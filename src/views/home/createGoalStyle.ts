import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const heightScreen = Dimensions.get("window").height;

const createGoalStyle = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  modalSection: {
    alignItems: "center",
    backgroundColor: "white",
    margin: 20,
    borderRadius: 20,
    padding: 35,
  },
  roundButton: {
    borderRadius: 100,
    width: 40,
    height: 40,
    backgroundColor: colors.lightBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    height: heightScreen * 0.35,
    paddingBottom: "8%",
    paddingTop: "4%",
    backgroundColor: colors.softBlue,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  nameAndReps: {
    alignItems: "center",
    width: "80%",
  },
  numberOfRepetitions: {
    alignItems: "center",
    justifyContent: "space-around",
    height: "35%",
    width: "80%",
  },
  textInput: {
    borderColor: colors.black,
    width: "100%",
    borderBottomWidth: 2,
    textAlign: "center",
    fontSize: 27,
  },
  numberInput: {
    borderColor: colors.black,
    width: "30%",
    borderBottomWidth: 2,
    textAlign: "center",
    fontSize: 27,
  },
  numberRepetitionsText: {
    fontSize: 20,
  },
  changeRepetitionsButton: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    width: "50%",
  },
  changeRepetitionsButtonText: {
    fontSize: 22,
  },
  chipsArea: {
    width: "80%",
    height: "40%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "center",
    columnGap: 5,
    rowGap: 8,
  },
  options: {
    alignItems: "flex-start",
    paddingTop: "8%",
    paddingHorizontal: "5%",
    width: "100%",
  },
  optionsBlock: {
    width: "100%",
  },
  inactiveChip: {
    backgroundColor: colors.white,
  },
  activeChip: {
    backgroundColor: colors.mainBlue,
  },
  activeChipText: {
    color: colors.white,
    fontSize: 18,
  },
  inactiveChipText: {
    color: colors.black,
    fontSize: 18,
  },
  measureTypeArea: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  icon: {
    alignItems: "center",
  },
  title: {
    fontSize: 27,
  },
  dayOfWeek: {},
  createGoalButtonBlock: {
    alignItems: "center",
    marginVertical: "10%",
    width: "100%",
  },
  createGoalButton: {
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 50,
    padding: 10,
  },
  createGoalButtonText: {
    fontSize: 27,
  },
});

export default createGoalStyle;
