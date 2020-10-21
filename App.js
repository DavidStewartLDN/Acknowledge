import React from 'react';

import { Provider as PaperProvider} from 'react-native-paper';

// Likely remove App Navigator once finishing updating react-navigation to V.5
import AppNavigator from './src/navigation';

// Replaces createAppContainer from react-navigation V.4
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/navigation/MainStackNavigation';
//import BottomNav from './src/navigation/bottomNav';
// Imports for redux
import { Provider } from 'react-redux'

import store from './src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <MainStackNavigator/>
        </NavigationContainer>
        
      </PaperProvider>
    </Provider>

  );
}
