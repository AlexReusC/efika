import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
    deleteAll: (state) => {
      state.value = [];
    },
  },
});

export const { create, deleteAll } = goalsSlice.actions;

export default goalsSlice.reducer;
