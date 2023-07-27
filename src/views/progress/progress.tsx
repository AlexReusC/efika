import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import type { RootState } from "../../state/store";
import { useDispatch } from "react-redux";

const Progress: React.FC = () => {
  const myGoals = useSelector((state: RootState) => state.goals.value);
  console.log(myGoals);
  return (
    <View>
      <Text>Progress</Text>
      {myGoals.map((goal: Goal) => (
        <View key={goal.id}>
          <Text>{goal.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Progress;
