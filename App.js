import React from 'react';

import { Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from './src/navigation';

// Imports for redux
import { Provider } from 'react-redux'


import store from './src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </Provider>
  );
}
