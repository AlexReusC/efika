import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import testValues from "../constants/testValues";
import dayjs from "dayjs";

export interface GoalsState {
  value: Goal[];
}

const initialState: GoalsState = {
  value: [],
};

interface MeasureGoalPortion {
  id: string;
  measure: number;
}

export const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<Goal>) => {
      state.value.push(action.payload);
    },
    addExamples: (state) => {
      state.value = [...state.value, ...testValues];
    },
    deleteAll: (state) => {
      state.value = [];
    },
    changeMeasureGoalPortion: (state, action: PayloadAction<MeasureGoalPortion>) => {
      state.value = state.value.map((item) => {
        if (item.id === action.payload.id) {
          let newCompletionState: CompletionState = "waiting";
          if (item.measure === null) {
            newCompletionState = action.payload.measure === 1 ? "completed" : "partial";
          } else if (item.measure === "sets") {
            newCompletionState = action.payload.measure === item.sets ? "completed" : "partial";
          } else if (item.measure === "time") {
            newCompletionState = action.payload.measure === item.time ? "completed" : "partial";
          }
          return {
            ...item,
            goalPortions: [
              ...item.goalPortions.slice(0, item.itGoalPortion),
              {
                ...item.goalPortions[item.itGoalPortion],
                measure: action.payload.measure,
                completionState: newCompletionState,
              },
              ...item.goalPortions.slice(item.itGoalPortion + 1),
            ],
          };
        } else {
          return item;
        }
      });
    },
    updateItGoalPortion: (state) => {
      state.value = state.value.map((item) => {
        if (item.completed) {
          return item;
        }
        if (item.itGoalPortion === item.goalPortions.length) {
          return { ...item, completed: true };
        }
        if (dayjs().isAfter(item.goalPortions[item.itGoalPortion].finalDate)) {
          if (item.goalPortions[item.itGoalPortion].completionState === "waiting") {
            return {
              ...item,
              itGoalPortion: item.itGoalPortion + 1,
              goalPortions: [
                ...item.goalPortions.slice(0, item.itGoalPortion),
                { ...item.goalPortions[item.itGoalPortion], completionState: "uncompleted" },
                ...item.goalPortions.slice(item.itGoalPortion + 1),
              ],
            };
          }
          return { ...item, itGoalPortion: item.itGoalPortion + 1 };
        }
        return item;
      });
    },
  },
});

export const { create, deleteAll, addExamples, changeMeasureGoalPortion, updateItGoalPortion } = goalsSlice.actions;

export default goalsSlice.reducer;
