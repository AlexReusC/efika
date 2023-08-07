import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface TimeViewProps {}

const TimeView: React.FC<TimeViewProps> = () => {
  return (
    <View>
      <Text>Render time</Text>
    </View>
  );
};

const TimeViewStyle = StyleSheet.create({});

export default TimeView;
