import React from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import homeStyle from "./homeStyle";
import { StackHomeNavigation } from "../../routes/homeNavigation";

import type { RootState } from "../../state/store";

type homeNavigationProp = StackNavigationProp<StackHomeNavigation>;

const Home: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<homeNavigationProp>();
  const count = useSelector((state: RootState) => state.goals.value);

  return (
    <View style={homeStyle.screen}>
      <StatusBar />
      <View style={homeStyle.titleSection}>
        <View style={homeStyle.titleSectionIcon}>
          <TouchableOpacity onPress={() => navigation.navigate("Create Goal")}>
            <Ionicons name={"add-circle-outline"} />
          </TouchableOpacity>
        </View>
        <View style={homeStyle.titleSectionText}>
          <Text>{t("home:ready")}</Text>
          <Text>{t("home:toContinue")}</Text>
        </View>
      </View>
      <View style={homeStyle.goalsSection}>
        <View style={homeStyle.goalsSectionText}>
          <Text>{t("home:activeGoals")}</Text>
          <Text>0</Text>
        </View>
        <View style={homeStyle.goalsSectionCards}>
          <Text>Card</Text>
          <Text>{count}</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
