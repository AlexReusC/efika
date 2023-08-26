import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import Colors from "../../../constants/colors";

interface MultipleProgressBarProps {
  timesCompleted: number;
  timesPartial: number;
  timesUncompleted: number;
}

const MultipleProgressBar: React.FC<MultipleProgressBarProps> = ({
  timesCompleted,
  timesPartial,
  timesUncompleted,
}) => {
  return (
    <View>
      <AnimatedCircularProgress
        fill={timesCompleted * 100}
        size={120}
        width={15}
        rotation={0}
        backgroundColor={Colors.lightGray}
        tintColor={Colors.green}
        duration={400}
      />
      <AnimatedCircularProgress
        fill={timesPartial * 100}
        delay={100}
        rotation={timesCompleted * 360}
        size={120}
        width={15}
        tintColor={Colors.yellow}
        style={{ position: "absolute" }}
      />
      <AnimatedCircularProgress
        fill={timesUncompleted * 100}
        delay={100}
        rotation={timesCompleted * 360 + timesPartial * 360}
        size={120}
        width={15}
        tintColor={Colors.red}
        style={{ position: "absolute" }}
      />
    </View>
  );
};

export default MultipleProgressBar;
