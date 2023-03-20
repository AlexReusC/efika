import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/routes/tabNavigation";
import "./src/localization/localize";

const App: React.FC = () => (
  <NavigationContainer>
    <TabNavigation></TabNavigation>
  </NavigationContainer>
);

export default App;
