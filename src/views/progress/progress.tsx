import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";
import type { RootState } from "../../state/store";
import { useDispatch } from "react-redux";

import progressStyle from "./progressStyle";
import GoalProgressCard from "./goalProgressCard";
import { categoriesUtil } from "../createGoal/utils/createGoalUtils";

const categoriesIcons = categoriesUtil.reduce<Record<Category, any>>((r, o) => {
  r[o.name] = o.icon;
  return r;
}, {} as Record<Category, any>);

const Progress: React.FC = () => {
  const [modalShown, toggleModal] = useState<boolean>(false);
  const [currentGoal, setCurrentGoal] = useState<Goal | null>(null);
  const myGoals = useSelector((state: RootState) => state.goals.value);

  const openModal = (goal: Goal) => {
    toggleModal(true);
    setCurrentGoal(goal);
  };

  return (
    <ScrollView style={progressStyle.mainView}>
      <Modal isVisible={modalShown} onBackdropPress={() => toggleModal(false)} animationOut={"fadeOutDownBig"}>
        <View style={progressStyle.modalSection}></View>
      </Modal>
      <View style={progressStyle.mainView}>
        <View style={progressStyle.header}>
          <Text>Selecciona una meta para ver tu progreso:</Text>
        </View>
        <View style={progressStyle.goals}>
          {myGoals.map((goal: Goal) => (
            <GoalProgressCard key={goal.id} goal={goal} categoriesIconsObj={categoriesIcons} pressAction={openModal} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Progress;
