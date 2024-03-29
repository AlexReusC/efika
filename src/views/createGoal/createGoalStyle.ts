import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;

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
  timeInputSection: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  textInputModal: {
    fontSize: 58,
    alignSelf: "flex-end",
  },
  roundButton: {
    borderRadius: 100,
    width: 40,
    height: 40,
    backgroundColor: colors.mainBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    height: heightScreen * 0.35,
    paddingBottom: "8%",
    paddingTop: "8%",
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
    flexDirection: "row",
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
  titleView: {
    marginBottom: "5%",
  },
  titleModal: {
    fontSize: 26,
    fontWeight: "500",
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
    paddingVertical: "3%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "center",
    columnGap: 5,
    rowGap: 8,
  },
  options: {
    alignItems: "flex-start",
    paddingTop: "6%",
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
  },
  inactiveChipText: {
    color: colors.black,
  },
  measureTypeArea: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: "2%",
  },
  icon: {
    alignItems: "center",
    paddingHorizontal: "5%",
  },
  activeIcon: {
    color: colors.mainBlue,
  },
  badgeStyle: {
    backgroundColor: colors.softBlue,
    position: "absolute",
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 27,
  },
  titleText: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconAndText: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dayOfWeekArea: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: "5%",
    width: "100%",
    paddingBottom: "2%",
  },
  dayOfWeekIcon: {
    width: widthScreen * 0.1,
    height: widthScreen * 0.1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  dayOfWeekIconActive: {
    backgroundColor: colors.mainBlue,
  },
  dayOfWeekIconInactive: {
    backgroundColor: colors.gray,
  },
  activeDayText: {
    color: colors.white,
  },
  inactiveDayText: {
    color: colors.black,
  },
  createGoalButtonBlock: {
    alignItems: "center",
    marginVertical: "5%",
    width: "100%",
  },
  createGoalButtonActive: {
    backgroundColor: colors.mainBlue,
    borderRadius: 50,
    padding: 10,
  },
  createGoalButtonInactive: {
    backgroundColor: colors.gray,
    borderRadius: 50,
    padding: 10,
  },
  createGoalButtonTextActive: {
    fontSize: 27,
    color: colors.white,
  },
  createGoalButtonTextInactive: {
    fontSize: 27,
    color: colors.white,
  },
  textModalView: {
    marginBottom: "10%",
  },
  helpText: {
    fontSize: 18,
  },
});

export default createGoalStyle;
