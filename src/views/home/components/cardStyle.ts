import { StyleSheet } from "react-native";
import Colors from "../../../constants/colors";

const cardStyle = StyleSheet.create({
  card: {
    marginHorizontal: 5,
    paddingHorizontal: "4%",
    paddingVertical: "5%",
    height: "80%",
    aspectRatio: 0.6,
    backgroundColor: Colors.mainBlue,
    borderRadius: 15,
  },
  topPart: {
    height: "30%",
    flexDirection: "row",
  },
  leftTopPart: {
    width: "70%",
  },
  rightTopPart: {
    width: "30%",
    alignContent: "center",
    justifyContent: "center",
  },
  middlePart: {
    alignItems: "center",
    height: "55%",
  },
  bottomPart: {
    height: "15%",
  },
  title: {
    color: Colors.white,
    fontSize: 27,
  },
  endDate: {
    color: Colors.white,
    fontSize: 17,
  },
});

export default cardStyle;
