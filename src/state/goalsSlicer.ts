import { configureStore, createSlice } from "@reduxjs/toolkit";

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
  },
});

export const { create } = goalsSlice.actions;

export default goalsSlice.reducer;
