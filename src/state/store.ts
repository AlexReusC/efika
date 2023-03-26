import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import goalsReducer from "./goalsSlicer";

const persistConfig: PersistConfig<any> = {
  key: "root",
  storage: AsyncStorage,
};

const persistedGoalsReducer = persistReducer(persistConfig, goalsReducer);

export const store = configureStore({
  reducer: {
    goals: persistedGoalsReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
