import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import Colors from "../../../constants/colors";

interface MultipleProgressBarProps {
  goal: Goal | null;
}

const MultipleProgressBar: React.FC<MultipleProgressBarProps> = () => {
  return (
    <View>
      <AnimatedCircularProgress fill={24} size={120} width={15} rotation={0} tintColor={Colors.green} duration={400} />
      <AnimatedCircularProgress
        fill={24}
        delay={100}
        rotation={90}
        size={120}
        width={15}
        tintColor={Colors.yellow}
        style={{ position: "absolute" }}
      />
      <AnimatedCircularProgress
        fill={24}
        delay={100}
        rotation={180}
        size={120}
        width={15}
        tintColor={Colors.red}
        style={{ position: "absolute" }}
      />
      <AnimatedCircularProgress
        fill={24}
        delay={100}
        rotation={270}
        size={120}
        width={15}
        tintColor={Colors.lightGray}
        style={{ position: "absolute" }}
      />
    </View>
  );
};

export default MultipleProgressBar;
