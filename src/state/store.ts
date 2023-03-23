import { configureStore } from "@reduxjs/toolkit";
import goalsReducer from "./goalsSlicer";

export const store = configureStore({
  reducer: {
    goals: goalsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
