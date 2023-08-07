import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { changeMeasureGoalPortion } from "../../../state/goalsSlicer";
import colors from "../../../constants/colors";

interface SetsViewProps {
  goal: Goal | null;
}

const SetsView: React.FC<SetsViewProps> = ({ goal }) => {
  const dispatch = useDispatch();
  const [insideMeasure, setInsideMeasure] = useState<number | undefined>(
    goal?.goalPortions[goal.itGoalPortion].measure
  );
  const [setsTextInput, setSetsTextInput] = useState<string | null>(null);

  const changeSetsText = (text: string) => {
    if (text.length == 0) {
      setSetsTextInput(null);
    } else {
      const regexRule = /^[1-9][0-9]{0,2}$/;
      if (regexRule.test(text)) {
        setSetsTextInput(text);
      }
    }
  };

  const changeMeasure = () => {
    const addition = (insideMeasure || 0) + parseInt(setsTextInput || "0");
    setInsideMeasure(addition);
    dispatch(changeMeasureGoalPortion({ id: goal?.id || "", measure: addition }));
  };

  return (
    <View style={SetsViewStyle.view}>
      <Text style={SetsViewStyle.text}>Series hechas:</Text>
      <Text style={SetsViewStyle.text}>
        {insideMeasure} / {goal?.sets}
      </Text>
      <View style={SetsViewStyle.space}></View>
      <Text style={SetsViewStyle.text}>Agregar:</Text>
      <View style={SetsViewStyle.textInputAndButtonRow}>
        <View>
          <TextInput
            placeholder="00"
            keyboardType="decimal-pad"
            value={setsTextInput !== null ? setsTextInput : ""}
            onChangeText={(text) => changeSetsText(text)}
            style={SetsViewStyle.text}
          />
          <View style={SetsViewStyle.line}></View>
        </View>
        <TouchableOpacity style={SetsViewStyle.roundButton} onPress={() => changeMeasure()}>
          <Ionicons color={colors.white} name="add" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SetsViewStyle = StyleSheet.create({
  view: {
    width: "95%",
    paddingVertical: "10%",
    alignContent: "center",
    alignItems: "center",
  },
  roundButton: {
    borderRadius: 100,
    width: 30,
    height: 30,
    backgroundColor: colors.mainBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  space: {
    height: "5%",
  },
  text: {
    fontSize: 23,
    textAlign: "center",
  },
  textInputAndButtonRow: {
    width: "50%",
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  line: {
    width: "100%",
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
});

export default SetsView;
