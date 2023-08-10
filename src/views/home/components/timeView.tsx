import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { CircularProgress } from "react-native-circular-progress";
import Ionicons from "@expo/vector-icons/Ionicons";

import colors from "../../../constants/colors";
import { toMinuteAndSeconds } from "../../../utils/stringUtils";
import { changeMeasureGoalPortion } from "../../../state/goalsSlicer";

interface TimeViewProps {
  goal: Goal;
}

const TimeView: React.FC<TimeViewProps> = ({ goal }) => {
  const [play, togglePlay] = useState<boolean>(false);
  const [insideMeasure, setInsideMeasure] = useState<number | undefined>(
    goal?.goalPortions[goal.itGoalPortion].measure
  );
  const insideMeasureRef = useRef<number | undefined>();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    let intervalId: NodeJS.Timer;
    if (play) {
      intervalId = setInterval(() => setInsideMeasure((insideMeasure || 0) + 1), 1000);
    }
    return () => clearInterval(intervalId);
  }, [play, insideMeasure]);

  useEffect(() => {
    insideMeasureRef.current = insideMeasure;
    if ((insideMeasure || 0) > (goal.time || 0)) {
      setInsideMeasure(goal.time || 0);
    }
  }, [insideMeasure]);

  useEffect(() => {
    return () => {
      dispatch(
        changeMeasureGoalPortion({
          id: goal?.id,
          measure: insideMeasureRef.current || goal?.goalPortions[goal.itGoalPortion].measure,
        })
      );
    };
  }, []);

  return (
    <View style={TimeViewStyle.view}>
      {false ? (
        <Text style={TimeViewStyle.textCompleted}>{t("home:completedRepetition")}</Text>
      ) : (
        <View>
          <CircularProgress
            rotation={220}
            arcSweepAngle={280}
            backgroundColor={colors.gray}
            fill={((insideMeasure || 0) / (goal.time || 0)) * 100}
            width={30}
            size={300}
          >
            {() => (
              <View style={TimeViewStyle.clockView}>
                <Text style={TimeViewStyle.text}>
                  {toMinuteAndSeconds(insideMeasure || 0)} / {toMinuteAndSeconds(goal.time || 0)}
                </Text>
                <TouchableOpacity onPress={() => togglePlay(!play)}>
                  {play ? <Ionicons name="pause" size={40} /> : <Ionicons name="play" size={40} />}
                </TouchableOpacity>
              </View>
            )}
          </CircularProgress>
        </View>
      )}
    </View>
  );
};

const TimeViewStyle = StyleSheet.create({
  view: {
    width: "95%",
    paddingVertical: "5%",
    alignContent: "center",
    alignItems: "center",
  },
  textCompleted: {
    fontSize: 23,
    color: colors.mainBlue,
  },
  clockView: {
    alignContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 35,
    textAlign: "center",
  },
});

export default TimeView;
