import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar } from "react-native";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";
import type { RootState } from "../../state/store";
import { useTranslation } from "react-i18next";
import Ionicons from "@expo/vector-icons/Ionicons";

import progressStyle from "./progressStyle";
import GoalProgressCard from "./components/goalProgressCard";
import { categoriesUtil } from "../createGoal/utils/createGoalUtils";
import ModalContent from "./components/modalContent";
import colors from "../../constants/colors";
import FocusAwareStatusBar from "../../components/focusAwareStatusBar";

const categoriesIcons = categoriesUtil.reduce<Record<Category, any>>((r, o) => {
  r[o.name] = o.icon;
  return r;
}, {} as Record<Category, any>);

const Progress: React.FC = () => {
  const { t } = useTranslation();
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
      <FocusAwareStatusBar backgroundColor={colors.white} barStyle={"dark-content"} />
      <Modal isVisible={modalShown} onBackdropPress={() => toggleModal(false)} animationOut={"fadeOutDownBig"}>
        <ModalContent currentGoal={currentGoal} onClose={toggleModal} />
      </Modal>
      <View style={progressStyle.mainView}>
        {currentGoals.length !== 0 || completedGoals.length !== 0 ? (
          <>
            <View style={progressStyle.header}>
              <Text style={progressStyle.headerText}>{t("progress:selectGoal")}</Text>
            </View>
            <View style={progressStyle.goals}>
              {currentGoals.length !== 0 ? (
                <View>
                  <Text style={progressStyle.title}>{t("progress:current")}</Text>
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
                  <Text style={progressStyle.title}>{t("progress:past")}</Text>
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
          </>
        ) : (
          <View style={progressStyle.noTasksView}>
            <Ionicons name={"add-circle-outline"} color={colors.gray} size={90} />
            <Text style={progressStyle.headerText}>{t("progress:noGoalsYet")}</Text>
            <Text style={progressStyle.headerText}>{t("progress:addSomeWith")}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Progress;
