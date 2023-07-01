import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const createGoalStyle = StyleSheet.create({
  screen: {
    height: "100%",
  },
  header: {
    alignItems: "center",
    height: "40%",
    backgroundColor: colors.softBlue,
  },
  options: {
    alignItems: "center",
    height: "60%",
  },
  chipsArea: {
    width: "80%",
    height: "40%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "center",
    columnGap: 5,
  },
  chip: {},
  chipText: {
    fontSize: 18,
  },
  durationTypeArea: {
    flexDirection: "row",
  },
});

export default createGoalStyle;
