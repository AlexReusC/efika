import React, { useState, Dispatch, SetStateAction } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import MultipleProgressBar from "./multipleProgressBar";
import modalContentStyle from "./modalContentStyle";

interface ModalContentProps {
  currentGoal: Goal | null;
  onClose: Dispatch<SetStateAction<boolean>>;
}
const ModalContent: React.FC<ModalContentProps> = ({ currentGoal, onClose }) => {
  return (
    <View style={modalContentStyle.modalSection}>
      <MultipleProgressBar goal={currentGoal} />
      <View style={modalContentStyle.percentageRow}>
        <View style={[modalContentStyle.roundButton, modalContentStyle.greenButton]}></View>
        <View></View>
        <Text>Completos - 25 %</Text>
      </View>
      <View style={modalContentStyle.percentageRow}>
        <View style={[modalContentStyle.roundButton, modalContentStyle.yellowButton]}></View>
        <View></View>
        <Text>Completos - 25 %</Text>
      </View>
      <View style={modalContentStyle.percentageRow}>
        <View style={[modalContentStyle.roundButton, modalContentStyle.redButton]}></View>
        <View></View>
        <Text>Completos - 25 %</Text>
      </View>
      <TouchableOpacity style={modalContentStyle.closeButton} onPress={() => onClose(false)}>
        <Ionicons name={"close-outline"} />
      </TouchableOpacity>
    </View>
  );
};

export default ModalContent;
