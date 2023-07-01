import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Chip } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useTranslation } from "react-i18next";

import createGoalStyle from "./createGoalStyle";
import { categories } from "./utils/createGoalUtils";

const CreateGoal: React.FC = () => {
  const { t } = useTranslation();

  return (
    <View style={createGoalStyle.screen}>
      <View style={createGoalStyle.header}>
        <TextInput placeholder="Nombre de tu meta" />
        <View>
          <Text>Número de repeticiones:</Text>
        </View>
        <TouchableOpacity>
          <Text>Presiona</Text>
        </TouchableOpacity>
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
        <View>
          <Text>Frecuencia</Text>
          <View style={createGoalStyle.durationTypeArea}>
            <View>
              <MaterialCommunityIcons name={"calendar-today"} />
              <Text>{t("createGoal:daily")}</Text>
            </View>
            <View>
              <MaterialCommunityIcons name={"calendar-week"} />
              <Text>{t("createGoal:weekly")}</Text>
            </View>
            <View>
              <MaterialCommunityIcons name={"calendar-month"} />
              <Text>{t("createGoal:monthly")}</Text>
            </View>
          </View>
        </View>
        <View>
          <Text> Medición - Opcional </Text>
          <Text>¿Cómo vas a medir tu progreso?</Text>
          <View>
            <View>
              <MaterialCommunityIcons name={"clock"} />
              <Text>Tiempo</Text>
            </View>
            <View>
              <MaterialCommunityIcons name={"repeat"} />
              <Text>Repetición</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <Text>Crear meta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateGoal;
