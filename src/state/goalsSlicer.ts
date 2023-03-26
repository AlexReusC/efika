import { createSlice } from "@reduxjs/toolkit";

export interface GoalsState {
  value: number[];
}

const initialState: GoalsState = {
  value: [],
};

export const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    create: (state) => {
      state.value.push(1);
    },
    deleteAll: (state) => {
      state.value = [];
    },
  },
});

export const { create, deleteAll } = goalsSlice.actions;

export default goalsSlice.reducer;
