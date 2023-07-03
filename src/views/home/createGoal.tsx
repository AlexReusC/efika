import React from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { Chip } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useTranslation } from "react-i18next";

import createGoalStyle from "./createGoalStyle";
import { categories } from "./utils/createGoalUtils";

const CreateGoal: React.FC = () => {
  const { t } = useTranslation();
  const dayOfWeek = [
    { name: "mon" },
    { name: "mon" },
    { name: "mon" },
    { name: "mon" },
    { name: "mon" },
    { name: "mon" },
    { name: "mon" },
  ];

  return (
    <ScrollView style={createGoalStyle.screen}>
      <View style={createGoalStyle.header}>
        <View style={createGoalStyle.nameAndReps}>
          <TextInput style={createGoalStyle.textInput} maxLength={20} placeholder="Nombre de tu meta" />
        </View>

        <View style={createGoalStyle.numberOfRepetitions}>
          <Text style={createGoalStyle.numberRepetitionsText}>Número de repeticiones:</Text>
          <TouchableOpacity style={createGoalStyle.changeRepetitionsButton}>
            <Text style={createGoalStyle.changeRepetitionsButtonText}>Escoger</Text>
          </TouchableOpacity>
        </View>

        <View style={createGoalStyle.chipsArea}>
          {categories.map((category) => (
            <Chip
              key={category.name}
              label={t(`createGoal:${category.name}`)}
              style={createGoalStyle.chip}
              labelStyle={createGoalStyle.chipText}
              trailing={(props) => <MaterialCommunityIcons name={category.icon} {...props} />}
            />
          ))}
        </View>
      </View>
      <View style={createGoalStyle.options}>
        <View style={createGoalStyle.optionsBlock}>
          <Text style={createGoalStyle.title}>Frecuencia</Text>
          <View style={createGoalStyle.measureTypeArea}>
            <TouchableOpacity style={createGoalStyle.icon}>
              <MaterialCommunityIcons size={60} name={"calendar-today"} />
              <Text>{t("createGoal:daily")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={createGoalStyle.icon}>
              <MaterialCommunityIcons size={60} name={"calendar-week"} />
              <Text>{t("createGoal:weekly")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={createGoalStyle.icon}>
              <MaterialCommunityIcons size={60} name={"calendar-month"} />
              <Text>{t("createGoal:monthly")}</Text>
            </TouchableOpacity>
          </View>
          <View style={createGoalStyle.dayOfWeek}></View>
        </View>
        <View style={createGoalStyle.optionsBlock}>
          <Text style={createGoalStyle.title}>Medición - Opcional</Text>
          <View style={createGoalStyle.measureTypeArea}>
            <TouchableOpacity style={createGoalStyle.icon}>
              <MaterialCommunityIcons size={60} name={"clock"} />
              <Text>Tiempo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={createGoalStyle.icon}>
              <MaterialCommunityIcons size={60} name={"repeat"} />
              <Text>Repetición</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={createGoalStyle.createGoalButtonBlock}>
          <TouchableOpacity style={createGoalStyle.createGoalButton}>
            <Text style={createGoalStyle.createGoalButtonText}>Crear meta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateGoal;
