import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import Modal from "react-native-modal";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import homeStyle from "./homeStyle";
import { StackHomeNavigation } from "../../routes/homeNavigation";

import type { RootState } from "../../state/store";
import { useDispatch } from "react-redux";
import { create, deleteAll } from "../../state/goalsSlicer";
import Card from "./components/card";

import goals from "./utils/test";

type homeNavigationProp = StackNavigationProp<StackHomeNavigation>;

const Home: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<homeNavigationProp>();
  const count = useSelector((state: RootState) => state.goals.value);
  const dispatch = useDispatch();
  const [modalShown, toggleModal] = useState<boolean>(false);
  const [currentGoal, setCurrentGoal] = useState<Goal | null>(null);

  const openModal = (goal: Goal) => {
    toggleModal(true);
    setCurrentGoal(goal);
  };

  return (
    <View style={homeStyle.screen}>
      <Modal isVisible={modalShown} onBackdropPress={() => toggleModal(false)} animationOut={"fadeOutDownBig"}>
        <View style={homeStyle.modalSection}>
          <Text>{JSON.stringify(currentGoal)}</Text>
          <TouchableOpacity style={homeStyle.roundButton} onPress={() => toggleModal(false)}>
            <Ionicons name={"close-outline"} />
          </TouchableOpacity>
        </View>
      </Modal>
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
          <TouchableOpacity onPress={() => dispatch(create())}>
            <Text>Create goal</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(deleteAll())}>
            <Text>Delete All</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={homeStyle.goalsSection}>
        <View style={homeStyle.goalsSectionText}>
          <Text>{t("home:activeGoals")}</Text>
          <Text>0</Text>
        </View>
        <ScrollView style={homeStyle.goalsSectionCards} horizontal={true}>
          <Card goal={goals[0]} pressAction={openModal} />
          <Card goal={goals[1]} pressAction={openModal} />
          <Card goal={goals[2]} pressAction={openModal} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
