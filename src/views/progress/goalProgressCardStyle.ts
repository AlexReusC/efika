import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const goalProgressCardStyle = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: "3%",
  },
  frequencyMeasureText: {
    flexDirection: "row",
  },
  texts: {
    marginLeft: "3%",
  },
  icon: {
    borderRadius: 10,
    borderColor: colors.gray,
    backgroundColor: "white",
    borderWidth: 1,
    elevation: 1,
  },
  nameText: {
    fontSize: 26,
    fontWeight: "500",
  },
  subText: {
    fontSize: 20,
    fontWeight: "300",
  },
});

export default goalProgressCardStyle;
