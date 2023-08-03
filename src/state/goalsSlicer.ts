import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import testValues from "../constants/testValues";

export interface GoalsState {
  value: Goal[];
}

const initialState: GoalsState = {
  value: [],
};

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
  },
});

export const { create, deleteAll, addExamples } = goalsSlice.actions;

export default goalsSlice.reducer;
