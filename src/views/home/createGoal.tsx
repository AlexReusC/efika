import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { Chip } from "@react-native-material/core";
import Modal from "react-native-modal";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";

import createGoalStyle from "./createGoalStyle";
import { categoriesUtil, frequenciesUtil, measuresUtil, daysOfWeekUtil } from "./utils/createGoalUtils";

const CreateGoal: React.FC = () => {
  const [timeModalShown, toggleTimeModal] = useState(false);
  const [setsModalShown, toggleSetsModal] = useState(false);
  const [daysShown, toggleDaysShown] = useState(false);
  const [name, setName] = useState("");
  const [repetitions, setRepetitions] = useState<string | null>(null);
  const [categories, setCategories] = useState(categoriesUtil);
  const [frequencies, setFrequencies] = useState(frequenciesUtil);
  const [daysOfWeek, setDaysOfWeek] = useState(daysOfWeekUtil);
  const [measures, setMeasures] = useState(measuresUtil);
  const { t } = useTranslation();

  const changeRepetitionsText = (text: string) => {
    if (text.length == 0) {
      setRepetitions(null);
    } else {
      const regexRule = /^[1-9][0-9]{0,2}$/;
      if (regexRule.test(text)) {
        setRepetitions(text);
      }
    }
  };

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

  const toggleFrequencies = (id: Frequency) => {
    if (id !== "daily") {
      toggleDaysShown(false);
    }
    const newFrequencies = frequencies.map((frequency) => {
      if (frequency.name === id) {
        if (!frequency.active) {
          if (frequency.name === "daily") {
            toggleDaysShown(true);
          }
          return { ...frequency, active: true };
        }
        if (frequency.name === "daily") {
          toggleDaysShown(false);
        }
        return { ...frequency, active: false };
      }
      return { ...frequency, active: false };
    });

    setFrequencies(newFrequencies);
  };

  const toggleMeasures = (id: Measure) => {
    const newMeasures = measures.map((measure) => {
      if (measure.name === id) {
        if (!measure.active) {
          return { ...measure, active: true };
        }
        return { ...measure, active: false };
      }
      return { ...measure, active: false };
    });

    setMeasures(newMeasures);
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
            value={repetitions !== null ? repetitions.toString() : ""}
            onChangeText={(text) => changeRepetitionsText(text)}
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
            {frequencies.map((frequency) => (
              <TouchableOpacity
                key={frequency.name}
                onPress={() => toggleFrequencies(frequency.name)}
                style={createGoalStyle.icon}
              >
                <MaterialCommunityIcons
                  style={frequency.active ? createGoalStyle.activeIcon : null}
                  size={60}
                  name={frequency.icon}
                />
                <Text>{t(`createGoal:${frequency.name}`)}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {daysShown ? (
            <View style={createGoalStyle.dayOfWeekArea}>
              {daysOfWeek.map((day) => (
                <TouchableOpacity style={[createGoalStyle.dayOfWeekIcon]}>
                  <Text>{day.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : null}
        </View>
        <View style={createGoalStyle.optionsBlock}>
          <Text style={createGoalStyle.title}>Medición - Opcional</Text>
          <View style={createGoalStyle.measureTypeArea}>
            {measures.map((measure) => (
              <TouchableOpacity
                key={measure.name}
                onPress={() => toggleMeasures(measure.name)}
                style={createGoalStyle.icon}
              >
                <MaterialCommunityIcons
                  style={measure.active ? createGoalStyle.activeIcon : null}
                  size={60}
                  name={measure.icon}
                />
                <Text>{t(`createGoal:${measure.name}`)}</Text>
              </TouchableOpacity>
            ))}
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
