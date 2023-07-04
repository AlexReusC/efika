import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { Chip } from "@react-native-material/core";
import Modal from "react-native-modal";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";

import createGoalStyle from "./createGoalStyle";
import { categoriesUtil } from "./utils/createGoalUtils";

const CreateGoal: React.FC = () => {
  const [timeModalShown, toggleTimeModal] = useState(false);
  const [setsModalShown, toggleSetsModal] = useState(false);
  const [name, setName] = useState("");
  const [repetitions, setRepetitions] = useState<number | null>(null);
  const [categories, setCategories] = useState(categoriesUtil);
  const { t } = useTranslation();

  const toggleCategories = (id: Category) => {
    const newCategories = categories.map((category) => {
      if (category.name === id) {
        if (!category.active) {
          return { ...category, active: true };
        }
        return { ...category, active: false };
      }
      return { ...category, active: false };
    });

    setCategories(newCategories);
  };

  return (
    <ScrollView style={createGoalStyle.screen}>
      <View style={createGoalStyle.header}>
        <View style={createGoalStyle.nameAndReps}>
          <TextInput
            value={name}
            onChange={(event) => setName(event.nativeEvent.text)}
            style={createGoalStyle.textInput}
            maxLength={20}
            placeholder="Nombre de tu meta"
          />
        </View>

        <View style={createGoalStyle.numberOfRepetitions}>
          <Text style={createGoalStyle.numberRepetitionsText}>Número de repeticiones:</Text>
          <TextInput
            keyboardType="decimal-pad"
            placeholder="0"
            value={repetitions?.toString()}
            onChange={(e) => {
              if (e.nativeEvent.text && !isNaN(parseInt(e.nativeEvent.text)) && parseInt(e.nativeEvent.text) > 0) {
                setRepetitions(parseInt(e.nativeEvent.text));
              } else {
                setRepetitions(null);
              }
            }}
            style={createGoalStyle.numberInput}
            maxLength={3}
          />
        </View>

        <View style={createGoalStyle.chipsArea}>
          {categories.map((category) => (
            <Chip
              key={category.name}
              onPress={() => toggleCategories(category.name)}
              label={t(`createGoal:${category.name}`)}
              style={category.active ? createGoalStyle.activeChip : createGoalStyle.inactiveChip}
              labelStyle={category.active ? createGoalStyle.activeChipText : createGoalStyle.inactiveChipText}
              trailing={(props) => (
                <MaterialCommunityIcons
                  name={category.icon}
                  style={category.active ? createGoalStyle.activeChipText : createGoalStyle.inactiveChipText}
                  {...props}
                />
              )}
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
              <Text>Series</Text>
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
