import React, { useState, Dispatch, SetStateAction } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";

import MultipleProgressBar from "./multipleProgressBar";
import modalContentStyle from "./modalContentStyle";
import { showPercentage } from "../../../utils/stringUtils";
import Colors from "../../../constants/colors";

interface ModalContentProps {
  currentGoal: Goal | null;
  onClose: Dispatch<SetStateAction<boolean>>;
}
const ModalContent: React.FC<ModalContentProps> = ({ currentGoal, onClose }) => {
  const { t } = useTranslation();

  const timesCompleted =
    currentGoal?.goalPortions.filter((portion) => portion.completionState === "completed").length || 0;
  const timesPartial = currentGoal?.goalPortions.filter((portion) => portion.completionState === "partial").length || 0;
  const timesUncompleted =
    currentGoal?.goalPortions.filter((portion) => portion.completionState === "uncompleted").length || 0;

  const nGoalPortions = currentGoal?.goalPortions.length || 1;
  const timesCompletedPercentage = timesCompleted / nGoalPortions;
  const timesPartialPercentage = timesPartial / nGoalPortions;
  const timesUncompletedPercentage = timesUncompleted / nGoalPortions;

  return (
    <View style={modalContentStyle.modalSection}>
      <View style={modalContentStyle.titleView}>
        <Text style={modalContentStyle.title}>{currentGoal?.name}</Text>
      </View>
      <MultipleProgressBar
        timesCompleted={timesCompletedPercentage}
        timesPartial={timesPartialPercentage}
        timesUncompleted={timesUncompletedPercentage}
      />
      <Text style={modalContentStyle.title}>
        {timesCompleted + timesPartial + timesUncompleted} / {currentGoal?.goalPortions.length}
      </Text>
      <View style={modalContentStyle.percentages}>
        <View style={modalContentStyle.percentageRow}>
          <View style={[modalContentStyle.roundButton, modalContentStyle.greenButton]}></View>
          <View style={modalContentStyle.placeholder}></View>
          <Text>{`${t("progress:completed")}: ${showPercentage(timesCompletedPercentage)}`}</Text>
        </View>
        {currentGoal?.measure ? (
          <View style={modalContentStyle.percentageRow}>
            <View style={[modalContentStyle.roundButton, modalContentStyle.yellowButton]}></View>
            <View style={modalContentStyle.placeholder}></View>
            <Text>{`${t("progress:partial")}: ${showPercentage(timesPartialPercentage)}`}</Text>
          </View>
        ) : null}

        <View style={modalContentStyle.percentageRow}>
          <View style={[modalContentStyle.roundButton, modalContentStyle.redButton]}></View>
          <View style={modalContentStyle.placeholder}></View>
          <Text>{`${t("progress:uncompleted")}: ${showPercentage(timesUncompletedPercentage)}`}</Text>
        </View>
      </View>
      <TouchableOpacity style={modalContentStyle.closeButton} onPress={() => onClose(false)}>
        <Ionicons name={"close-outline"} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default ModalContent;
