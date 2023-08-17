import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import cardStyle from "./cardStyle";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import Colors from "../../../constants/colors";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { categoriesUtil } from "../../createGoal/utils/createGoalUtils";
import en from "dayjs/locale/en";
import es from "dayjs/locale/es";

interface CardProps {
  goal: Goal;
  pressAction: (goal: Goal) => void;
}

const categoriesIcons = categoriesUtil.reduce<Record<Category, any>>((r, o) => {
  r[o.name] = o.icon;
  return r;
}, {} as Record<Category, any>);

const Card: React.FC<CardProps> = ({ goal, pressAction }) => {
  const { t, i18n } = useTranslation();

  const currentMeasure = goal.goalPortions[goal.itGoalPortion].measure;
  let fill = 1;
  if (!goal.measure) {
    fill = currentMeasure / 1;
  } else if (goal.measure === "sets") {
    fill = currentMeasure / (goal.sets || 1);
  } else if (goal.measure === "time") {
    fill = currentMeasure / (goal.time || 1);
  }

  return (
    <TouchableOpacity onPress={() => pressAction(goal)} style={cardStyle.card}>
      <View style={cardStyle.topPart}>
        <Text style={cardStyle.title} numberOfLines={2}>
          {goal.name} <MaterialCommunityIcons name={categoriesIcons[goal.category]} size={27} />
        </Text>
      </View>
      <View style={cardStyle.middlePart}>
        <AnimatedCircularProgress
          fill={Math.trunc(fill * 100)}
          size={120}
          width={15}
          rotation={0}
          backgroundColor={Colors.mainBlue}
          tintColor={Colors.black}
          duration={400}
        >
          {() => <Text style={cardStyle.endDate}>{Math.trunc(fill * 100)} %</Text>}
        </AnimatedCircularProgress>
      </View>
      <View>
        <Text style={cardStyle.endDate}>
          Termina:{" "}
          {dayjs(goal.goalPortions[goal.itGoalPortion].finalDate)
            .locale(i18n.language === "en" ? en : es)
            .format("MMM DD H:m")}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
