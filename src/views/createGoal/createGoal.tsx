import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { Chip, Badge } from "@react-native-material/core";
import Modal from "react-native-modal";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { create } from "../../state/goalsSlicer";
import { TabBarNavigation } from "../../routes/tabNavigation";

import createGoalStyle from "./createGoalStyle";
import createGoal from "./utils/createGoal";
import filterGoalAttrs from "./utils/filterGoalAttrs";
import { categoriesUtil, frequenciesUtil, measuresUtil, daysOfWeekUtil } from "./utils/createGoalUtils";
import Colors from "../../constants/colors";
import FocusAwareStatusBar from "../../components/focusAwareStatusBar";
import colors from "../../constants/colors";

type TabNavigationProp = BottomTabNavigationProp<TabBarNavigation>;

const CreateGoal: React.FC = () => {
  const [helpRepetitionsShown, toggleHelpRepetitions] = useState(false);
  const [helpFrequencyShown, toggleHelpFrequency] = useState(false);
  const [helpMeasureShown, toggleHelpMeasure] = useState(false);
  const [timeModalShown, toggleTimeModal] = useState(false);
  const [setsModalShown, toggleSetsModal] = useState(false);
  const [daysShown, toggleDaysShown] = useState(false);
  const [name, setName] = useState("");
  const [repetitions, setRepetitions] = useState<string | null>(null);
  const [categories, setCategories] = useState(categoriesUtil);
  const [frequencies, setFrequencies] = useState(frequenciesUtil);
  const [daysOfWeekArr, setDaysOfWeekArr] = useState(daysOfWeekUtil);
  const [measures, setMeasures] = useState(measuresUtil);
  const [tmpMinutes, setTmpMinutes] = useState<string | null>(null);
  const [tmpSeconds, setTmpSeconds] = useState<string | null>(null);
  const [minutes, setMinutes] = useState<string | null>(null);
  const [seconds, setSeconds] = useState<string | null>(null);
  const [tmpSets, setTmpSets] = useState<string | null>(null);
  const [sets, setSets] = useState<string | null>(null);
  const navigation = useNavigation<TabNavigationProp>();
  const ref_input2 = useRef<TextInput | null>(null);
  const dispatch = useDispatch();
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
    const lenActiveDays = daysOfWeekArr.filter((day) => day.active === true).length;
    const newDaysOfWeek = daysOfWeekArr.map((dayOfWeek) => {
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

    setDaysOfWeekArr(newDaysOfWeek);
  };

  const isActive = () => {
    const { category, frequency } = filterGoalAttrs({
      categories,
      daysOfWeekArr,
      frequencies,
      measures,
    });
    return name && repetitions && category && frequency;
  };

  const addNewGoal = () => {
    const { category, daysOfWeek, frequency, measure } = filterGoalAttrs({
      categories,
      daysOfWeekArr,
      frequencies,
      measures,
    });
    const newGoal = createGoal({
      name,
      repetitionsProp: repetitions,
      category,
      frequency,
      daysOfWeek,
      measure,
      setsProp: sets,
      minutesProp: minutes,
      secondsProp: seconds,
    });
    if (newGoal.goal) {
      dispatch(create(newGoal.goal));
      navigation.navigate("Home");
    }
  };

  return (
    <ScrollView style={createGoalStyle.screen}>
      <FocusAwareStatusBar backgroundColor={colors.softBlue} barStyle={"dark-content"} />
      <Modal
        isVisible={helpRepetitionsShown}
        onBackdropPress={() => toggleHelpRepetitions(false)}
        animationOut={"fadeOutDownBig"}
      >
        <View style={createGoalStyle.modalSection}>
          <View style={createGoalStyle.titleView}>
            <Text style={createGoalStyle.titleModal}>{t("createGoal:repetitionsAlone")}</Text>
          </View>
          <View style={createGoalStyle.textModalView}>
            <Text style={createGoalStyle.helpText}>{t("createGoal:repetitionsHelp")}</Text>
          </View>
          <TouchableOpacity style={createGoalStyle.roundButton} onPress={() => toggleHelpRepetitions(false)}>
            <Ionicons color={Colors.white} name={"close-outline"} />
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        isVisible={helpFrequencyShown}
        onBackdropPress={() => toggleHelpFrequency(false)}
        animationOut={"fadeOutDownBig"}
      >
        <View style={createGoalStyle.modalSection}>
          <View style={createGoalStyle.titleView}>
            <Text style={createGoalStyle.titleModal}>{t("createGoal:frequency")}</Text>
          </View>
          <View style={createGoalStyle.textModalView}>
            <Text style={createGoalStyle.helpText}>{t("createGoal:frequencyHelp")}</Text>
          </View>
          <TouchableOpacity style={createGoalStyle.roundButton} onPress={() => toggleHelpFrequency(false)}>
            <Ionicons color={Colors.white} name={"close-outline"} />
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        isVisible={helpMeasureShown}
        onBackdropPress={() => toggleHelpMeasure(false)}
        animationOut={"fadeOutDownBig"}
      >
        <View style={createGoalStyle.modalSection}>
          <View style={createGoalStyle.titleView}>
            <Text style={createGoalStyle.titleModal}>{t("createGoal:measureAlone")}</Text>
          </View>
          <View style={createGoalStyle.textModalView}>
            <Text style={createGoalStyle.helpText}>{t("createGoal:measureHelp")}</Text>
          </View>
          <TouchableOpacity style={createGoalStyle.roundButton} onPress={() => toggleHelpMeasure(false)}>
            <Ionicons color={Colors.white} name={"close-outline"} />
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal isVisible={timeModalShown} onBackdropPress={() => toggleTimeModal(false)} animationOut={"fadeOutDownBig"}>
        <View style={createGoalStyle.modalSection}>
          <Text>{t("createGoal:chooseTime")}</Text>
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
            {tmpSeconds || tmpMinutes ? (
              <Ionicons color={Colors.white} name={"checkmark"} />
            ) : (
              <Ionicons color={Colors.white} name={"close-outline"} />
            )}
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal isVisible={setsModalShown} onBackdropPress={() => toggleSetsModal(false)} animationOut={"fadeOutDownBig"}>
        <View style={createGoalStyle.modalSection}>
          <Text>{t("createGoal:chooseNumberSeries")}</Text>
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
              placeholderTextColor="#CACACA"
              style={createGoalStyle.textInputModal}
            />
          </View>
          <TouchableOpacity style={createGoalStyle.roundButton} onPress={() => closeSetsModal()}>
            {tmpSets ? (
              <Ionicons color={Colors.white} name={"checkmark"} />
            ) : (
              <Ionicons color={Colors.white} name={"close-outline"} />
            )}
          </TouchableOpacity>
        </View>
      </Modal>

      <View style={createGoalStyle.header}>
        <View style={createGoalStyle.nameAndReps}>
          <TextInput
            value={name}
            onChangeText={(text) => {
              if (text.length === 0) {
                setName(text);
              } else {
                const regexRule = /^(\w+\s?)*$/;
                if (regexRule.test(text)) {
                  setName(text);
                }
              }
            }}
            style={createGoalStyle.textInput}
            maxLength={20}
            placeholder={t("createGoal:nameOfYourGoal")}
          />
        </View>

        <View style={createGoalStyle.numberOfRepetitions}>
          <View>
            <Text style={createGoalStyle.numberRepetitionsText}>{t("createGoal:numberOf")}</Text>
            <View style={createGoalStyle.iconAndText}>
              <Text style={createGoalStyle.numberRepetitionsText}>{t("createGoal:repetitions")}</Text>
              <TouchableOpacity onPress={() => toggleHelpRepetitions(true)}>
                <FontAwesome name="question-circle" size={20} color={colors.white} />
              </TouchableOpacity>
            </View>
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
          <View style={createGoalStyle.titleText}>
            <Text style={createGoalStyle.title}>{t("createGoal:frequency")}</Text>
            <TouchableOpacity onPress={() => toggleHelpFrequency(true)}>
              <FontAwesome name="question-circle" size={25} color={colors.strongGray} />
            </TouchableOpacity>
          </View>

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
              {daysOfWeekArr.map((day) => (
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
          <View style={createGoalStyle.titleText}>
            <Text style={createGoalStyle.title}>{t("createGoal:measure")}</Text>
            <TouchableOpacity onPress={() => toggleHelpMeasure(true)}>
              <FontAwesome name="question-circle" size={25} color={colors.strongGray} />
            </TouchableOpacity>
          </View>
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
          <TouchableOpacity
            style={isActive() ? createGoalStyle.createGoalButtonActive : createGoalStyle.createGoalButtonInactive}
            onPress={() => addNewGoal()}
          >
            <Text
              style={
                isActive() ? createGoalStyle.createGoalButtonTextActive : createGoalStyle.createGoalButtonTextInactive
              }
            >
              {t("createGoal:createGoal")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateGoal;
