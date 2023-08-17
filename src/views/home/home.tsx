import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import Modal from "react-native-modal";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import homeStyle from "./homeStyle";
import { StackHomeNavigation } from "../../routes/homeNavigation";
import dayjs from "dayjs";

import type { RootState } from "../../state/store";
import { useDispatch } from "react-redux";
import { deleteAll, addExamples, updateItGoalPortion } from "../../state/goalsSlicer";
import Card from "./components/card";
import NormalView from "./components/normalView";
import SetsView from "./components/setsView";
import TimeView from "./components/timeView";
import FocusAwareStatusBar from "../../components/focusAwareStatusBar";

import Colors from "../../constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../../constants/colors";

type homeNavigationProp = StackNavigationProp<StackHomeNavigation>;

const Home: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<homeNavigationProp>();
  const myGoals: Goal[] = useSelector((state: RootState) => state.goals.value);
  const dispatch = useDispatch();
  const [modalShown, toggleModal] = useState<boolean>(false);
  const [currentGoal, setCurrentGoal] = useState<Goal | null>(null);
  const [presentGoals, setPresentGoal] = useState(
    myGoals.filter(
      (goal) =>
        dayjs().isAfter(goal.goalPortions[goal.itGoalPortion].initialDate) &&
        dayjs().isBefore(goal.goalPortions[goal.itGoalPortion].finalDate)
    )
  );

  //filters the goals that can appear
  useEffect(() => {
    const id = setInterval(() => {
      setPresentGoal(
        myGoals.filter(
          (goal) =>
            dayjs().isAfter(goal.goalPortions[goal.itGoalPortion].initialDate) &&
            dayjs().isBefore(goal.goalPortions[goal.itGoalPortion].finalDate)
        )
      );
    }, 100);
    return () => clearInterval(id);
  }, [myGoals]);

  //increases it goal portion
  useEffect(() => {
    dispatch(updateItGoalPortion());
  }, []);

  useEffect(() => {
    const id = setInterval(() => dispatch(updateItGoalPortion()), 2000);
    return () => clearInterval(id);
  }, []);

  const openModal = (goal: Goal) => {
    toggleModal(true);
    setCurrentGoal(goal);
  };

  return (
    <View style={homeStyle.screen}>
      <FocusAwareStatusBar backgroundColor={colors.mainBlue} />
      <Modal isVisible={modalShown} onBackdropPress={() => toggleModal(false)} animationOut={"fadeOutDownBig"}>
        <View style={homeStyle.modalSection}>
          {!currentGoal?.measure && <NormalView goal={currentGoal} />}
          {currentGoal?.measure === "sets" && <SetsView goal={currentGoal} />}
          {currentGoal?.measure === "time" && <TimeView goal={currentGoal} />}
          <TouchableOpacity style={homeStyle.roundButton} onPress={() => toggleModal(false)}>
            <Ionicons name={"close-outline"} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={homeStyle.titleSection}>
        <View style={homeStyle.titleSectionIcon}>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Ionicons name={"settings-outline"} size={32} color={colors.white} />
          </TouchableOpacity>
        </View>
        <View style={homeStyle.titleSectionText}>
          <Text style={homeStyle.titleTextTop}>{t("home:ready")}</Text>
          <Text style={homeStyle.titleText}>{t("home:toContinue")}</Text>
          <TouchableOpacity onPress={() => dispatch(deleteAll())}>
            <Text>Delete All (Debug)</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => dispatch(addExamples())}>
            <Text>Populate (Debug)</Text>
          </TouchableOpacity> */}
        </View>
      </View>
      <View style={homeStyle.goalsSection}>
        <View style={homeStyle.goalsSectionText}>
          <Text style={homeStyle.titleTextGoals}>{t("home:activeGoals")}</Text>
          <View style={homeStyle.roundScore}>
            <Text>{presentGoals.length}</Text>
          </View>
        </View>
        <ScrollView style={homeStyle.goalsSectionCards} horizontal={true}>
          {presentGoals.length !== 0 ? (
            presentGoals.map((goal: Goal) => <Card key={goal.id} goal={goal} pressAction={openModal} />)
          ) : (
            <View style={homeStyle.noTasksView}>
              <Ionicons name="checkmark-circle-outline" size={90} color={colors.gray} />
              <Text style={homeStyle.noTasksText}>{t("home:noGoalToday")}</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
