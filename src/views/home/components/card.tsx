import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import cardStyle from "./cardStyle";

import Colors from "../../../constants/colors";

interface CardProps {
  goal: Goal;
  pressAction: (goal: Goal) => void;
}

const Card: React.FC<CardProps> = ({ goal, pressAction }) => {
  return (
    <TouchableOpacity onPress={() => pressAction(goal)} style={cardStyle.card}>
      <View style={cardStyle.topPart}>
        <Text style={cardStyle.title}>{goal.name}</Text>
      </View>
      <View style={cardStyle.middlePart}>
        <AnimatedCircularProgress
          fill={70}
          size={120}
          width={15}
          rotation={0}
          backgroundColor={Colors.mainBlue}
          tintColor={Colors.black}
          duration={400}
        >
          {(fill) => <Text style={cardStyle.endDate}>{fill} %</Text>}
        </AnimatedCircularProgress>
      </View>
      <View>
        <Text style={cardStyle.endDate}>Termina: 20 de junio 2023</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
