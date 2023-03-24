import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import TabNavigation from "./src/routes/tabNavigation";
import "./src/localization/localize";
import { persistor, store } from "./src/state/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <TabNavigation></TabNavigation>
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
