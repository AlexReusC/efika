import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import cardStyle from "./cardStyle";

interface CardProps {
  goal: Goal;
  pressAction: (goal: Goal) => void;
}

const Card: React.FC<CardProps> = ({ goal, pressAction }) => {
  return (
    <TouchableOpacity onPress={() => pressAction(goal)} style={cardStyle.card}>
      <Text>{goal.name}</Text>
    </TouchableOpacity>
  );
};

export default Card;
