import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useTranslation } from "react-i18next";

import goalProgressCardStyle from "./goalProgressCardStyle";
import Colors from "../../../constants/colors";

interface GoalProgressCardProps {
  goal: Goal;
  categoriesIconsObj: Record<Category, any>;
  pressAction: (goal: Goal) => void;
}

const GoalProgressCard: React.FC<GoalProgressCardProps> = ({ goal, categoriesIconsObj, pressAction }) => {
  const { t } = useTranslation();

  return (
    <TouchableOpacity style={goalProgressCardStyle.card} onPress={() => pressAction(goal)}>
      <View style={goalProgressCardStyle.icon}>
        <MaterialCommunityIcons name={categoriesIconsObj[goal.category]} color={Colors.mainBlue} size={50} />
      </View>
      <View style={goalProgressCardStyle.texts}>
        <Text style={goalProgressCardStyle.nameText}>{goal.name}</Text>
        <View style={goalProgressCardStyle.frequencyMeasureText}>
          <Text style={goalProgressCardStyle.subText}>{t(`createGoal:${goal.frequency}`)}</Text>
          <Text style={goalProgressCardStyle.subText}>{goal.measure ? t(`progress:${goal.measure}`) : null}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GoalProgressCard;
