import React from 'react';

import { Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from './src/navigation';

// Imports for redux
// import { Provider as StoreProvider } from 'react-redux'
// import store from './src/redux/store'

// import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import thunkMiddleware from 'redux-thunk'
// import reducer from './src/redux/root-reducer.js'

// const middleware = applyMiddleware(thunkMiddleware)
// const store = createStore(reducer, middleware)

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
