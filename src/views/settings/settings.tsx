import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import colors from "../../constants/colors";

const Settings: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <View>
      <View style={SettingsStyle.header}>
        <Ionicons name="language" size={33} />
        <Text style={SettingsStyle.title}>{t("settings:languages")}</Text>
      </View>
      <View style={SettingsStyle.body}>
        <View style={SettingsStyle.viewText}>
          <Text style={SettingsStyle.subtitle}>{t("settings:changeLanguage")}</Text>
        </View>
        <TouchableOpacity style={SettingsStyle.viewText} onPress={() => i18n.changeLanguage("en")}>
          <Text style={SettingsStyle.normalTextLanguages}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity style={SettingsStyle.viewText} onPress={() => i18n.changeLanguage("es")}>
          <Text style={SettingsStyle.normalTextLanguages}>Español</Text>
        </TouchableOpacity>
      </View>
      <View style={SettingsStyle.header}>
        <Ionicons name="pencil-outline" size={33} />
        <Text style={SettingsStyle.title}>{t("settings:credits")}</Text>
      </View>
      <View style={SettingsStyle.body}>
        <View style={SettingsStyle.viewText}>
          <Text style={SettingsStyle.subtitle}>{t("settings:designedAndDeveloped")}</Text>
        </View>
        <View style={SettingsStyle.viewText}>
          <Text style={SettingsStyle.normalText}>Alejandro Castro Reus</Text>
        </View>
      </View>
    </View>
  );
};

const SettingsStyle = StyleSheet.create({
  view: {},
  header: {
    flexDirection: "row",
    padding: "5%",
    alignContent: "center",
    alignItems: "center",
  },
  body: {
    paddingHorizontal: "9%",
  },
  title: {
    fontSize: 25,
  },
  subtitle: {
    fontSize: 19,
    fontWeight: "600",
  },
  normalText: {
    fontSize: 19,
  },
  viewText: {
    paddingVertical: "2%",
  },
  normalTextLanguages: {
    color: colors.mainBlue,
    fontSize: 19,
  },
});

export default Settings;
