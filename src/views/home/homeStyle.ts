import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const heightScreen = Dimensions.get("window").height;
const heightCardCarousel = heightScreen * 0.4;

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
});

export default homeStyle;
