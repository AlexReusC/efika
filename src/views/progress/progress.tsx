import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSelector } from "react-redux";
import type { RootState } from "../../state/store";

import progressStyle from "./progressStyle";
import GoalProgressCard from "./components/goalProgressCard";
import { categoriesUtil } from "../createGoal/utils/createGoalUtils";
import ModalContent from "./components/modalContent";

const categoriesIcons = categoriesUtil.reduce<Record<Category, any>>((r, o) => {
  r[o.name] = o.icon;
  return r;
}, {} as Record<Category, any>);

const Progress: React.FC = () => {
  const [modalShown, toggleModal] = useState<boolean>(false);
  const [currentGoal, setCurrentGoal] = useState<Goal | null>(null);
  const myGoals: Goal[] = useSelector((state: RootState) => state.goals.value);
  const currentGoals = myGoals.filter((goal) => !goal.completed);
  const completedGoals = myGoals.filter((goal) => goal.completed);

  const openModal = (goal: Goal) => {
    toggleModal(true);
    setCurrentGoal(goal);
  };

  return (
    <ScrollView style={progressStyle.mainView}>
      <Modal isVisible={modalShown} onBackdropPress={() => toggleModal(false)} animationOut={"fadeOutDownBig"}>
        <ModalContent currentGoal={currentGoal} onClose={toggleModal} />
      </Modal>
      <View style={progressStyle.mainView}>
        <View style={progressStyle.header}>
          <Text>Selecciona una meta para ver tu progreso:</Text>
        </View>
        <View style={progressStyle.goals}>
          {currentGoals.length !== 0 ? (
            <View>
              <Text>Actuales:</Text>
              {currentGoals.map((goal: Goal) => (
                <GoalProgressCard
                  key={goal.id}
                  goal={goal}
                  categoriesIconsObj={categoriesIcons}
                  pressAction={openModal}
                />
              ))}
            </View>
          ) : null}
          {completedGoals.length !== 0 ? (
            <View>
              <Text>Pasadas:</Text>
              {completedGoals.map((goal: Goal) => (
                <GoalProgressCard
                  key={goal.id}
                  goal={goal}
                  categoriesIconsObj={categoriesIcons}
                  pressAction={openModal}
                />
              ))}
            </View>
          ) : null}
        </View>
      </View>
    </ScrollView>
  );
};

export default Progress;
