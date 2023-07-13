import { StyleSheet } from "react-native";
import Colors from "../../../constants/colors";

const cardStyle = StyleSheet.create({
  card: {
    marginHorizontal: 5,
    height: "80%",
    aspectRatio: 0.6,
    backgroundColor: Colors.mainPurple,
    borderRadius: 15,
  },
});

export default cardStyle;
