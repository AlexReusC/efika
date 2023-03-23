import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import TabNavigation from "./src/routes/tabNavigation";
import "./src/localization/localize";
import { store } from "./src/state/store";
import { Provider } from "react-redux";

const App: React.FC = () => (
  <Provider store={store}>
    <NavigationContainer>
      <TabNavigation></TabNavigation>
    </NavigationContainer>
  </Provider>
);

export default App;
