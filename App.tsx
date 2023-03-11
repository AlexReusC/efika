import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/routes/tabNavigation';

const App: React.FC = () => (
  <NavigationContainer>
    <TabNavigation></TabNavigation>
  </NavigationContainer>
);

export default App;
