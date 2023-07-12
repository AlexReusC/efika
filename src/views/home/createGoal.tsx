import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { Chip, Badge } from "@react-native-material/core";
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
  const [tmpMinutes, setTmpMinutes] = useState<string | null>(null);
  const [tmpSeconds, setTmpSeconds] = useState<string | null>(null);
  const [minutes, setMinutes] = useState<string | null>(null);
  const [seconds, setSeconds] = useState<string | null>(null);
  const [tmpSets, setTmpSets] = useState<string | null>(null);
  const [sets, setSets] = useState<string | null>(null);
  const ref_input2 = useRef<TextInput | null>(null);
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

  const openModals = (id: Measure) => {
    if (id === "time") {
      if (measures[0].active) {
        toggleMeasures("time", false);
        setMinutes(null);
        setSeconds(null);
      } else {
        toggleMeasures("sets", false);
        toggleTimeModal(true);
        setSets(null);
      }
    } else if (id === "sets") {
      if (measures[1].active) {
        toggleMeasures("sets", false);
        setSets(null);
      } else {
        toggleMeasures("time", false);
        toggleSetsModal(true);
        setMinutes(null);
        setSeconds(null);
      }
    }
  };

  const closeTimeModal = () => {
    if (tmpMinutes || tmpSeconds) {
      let secondsVar = tmpSeconds;
      let minutesVar = tmpMinutes;
      if (!secondsVar) {
        secondsVar = "00";
      }
      if (!minutesVar) {
        minutesVar = "0";
      }
      if (secondsVar.length == 1) {
        secondsVar = "0" + secondsVar;
      }
      setMinutes(minutesVar);
      setSeconds(secondsVar);
      toggleMeasures("time", true);
    }
    toggleTimeModal(false);
    setTmpMinutes(null);
    setTmpSeconds(null);
  };

  const closeSetsModal = () => {
    if (tmpSets) {
      setSets(tmpSets);
      toggleMeasures("sets", true);
    }
    toggleSetsModal(false);
    setTmpSets(null);
  };

  const toggleMeasures = (id: Measure, newActive: boolean) => {
    const newMeasures = measures.map((measure) => {
      if (measure.name === id) {
        return { ...measure, active: newActive };
      }
      return { ...measure };
    });

    setMeasures(newMeasures);
  };

  const toggleDaysOfWeek = (id: DayOfWeek) => {
    const lenActiveDays = daysOfWeek.filter((day) => day.active === true).length;
    const newDaysOfWeek = daysOfWeek.map((dayOfWeek) => {
      if (dayOfWeek.name === id) {
        if (!dayOfWeek.active) {
          return { ...dayOfWeek, active: true };
        }
        if (lenActiveDays > 1) {
          return { ...dayOfWeek, active: false };
        }
      }
      return { ...dayOfWeek };
    });

    setDaysOfWeek(newDaysOfWeek);
  };

  return (
    <ScrollView style={createGoalStyle.screen}>
      <Modal isVisible={timeModalShown} onBackdropPress={() => toggleTimeModal(false)} animationOut={"fadeOutDownBig"}>
        <View style={createGoalStyle.modalSection}>
          <Text>Escoge tiempo por repetición:</Text>
          <View style={createGoalStyle.timeInputSection}>
            <TextInput
              value={tmpMinutes !== null ? tmpMinutes : ""}
              onChangeText={(text) => {
                if (text.length === 0) {
                  setTmpMinutes(null);
                } else {
                  const regexRule = /^[0-9]{0,2}$/;
                  if (regexRule.test(text)) {
                    setTmpMinutes(text);
                  }
                  if (text.length === 2) {
                    ref_input2.current?.focus();
                  }
                }
              }}
              placeholder="00"
              keyboardType="numeric"
              maxLength={2}
              placeholderTextColor="#CACACA"
              style={createGoalStyle.textInputModal}
            />
            <Text style={createGoalStyle.textInputModal}>:</Text>
            <TextInput
              value={tmpSeconds !== null ? tmpSeconds : ""}
              onChangeText={(text) => {
                if (text.length === 0) {
                  setTmpSeconds(null);
                } else {
                  const regexRule = /^[0-5]{0,1}[0-9]{0,1}$/;
                  if (regexRule.test(text)) {
                    setTmpSeconds(text);
                  }
                }
              }}
              placeholder="00"
              keyboardType="numeric"
              maxLength={2}
              ref={ref_input2}
              placeholderTextColor="#CACACA"
              style={createGoalStyle.textInputModal}
            />
          </View>
          <TouchableOpacity style={createGoalStyle.roundButton} onPress={() => closeTimeModal()}>
            {tmpSeconds || tmpMinutes ? <Ionicons name={"checkmark"} /> : <Ionicons name={"close-outline"} />}
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal isVisible={setsModalShown} onBackdropPress={() => toggleSetsModal(false)} animationOut={"fadeOutDownBig"}>
        <View style={createGoalStyle.modalSection}>
          <Text>Escoge el número de series:</Text>
          <View>
            <TextInput
              placeholder="00"
              value={tmpSets !== null ? tmpSets : ""}
              onChangeText={(text) => {
                if (text.length === 0) {
                  setTmpSets(null);
                } else {
                  const regexRule = /^[1-9]+[0-9]*$/;
                  if (regexRule.test(text)) {
                    setTmpSets(text);
                  }
                }
              }}
              maxLength={3}
              keyboardType="numeric"
              style={createGoalStyle.textInputModal}
            />
          </View>
          <TouchableOpacity style={createGoalStyle.roundButton} onPress={() => closeSetsModal()}>
            {tmpSets ? <Ionicons name={"checkmark"} /> : <Ionicons name={"close-outline"} />}
          </TouchableOpacity>
        </View>
      </Modal>

      <View style={createGoalStyle.header}>
        <View style={createGoalStyle.nameAndReps}>
          <TextInput
            value={name}
            onChange={(event) => setName(event.nativeEvent.text)}
            style={createGoalStyle.textInput}
            maxLength={20}
            placeholder={t("createGoal:nameOfYourGoal")}
          />
        </View>

        <View style={createGoalStyle.numberOfRepetitions}>
          <View>
            <Text style={createGoalStyle.numberRepetitionsText}>{t("createGoal:numberOf")}</Text>
            <Text style={createGoalStyle.numberRepetitionsText}>{t("createGoal:repetitions")}</Text>
          </View>
          <TextInput
            keyboardType="decimal-pad"
            placeholder="0"
            value={repetitions !== null ? repetitions : ""}
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
          <Text style={createGoalStyle.title}>{t("createGoal:frequency")}</Text>
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
                <TouchableOpacity
                  key={day.name}
                  style={[
                    createGoalStyle.dayOfWeekIcon,
                    day.active ? createGoalStyle.dayOfWeekIconActive : createGoalStyle.dayOfWeekIconInactive,
                  ]}
                  onPress={() => toggleDaysOfWeek(day.name)}
                >
                  <Text style={day.active ? createGoalStyle.activeDayText : createGoalStyle.inactiveDayText}>
                    {t(`createGoal:${day.name}`)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : null}
        </View>
        <View style={createGoalStyle.optionsBlock}>
          <Text style={createGoalStyle.title}>{t("createGoal:measure")}</Text>
          <View style={createGoalStyle.measureTypeArea}>
            {measures.map((measure) => (
              <TouchableOpacity
                key={measure.name}
                onPress={() => openModals(measure.name)}
                style={createGoalStyle.icon}
              >
                <MaterialCommunityIcons
                  style={measure.active ? createGoalStyle.activeIcon : null}
                  size={60}
                  name={measure.icon}
                />
                {measure.active ? (
                  <Badge
                    style={createGoalStyle.badgeStyle}
                    label={measures[0].active ? `${minutes}:${seconds}` : `${sets}`}
                  />
                ) : null}
                <Text>{t(`createGoal:${measure.name}`)}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={createGoalStyle.createGoalButtonBlock}>
          <TouchableOpacity style={createGoalStyle.createGoalButton}>
            <Text style={createGoalStyle.createGoalButtonText}>{t("createGoal:createGoal")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateGoal;
