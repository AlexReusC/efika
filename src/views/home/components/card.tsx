import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import cardStyle from "./cardStyle";

interface CardProps {
  goal: Goal;
}

const Card: React.FC<CardProps> = ({ goal }) => {
  return (
    <TouchableOpacity style={cardStyle.card}>
      <Text>{goal.name}</Text>
    </TouchableOpacity>
  );
};

export default Card;
