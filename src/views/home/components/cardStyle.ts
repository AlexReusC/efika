import { StyleSheet } from "react-native";
import Colors from "../../../constants/colors";

const cardStyle = StyleSheet.create({
  card: {
    marginHorizontal: 5,
    paddingHorizontal: "3%",
    paddingVertical: "5%",
    height: "80%",
    aspectRatio: 0.6,
    backgroundColor: Colors.mainBlue,
    borderRadius: 15,
  },
  topPart: {
    height: "20%",
  },
  middlePart: {
    alignItems: "center",
    height: "60%",
  },
  bottomPart: {
    height: "20%",
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
