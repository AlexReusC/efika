import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { changeMeasureGoalPortion } from "../../../state/goalsSlicer";

import colors from "../../../constants/colors";

interface NormalViewProps {
  goal: Goal | null;
}

const NormalView: React.FC<NormalViewProps> = ({ goal }) => {
  const dispatch = useDispatch();

  const [insideMeasure, setInsideMeasure] = useState<number | undefined>(undefined);
  useEffect(() => setInsideMeasure(goal?.goalPortions[goal.itGoalPortion].measure), []);

  const changeMeasure = () => {
    setInsideMeasure(1);
    dispatch(changeMeasureGoalPortion({ id: goal?.id || "", measure: 1 }));
  };

  return (
    <View style={normalViewStyle.view}>
      {insideMeasure === 0 ? (
        <TouchableOpacity style={normalViewStyle.roundButton} onPress={() => changeMeasure()}>
          <Text style={normalViewStyle.text}>Presiona para completar repetición</Text>
        </TouchableOpacity>
      ) : (
        <Text style={normalViewStyle.textCompleted}>Repetición completada</Text>
      )}
    </View>
  );
};

const normalViewStyle = StyleSheet.create({
  view: {
    width: "95%",
    paddingVertical: "10%",
    alignContent: "center",
    alignItems: "center",
  },
  roundButton: {
    backgroundColor: colors.mainBlue,
    padding: "5%",
    borderRadius: 100,
  },
  text: {
    color: colors.white,
    fontSize: 23,
    textAlign: "center",
  },
  textCompleted: {
    fontSize: 23,
    color: colors.mainBlue,
  },
});

export default NormalView;
