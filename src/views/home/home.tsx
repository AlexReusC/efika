import React from "react";
import { View, Text, StatusBar } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import homeStyle from "./homeStyle";

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <View style={homeStyle.screen}>
      <StatusBar />
      <View style={homeStyle.titleSection}>
        <View style={homeStyle.titleSectionIcon}>
          <Ionicons name={"add-circle-outline"} />
        </View>
        <View style={homeStyle.titleSectionText}>
          <Text>{t("home:Ready")}</Text>
          <Text>{t("home:to continue?")}</Text>
        </View>
      </View>
      <View style={homeStyle.goalsSection}>
        <View style={homeStyle.goalsSectionText}>
          <Text>{t("home:Active Goals")}</Text>
          <Text>0</Text>
        </View>
        <View style={homeStyle.goalsSectionCards}>
          <Text>Card</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
