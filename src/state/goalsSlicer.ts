import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import testValues from "../constants/testValues";

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
          return {
            ...item,
            goalPortions: [
              ...item.goalPortions.slice(0, item.itGoalPortion),
              { ...item.goalPortions[item.itGoalPortion], measure: action.payload.measure },
              ...item.goalPortions.slice(item.itGoalPortion + 1),
            ],
          };
        } else {
          return item;
        }
      });
    },
  },
});

export const { create, deleteAll, addExamples, changeMeasureGoalPortion } = goalsSlice.actions;

export default goalsSlice.reducer;
